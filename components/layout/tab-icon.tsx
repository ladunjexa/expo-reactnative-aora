import React from "react";
import { View, Image, Text } from "react-native";

import { type TTabIcon } from "@/types";

const TabIcon = ({ icon, color, name, focused }: TTabIcon) => {
  return (
    <View className="items-center justify-center gap-2">
      <Image source={icon} resizeMode="contain" tintColor={color} className="w-6 h-6" />
      <Text className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`} style={{ color }}>
        {name}
      </Text>
    </View>
  );
};

export default TabIcon;
