import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Index() {
  const router = useRouter();

  return (
   
      <View className="flex-1 justify-center items-center bg-green-50/60 px-8">
        {/* Leaf Logo */}
        <MaterialCommunityIcons name="leaf" size={120} color="#1b5e20" />
        <Text className="text-4xl font-bold text-green-900 mt-4 mb-10 tracking-wide">
          HerbaPedia
        </Text>

        {/* Login Button */}
        <TouchableOpacity
          className="w-full bg-green-500 py-3 rounded-xl shadow-lg mb-4"
          onPress={() => router.push("/login")}
        >
          <Text className="text-center text-white font-semibold text-lg">Login</Text>
        </TouchableOpacity>

        {/* OR Text */}
        <Text className="text-green-800 my-2 font-medium">or</Text>

        {/* Signup Button */}
        <TouchableOpacity
          className="w-full bg-white py-3 rounded-xl border border-green-500"
          onPress={() => router.push("/signup")}
        >
          <Text className="text-center text-green-700 font-semibold text-lg">Sign Up</Text>
        </TouchableOpacity>
      </View>
  );
}
