import { ID, Query } from "react-native-appwrite";

import { uploadFile } from "./file.action";
import type { BookmarkPostParams, CreatePostParams } from "./shared.types";
import { databases, databaseId, videoCollectionId, userCollectionId } from "../appwrite";

export async function createPost(params: CreatePostParams) {
  const { title, thumbnail, video, prompt, userId } = params;

  try {
    const [thumbnailUrl, videoUrl] = await Promise.all([
      uploadFile({ file: thumbnail, type: "image" }),
      uploadFile({ file: video, type: "video" }),
    ]);

    const newPost = await databases.createDocument(databaseId, videoCollectionId, ID.unique(), {
      title,
      thumbnail: thumbnailUrl,
      video: videoUrl,
      prompt,
      creator: userId,
    });

    return newPost;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getAllPosts() {
  try {
    const posts = await databases.listDocuments(databaseId, videoCollectionId, [
      Query.orderDesc("$createdAt"),
    ]);

    return posts.documents;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getLatestPosts() {
  try {
    const posts = await databases.listDocuments(databaseId, videoCollectionId, [
      Query.orderDesc("$createdAt", Query.limit(7)),
    ]);

    return posts.documents;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getLikedPosts(userId: string) {
  try {
    const posts = await getAllPosts();

    const likedPosts = posts.filter(post => {
      return post.liked.some(like => like.$id === userId);
    });

    return likedPosts;
  } catch (error) {
    throw new Error(error);
  }
}

export async function searchPosts(query: string | string[]) {
  try {
    const posts = await databases.listDocuments(databaseId, videoCollectionId, [
      Query.search("title", query),
    ]);

    return posts.documents;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getUserPosts(userId: string) {
  try {
    const posts = await databases.listDocuments(databaseId, videoCollectionId, [
      Query.equal("creator", userId),
      Query.orderDesc("$createdAt"),
    ]);

    return posts.documents;
  } catch (error) {
    throw new Error(error);
  }
}

export async function bookmarkPost(params: BookmarkPostParams) {
  const { videoId, userId } = params;

  try {
    const [video, user] = await Promise.all([
      databases.getDocument(databaseId, videoCollectionId, videoId),
      databases.getDocument(databaseId, userCollectionId, userId),
    ]);

    if (!user || !video) throw new Error("User or video not found");

    const isAlreadyLiked = video.liked.some(like => like.$id === userId);
    const newLiked = isAlreadyLiked
      ? video.liked.filter(like => like.$id !== userId)
      : [...video.liked, userId];

    const updatedVideo = await databases.updateDocument(databaseId, videoCollectionId, videoId, {
      liked: newLiked,
    });

    return updatedVideo;
  } catch (error) {
    throw new Error(error);
  }
}
