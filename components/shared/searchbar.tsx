import { router, usePathname } from "expo-router";
import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Image, Alert } from "react-native";

import { icons } from "@/constants";
import { type TSearchbar } from "@/types";

const Searchbar = ({ initialQuery = "", placeholder = "Search for a video topic" }: TSearchbar) => {
  const pathname = usePathname();
  const [query, setQuery] = useState<string | string[]>(initialQuery || "");

  return (
    <View className="border-2 border-black-200 w-full h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary items-center flex-row space-x-4">
      <TextInput
        className="text-base mt-0.5 text-white flex-1 font-pregular"
        value={query as string}
        placeholder={placeholder}
        placeholderTextColor="#CDCDE0"
        onChangeText={e => setQuery(e)}
      />

      <TouchableOpacity
        onPress={() => {
          if (!query) {
            return Alert.alert(
              "Missing query",
              "Please input something to search results across database"
            );
          }

          if (pathname.startsWith(`/search`)) router.setParams({ query: query as string });
          else router.push(`/search/${query}`);
        }}
      >
        <Image source={icons.search} className="w-5 h-5" resizeMode="contain" />
      </TouchableOpacity>
    </View>
  );
};

export default Searchbar;
