import { Link, router } from "expo-router";
import React, { useState } from "react";
import { Alert, Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import CustomButton from "@/components/atoms/custom-button";
import FormField from "@/components/shared/form-field";
import { images } from "@/constants";
import { useGlobalContext } from "@/context/global-provider";
import { getCurrentUser, signIn } from "@/lib/actions/user.action";
import { TUserForm } from "@/types";

export default function SignIn() {
  const { setUser, setIsLoggedIn } = useGlobalContext();

  const [form, setForm] = useState<Partial<TUserForm>>({
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const onSubmit = async () => {
    if (form.email === "" || form.password === "") {
      Alert.alert("Error", "Please fill all fields");
    }

    setIsSubmitting(true);

    try {
      await signIn({
        email: form.email,
        password: form.password,
      });
      const result = await getCurrentUser();

      setUser(result);
      setIsLoggedIn(true);

      router.replace("/home");
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[85vh] px-4 my-6">
          <Image source={images.logo} resizeMode="contain" className="w-[115px] h-[35px]" />
          <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">
            Log In to Aora
          </Text>

          <FormField
            title="Email"
            value={form.email}
            handleChangeText={e => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          <FormField
            title="Password"
            value={form.password}
            handleChangeText={e => setForm({ ...form, password: e })}
            otherStyles="mt-7"
          />

          <CustomButton
            title="Sign In"
            handlePress={onSubmit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />

          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Don't have an account?{" "}
              <Link href="/sign-up" className="text-lg font-psemibold text-secondary">
                Sign Up
              </Link>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
