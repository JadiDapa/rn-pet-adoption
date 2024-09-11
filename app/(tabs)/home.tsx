import React from "react";
import Header from "@/components/Home/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import Slider from "@/components/Home/Slider";

export default function Home() {

  
  return (
    <SafeAreaView className="p-5">
      <Header />
      <Slider />
    </SafeAreaView>
  );
}
