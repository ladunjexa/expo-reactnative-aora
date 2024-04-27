import React, { useState } from "react";
import { FlatList } from "react-native";

import TrendingItem from "./trending-item";

import { TTrending } from "@/types";

const Trending = ({ posts }: TTrending) => {
  const [activeItem, setActiveItem] = useState<any>(posts[1]);

  const viewableItemChanged = ({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setActiveItem(viewableItems[0].key);
    }
  };

  return (
    <FlatList
      data={posts}
      keyExtractor={item => item.$id}
      renderItem={({ item }) => <TrendingItem item={item} activeItem={activeItem} />}
      onViewableItemsChanged={viewableItemChanged}
      viewabilityConfig={{
        itemVisiblePercentThreshold: 70,
      }}
      contentOffset={{ x: 170, y: 0 }}
      horizontal
    />
  );
};

export default Trending;
