import { ResizeMode, Video } from "expo-av";
import * as ImagePicker from "expo-image-picker";
import { router } from "expo-router";
import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, Image, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import CustomButton from "@/components/atoms/custom-button";
import FormField from "@/components/shared/form-field";
import { icons } from "@/constants";
import { useGlobalContext } from "@/context/global-provider";
import { createPost } from "@/lib/actions/post.action";
import { type TPostForm } from "@/types";

const DEFAULT_POST_FORM: TPostForm = {
  title: "",
  video: null,
  thumbnail: null,
  prompt: "",
};

export default function Create() {
  const { user } = useGlobalContext();
  const [uploading, setUploading] = useState<boolean>(false);
  const [form, setForm] = useState<TPostForm>(DEFAULT_POST_FORM);

  const onSubmit = async () => {
    if (!form.prompt || !form.title || !form.thumbnail || !form.video) {
      return Alert.alert("Please fill all fields");
    }

    setUploading(true);

    try {
      await createPost({
        ...form,
        userId: user.$id,
      });

      Alert.alert("Success", "Video uploaded successfully");

      router.push("/home");
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setForm(DEFAULT_POST_FORM);
      setUploading(false);
    }
  };

  const openPicker = async (selectedType: "video" | "image") => {
    // const result = await DocumentPicker.getDocumentAsync({
    //   type:
    //     selectedType === "image"
    //       ? ["image/png", "image/jpg", "image/jpeg"]
    //       : ["video/mp4", "video/gif"],
    // });
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes:
        selectedType === "image"
          ? ImagePicker.MediaTypeOptions.Images
          : ImagePicker.MediaTypeOptions.Videos,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      if (selectedType === "image") {
        setForm({ ...form, thumbnail: result.assets[0] });
      }

      if (selectedType === "video") {
        setForm({ ...form, video: result.assets[0] });
      }
    }
    // } else {
    //   setTimeout(() => {
    //     Alert.alert("Document picked", JSON.stringify(result, null, 2));
    //   }, 100);
    // }
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView className="px-4 my-6">
        <Text className="text-2xl text-white font-psemibold">Upload Video</Text>

        <FormField
          title="Upload Video"
          value={form.title}
          placeholder="Give your video a catch title..."
          handleChangeText={e => setForm({ ...form, title: e })}
          otherStyles="mt-10"
        />

        <View className="mt-7 space-y-2">
          <Text className="text-base text-gray-100 font-pmedium">Upload Video</Text>
          <TouchableOpacity onPress={() => openPicker("video")}>
            {form.video ? (
              <Video
                source={{ uri: form.video.uri }}
                className="w-full h-64 rounded-2xl"
                resizeMode={ResizeMode.COVER}
              />
            ) : (
              <View className="w-full h-40 px-4 bg-black-100 rounded-2xl justify-center items-center">
                <View className="w-14 h-14 border border-dashed border-secondary-100 justify-center items-center">
                  <Image source={icons.upload} resizeMode="contain" className="w-1/2 h-1/2" />
                </View>
              </View>
            )}
          </TouchableOpacity>
        </View>

        <View className="mt-7 space-y-2">
          <Text className="text-base text-gray-100 font-pmedium">Thumbnail Image</Text>

          <TouchableOpacity onPress={() => openPicker("image")}>
            {form.thumbnail ? (
              <Image
                source={{ uri: form.thumbnail.uri }}
                className="w-full h-64 rounded-2xl"
                resizeMode="cover"
              />
            ) : (
              <View className="w-full h-16 px-4 bg-black-100 rounded-2xl justify-center items-center border-2 border-black-200 flex-row space-x-2">
                <Image source={icons.upload} resizeMode="contain" className="w-5 h-5" />
                <Text className="text-sm text-gray-100 font-pmedium">Choose a file</Text>
              </View>
            )}
          </TouchableOpacity>
        </View>

        <FormField
          title="AI Prompt"
          value={form.prompt}
          placeholder="The prompt you used to create this video"
          handleChangeText={e => setForm({ ...form, prompt: e })}
          otherStyles="mt-7"
        />

        <CustomButton
          title="Submit & Publish"
          handlePress={onSubmit}
          containerStyles="mt-7"
          isLoading={uploading}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
