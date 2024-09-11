import SignInWithOAuth from "@/components/OAuthSingIn";
import { SignedIn, SignedOut, useUser } from "@clerk/clerk-expo";
import { Link } from "expo-router";
import { View, Text, Image, Pressable } from "react-native";

export default function LoginSreen() {
  const { user } = useUser();

  return (
    <View className="h-full bg-white">
      <Image
        source={require("../../assets/images/login.png")}
        className="w-full h-[500px]"
      />
      <View className="flex items-center p-5">
        <Text className="text-3xl font-semibold text-center ">
          Ready to make a new friends?
        </Text>
        <Text className="text-lg text-center text-neutral">
          Lets adopt the pet which you like and make their life happy again!
        </Text>
        {user ? (
          <Link
            href="/(tabs)/home"
            className="p-3.5 bg-primary rounded-xl mt-12 w-full"
          >
            <Text className="text-xl font-medium text-center">Home</Text>
          </Link>
        ) : (
          <SignInWithOAuth />
        )}
      </View>
    </View>
  );
}
