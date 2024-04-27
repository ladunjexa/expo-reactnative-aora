import { router } from "expo-router";
import React from "react";
import { View, FlatList, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import EmptyState from "@/components/atoms/empty-state";
import InfoBox from "@/components/atoms/info-box";
import VideoCard from "@/components/cards/video-card";
import { icons } from "@/constants";
import { useGlobalContext } from "@/context/global-provider";
import useAppwrite from "@/hooks/use-appwrite";
import { getUserPosts } from "@/lib/actions/post.action";
import { signOut } from "@/lib/actions/user.action";

export default function Profile() {
  const { user, setUser, setIsLoggedIn } = useGlobalContext();
  const { data: posts } = useAppwrite(() => getUserPosts(user.$id));

  const onLogout = async () => {
    await signOut();
    setUser(null);
    setIsLoggedIn(false);

    router.replace("/sign-in");
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        data={posts}
        keyExtractor={item => `${item.$id}`}
        renderItem={({ item }) => <VideoCard video={item} />}
        ListHeaderComponent={() => (
          <View className="w-full justify-center items-center mt-6 mb-12 px-4">
            <TouchableOpacity className="w-full items-end mb-10" onPress={onLogout}>
              <Image source={icons.logout} className="w-6 h-6" resizeMode="contain" />
            </TouchableOpacity>

            <View className="w-16 h-16 border border-secondary rounded-lg justify-center items-center">
              <Image
                source={{ uri: user?.avatar }}
                className="w-[90%] h-[90%] rounded-lg"
                resizeMode="cover"
              />
            </View>

            <InfoBox title={user?.username} containerStyles="mt-5" titleStyles="text-lg" />

            <View className="mt-5 flex-row">
              <InfoBox
                title={posts.length || 0}
                subtitle="Posts"
                containerStyles="mr-10"
                titleStyles="text-xl"
              />

              <InfoBox title="1.2k" subtitle="Followers" titleStyles="text-xl" />
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState title="No Videos Found" subtitle="No videos found for this search query" />
        )}
      />
    </SafeAreaView>
  );
}
