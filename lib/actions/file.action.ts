import { ID } from "react-native-appwrite";

import type { GetFilePreviewParams, UploadFileParams } from "./shared.types";
import { storage, storageId } from "../appwrite";

export async function getFilePreview(params: GetFilePreviewParams) {
  const { fileId, type } = params;

  let fileUrl;

  try {
    if (type === "video") {
      fileUrl = storage.getFileView(storageId, fileId);
    } else if (type === "image") {
      fileUrl = storage.getFilePreview(storageId, fileId, 2000, 2000, "top", 100);
    } else {
      throw new Error("Invalid file type");
    }

    if (!fileUrl) throw Error;

    return fileUrl;
  } catch (error) {
    throw new Error(error);
  }
}

export async function uploadFile(params: UploadFileParams) {
  const { file, type } = params;

  if (!file) return;

  const asset = {
    name: file.fileName,
    type: file.mimeType,
    size: file.filesize,
    uri: file.uri,
  };
  try {
    const uploadedFile = await storage.createFile(storageId, ID.unique(), asset);

    const fileUrl = await getFilePreview({
      fileId: uploadedFile.$id,
      type,
    });

    return fileUrl;
  } catch (error) {
    throw new Error(error);
  }
}
