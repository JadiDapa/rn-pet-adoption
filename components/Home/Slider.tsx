import { getAllSliders } from "@/lib/network/slider";
import { useQuery } from "@tanstack/react-query";
import { View, Text, FlatList, Image } from "react-native";

export default function Slider() {
  const {
    data: sliders,
    isLoading,
    error,
  } = useQuery({
    queryFn: getAllSliders,
    queryKey: ["sliders"],
  });

  if (error) {
    console.log(error);
    return (
      <View>
        <Text>Something Went Damn!</Text>
      </View>
    );
  }

  if (isLoading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (sliders) {
    return (
      <View>
        <FlatList
          data={sliders}
          className="w-full"
          horizontal={true}
          snapToAlignment="center"
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View className="w-[90vw] mr-4 rounded-2xl overflow-hidden">
              <Image source={{ uri: item.image }} className="w-full h-40 " />
            </View>
          )}
        />
      </View>
    );
  }
}
