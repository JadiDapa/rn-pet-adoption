import * as SecureStore from "expo-secure-store";
import { useFonts } from "expo-font";
import { Slot, Stack } from "expo-router";
import { ClerkProvider, ClerkLoaded } from "@clerk/clerk-expo";

export interface TokenCache {
  getToken: (key: string) => Promise<string | undefined | null>;
  saveToken: (key: string, token: string) => Promise<void>;
  clearToken?: (key: string) => void;
}

const tokenCache = {
  async getToken(key: string) {
    try {
      const item = await SecureStore.getItemAsync(key);
      if (item) {
        console.log(`${key} was used 🔐 \n`);
      } else {
        console.log("No values stored under key: " + key);
      }
      return item;
    } catch (error) {
      console.error("SecureStore get item error: ", error);
      await SecureStore.deleteItemAsync(key);
      return null;
    }
  },
  async saveToken(key: string, value: string) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};

export default function RootLayout() {
  const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;

  if (!publishableKey) {
    throw new Error(
      "Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env"
    );
  }

  useFonts({
    outfit: require("./../assets/fonts/Outfit-Regular.ttf"),
    outfitBold: require("./../assets/fonts/Outfit-Bold.ttf"),
    outfitMedium: require("./../assets/fonts/Outfit-Medium.ttf"),
    outfitLight: require("./../assets/fonts/Outfit-Light.ttf"),
    outfitSemiBold: require("./../assets/fonts/Outfit-SemiBold.ttf"),
    outfitExtraBold: require("./../assets/fonts/Outfit-ExtraBold.ttf"),
    outfitBlack: require("./../assets/fonts/Outfit-Black.ttf"),
    outfitThin: require("./../assets/fonts/Outfit-Thin.ttf"),
    outfitExtraLight: require("./../assets/fonts/Outfit-ExtraLight.ttf"),
  });

  return (
    <ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache}>
      <ClerkLoaded>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="login/index" options={{ headerShown: false }} />
        </Stack>
      </ClerkLoaded>
    </ClerkProvider>
  );
}
