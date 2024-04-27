import React from "react";
import { View, Text } from "react-native";

import { TInfoBox } from "@/types";

const InfoBox = ({ title, subtitle, containerStyles, titleStyles }: TInfoBox) => {
  return (
    <View className={containerStyles}>
      <Text className={`text-white text-center font-psemibold ${titleStyles}`}>{title}</Text>
      {subtitle && (
        <Text className="text-sm text-gray-100 text-center font-pregular">{subtitle}</Text>
      )}
    </View>
  );
};

export default InfoBox;
