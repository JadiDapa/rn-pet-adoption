import { View, Text } from "react-native";
import React from "react";
import { useUser } from "@clerk/clerk-expo";
import { Redirect } from "expo-router";

export default function Index() {
  const { user } = useUser();

  return (
    <View className="flex-1">
      <Text>{user?.fullName}</Text>
      {user ? <Redirect href={"/(tabs)/home"} /> : <Redirect href="/login" />}
    </View>
  );
}
