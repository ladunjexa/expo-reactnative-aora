import { type TPostForm } from "@/types";

export type SignInParams = {
  email: string;
  password: string;
};

export type CreateUserParams = SignInParams & {
  username: string;
};

export type GetFilePreviewParams = {
  fileId: string;
  type: string;
};

export type UploadFileParams = {
  file: any;
  type: string;
};

export type CreatePostParams = TPostForm & {
  userId: string;
};

export type BookmarkPostParams = {
  videoId: string;
  userId: string;
};
