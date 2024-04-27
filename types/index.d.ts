import type { ImageSourcePropType, KeyboardTypeOptions } from "react-native";

export type TUserForm = {
  username: string;
  email: string;
  password: string;
};

export type TPostForm = {
  title: string;
  video: ImagePicker.ImagePickerAsset;
  thumbnail: ImagePicker.ImagePickerAsset;
  prompt: string;
};

export type TUseAppwrite = {
  data: any;
  isLoading: boolean;
  refetch: () => void;
};

export type GlobalContextType = {
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
  user: any;
  setUser: (value: any) => void;
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
};

export type TVideoCard = {
  video: {
    $id: string;
    title: string;
    thumbnail: string;
    video: string;
    creator: {
      username: string;
      avatar: string;
    };
  };
};

export type TTrendingItem = {
  activeItem: string;
  item: any;
};

export type TTrending = {
  posts: any[];
};

export type TInfoBox = {
  title: string;
  subtitle?: string;
  containerStyles?: string;
  titleStyles?: string;
};

export type TFormField = {
  title: string;
  value: string;
  placeholder?: string;
  handleChangeText: (text: string) => void;
  otherStyles?: string;
  keyboardType?: KeyboardTypeOptions | undefined;
};

export type TEmptyState = {
  title: string;
  subtitle: string;
};

export type TCustomButton = {
  title: string;
  handlePress: () => void;
  containerStyles?: string;
  textStyles?: string;
  isLoading?: boolean;
};

export type TSearchbar = {
  initialQuery?: string | string[];
  placeholder?: string;
};

export type TTabIcon = {
  icon: ImageSourcePropType;
  color: string;
  name: string;
  focused: boolean;
};
