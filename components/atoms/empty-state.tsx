import { router } from "expo-router";
import React from "react";
import { View, Text, Image } from "react-native";

import CustomButton from "./custom-button";

import { images } from "@/constants";
import { TEmptyState } from "@/types";

const EmptyState = ({ title, subtitle }: TEmptyState) => {
  return (
    <View className="justify-center items-center px-4">
      <Image source={images.empty} className="w-[270px] h-[215px]" resizeMode="contain" />
      <Text className="text-xl font-psemibold text-white">{title}</Text>
      <Text className="font-pmedium text-sm text-gray-100">{subtitle}</Text>

      <CustomButton
        title="Create video"
        handlePress={() => router.push("/create")}
        containerStyles="w-full my-5"
      />
    </View>
  );
};

export default EmptyState;
