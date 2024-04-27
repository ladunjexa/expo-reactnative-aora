import React, { useState } from "react";
import { View, Text, FlatList, RefreshControl } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import EmptyState from "@/components/atoms/empty-state";
import VideoCard from "@/components/cards/video-card";
import { useGlobalContext } from "@/context/global-provider";
import useAppwrite from "@/hooks/use-appwrite";
import { getLikedPosts } from "@/lib/actions/post.action";

export default function Bookmark() {
  const { user } = useGlobalContext();
  const { data: posts, refetch } = useAppwrite(() => getLikedPosts(user.$id));
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const onRefresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        data={posts}
        keyExtractor={item => `${item.$id}`}
        renderItem={({ item }) => <VideoCard video={item} />}
        ListHeaderComponent={() => (
          <View className="my-6 px-4">
            <Text className="text-2xl font-psemibold text-white">Saved Videos</Text>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState title="No Videos Found" subtitle="No videos bookmarked yet" />
        )}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      />
    </SafeAreaView>
  );
}
