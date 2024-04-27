import { Client, Account, Avatars, Databases, Storage } from "react-native-appwrite";

export const appwriteConfig = {
  endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT || "https://cloud.appwrite.io/v1",
  platform: process.env.EXPO_PUBLIC_APPWRITE_PLATFORM,
  projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
  databaseId: process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID,
  userCollectionId: process.env.EXPO_PUBLIC_APPWRITE_USER_COLLECTION_ID,
  videoCollectionId: process.env.EXPO_PUBLIC_APPWRITE_VIDEO_COLLECTION_ID,
  storageId: process.env.EXPO_PUBLIC_APPWRITE_STORAGE_ID,
};

export const {
  endpoint,
  platform,
  projectId,
  databaseId,
  userCollectionId,
  videoCollectionId,
  storageId,
} = appwriteConfig;

// Initialize Appwrite client
const client: Client = new Client();

// Set Appwrite endpoint, platform and project
client.setEndpoint(endpoint).setProject(projectId).setPlatform(platform);

// Initialize Appwrite services
export const account: Account = new Account(client);
export const avatars: Avatars = new Avatars(client);
export const databases: Databases = new Databases(client);
export const storage: Storage = new Storage(client);
