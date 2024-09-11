import { useUser } from "@clerk/clerk-expo";
import { View, Text, Image } from "react-native";

export default function Header() {
  const { user } = useUser();

  return (
    <View className="flex flex-row items-center justify-between">
      <View>
        <Text className="text-lg">Welcome</Text>
        <Text className="text-2xl font-medium">{user?.fullName}</Text>
      </View>
      <Image
        source={{ uri: user?.imageUrl }}
        className="rounded-full w-14 h-14"
      />
    </View>
  );
}
