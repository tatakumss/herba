import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";
import { useRouter } from "expo-router";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import { useGoogleSignIn } from "../utils/googleAuth";
import { useEffect, useState } from "react";
import * as WebBrowser from "expo-web-browser";

WebBrowser.maybeCompleteAuthSession();

export default function Index() {
  const router = useRouter();
  const { signInWithGoogle, request } = useGoogleSignIn();
  const [loading, setLoading] = useState(false);

  const handleGoogleLogin = async () => {
    try {
      setLoading(true);
      await signInWithGoogle();
      router.replace("/Home");
    } catch (err) {
      Alert.alert("Login Failed", err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View className="flex-1 justify-center items-center bg-green-50/60 px-8">
      <MaterialCommunityIcons name="leaf" size={120} color="#1b5e20" />
      <Text className="text-4xl font-bold text-green-900 mt-4 mb-10 tracking-wide">
        HerbaPedia
      </Text>

      <TouchableOpacity
        className="w-full bg-green-500 py-3 rounded-xl shadow-lg mb-4"
        onPress={() => router.push("/login")}
      >
        <Text className="text-center text-white font-semibold text-lg">
          Login
        </Text>
      </TouchableOpacity>

      <Text className="text-green-800 my-2 font-medium">or</Text>

      <TouchableOpacity
        className="w-full bg-white py-3 rounded-xl border border-green-500 mb-4"
        onPress={() => router.push("/signup")}
      >
        <Text className="text-center text-green-700 font-semibold text-lg">
          Sign Up
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        disabled={!request}
        onPress={handleGoogleLogin}
        className="flex-row items-center justify-center border border-gray-300 bg-white px-4 py-3 rounded-xl shadow-sm"
      >
        {loading ? (
          <ActivityIndicator color="#1b5e20" />
        ) : (
          <>
            <AntDesign name="google" size={20} color="#DB4437" />
            <Text className="ml-2 text-green-800 font-medium">
              Continue with Google
            </Text>
          </>
        )}
      </TouchableOpacity>
    </View>
  );
}
