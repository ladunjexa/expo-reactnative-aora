import { ResizeMode, Video } from "expo-av";
import React, { useState } from "react";
import { TouchableOpacity, Image, ImageBackground } from "react-native";
import * as Animatable from "react-native-animatable";

import { icons } from "@/constants";
import { zoomIn, zoomOut } from "@/lib/animations";
import { type TTrendingItem } from "@/types";

const TrendingItem = ({ activeItem, item }: TTrendingItem) => {
  const [play, setPlay] = useState<boolean>(false);

  return (
    <Animatable.View
      className="mr-5"
      animation={(activeItem === item.$id ? zoomIn : zoomOut) as Animatable.CustomAnimation}
      duration={500}
    >
      {play ? (
        <Video
          source={{ uri: item.video }}
          className="w-52  h-72 rounded-[35px] mt-3 bg-white/10"
          resizeMode={ResizeMode.CONTAIN}
          useNativeControls
          shouldPlay
          onPlaybackStatusUpdate={status => {
            if (status.isLoaded && status.didJustFinish) {
              setPlay(false);
            }
          }}
        />
      ) : (
        <TouchableOpacity
          className="relative justify-center items-center"
          activeOpacity={0.7}
          onPress={() => setPlay(true)}
        >
          <ImageBackground
            source={{ uri: item.thumbnail }}
            className="w-52 h-72 rounded-[35px] my-5 overflow-hidden shadow-lg shadow-black/40"
            resizeMode="cover"
          />

          <Image source={icons.play} className="w-12 h-12 absolute" resizeMode="contain" />
        </TouchableOpacity>
      )}
    </Animatable.View>
  );
};

export default TrendingItem;
