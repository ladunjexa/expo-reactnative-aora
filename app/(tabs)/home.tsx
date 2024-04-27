import React, { useState } from "react";
import { View, Text, FlatList, Image, RefreshControl } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import EmptyState from "@/components/atoms/empty-state";
import VideoCard from "@/components/cards/video-card";
import Searchbar from "@/components/shared/searchbar";
import Trending from "@/components/trending";
import { images } from "@/constants";
import { useGlobalContext } from "@/context/global-provider";
import useAppwrite from "@/hooks/use-appwrite";
import { getAllPosts, getLatestPosts } from "@/lib/actions/post.action";

export default function Home() {
  const { user } = useGlobalContext();
  const { data: posts, refetch } = useAppwrite(getAllPosts);
  const { data: latestPosts } = useAppwrite(getLatestPosts);
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
          <View className="my-6 px-4 space-y-6">
            <View className="justify-between items-start flex-row mb-6">
              <View>
                <Text className="font-pmedium text-sm text-gray-100">Welcome Back</Text>
                <Text className="text-2xl font-psemibold text-white">{user?.username}</Text>
              </View>

              <View className="mt-1.5">
                <Image source={images.logoSmall} className="w-9 h-9" resizeMode="contain" />
              </View>
            </View>

            <Searchbar />

            <View className="w-full flex-1 pt-5 pb-8">
              <Text className="text-gray-100 text-lg font-pregular mb-3">Latest Videos</Text>
              <Trending posts={latestPosts ?? []} />
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState title="No Videos Found" subtitle="Be the first one to upload video" />
        )}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      />
    </SafeAreaView>
  );
}
