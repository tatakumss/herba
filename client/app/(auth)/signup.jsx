import { View, Text, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView, Platform, ScrollView, } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";
import { Ionicons } from "@expo/vector-icons";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();

  const handleSignup = async () => {
    if (!name || !email || !password || !confirmPassword) {
      Alert.alert("Missing Fields", "Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Password Mismatch", "Passwords do not match.");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // You can store `name` in Firestore later if needed
      router.replace("/login"); // Navigate to login after signup
    } catch (error) {
      Alert.alert("Signup Failed", error.message);
    }
  };

  return (
    <KeyboardAvoidingView
      className="flex-1 bg-green-50"
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="flex-1 pt-12 px-6">
          {/* Back Button */}
          <TouchableOpacity
            className="absolute top-12 left-6 z-10"
            onPress={() => router.back()}
          >
            <Ionicons name="arrow-back" size={28} color="#1b5e20" />
          </TouchableOpacity>

          {/* Main Content */}
          <View className="flex-1 justify-center items-center mt-12">
            <Ionicons name="leaf" size={80} color="#1b5e20" />
            <Text className="text-3xl font-bold text-green-900 mt-2">Sign Up Account</Text>
            <Text className="text-base text-green-800 mb-8 mt-1 text-center px-4">
              Enter your personal data to create your account.
            </Text>

            {/* Name Field */}
            <View className="w-full mb-4">
              <Text className="text-green-800 mb-1">Full Name</Text>
              <TextInput
                className="border border-green-300 bg-white rounded-xl px-4 py-3 text-green-800"
                placeholder="Enter your name"
                placeholderTextColor="#9e9e9e"
                value={name}
                onChangeText={setName}
              />
            </View>

            {/* Email Field */}
            <View className="w-full mb-4">
              <Text className="text-green-800 mb-1">Email</Text>
              <TextInput
                className="border border-green-300 bg-white rounded-xl px-4 py-3 text-green-800"
                placeholder="Enter email"
                placeholderTextColor="#9e9e9e"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
              />
            </View>

            {/* Password Field */}
            <View className="w-full mb-4">
              <Text className="text-green-800 mb-1">Password</Text>
              <TextInput
                className="border border-green-300 bg-white rounded-xl px-4 py-3 text-green-800"
                placeholder="Enter password"
                placeholderTextColor="#9e9e9e"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
              />
            </View>

            {/* Confirm Password Field */}
            <View className="w-full mb-6">
              <Text className="text-green-800 mb-1">Confirm Password</Text>
              <TextInput
                className="border border-green-300 bg-white rounded-xl px-4 py-3 text-green-800"
                placeholder="Confirm password"
                placeholderTextColor="#9e9e9e"
                secureTextEntry
                value={confirmPassword}
                onChangeText={setConfirmPassword}
              />
            </View>

            {/* Signup Button */}
            <TouchableOpacity
              className="w-full bg-green-600 py-3 rounded-xl shadow-lg mb-4"
              onPress={handleSignup}
            >
              <Text className="text-center text-white font-semibold text-lg">Sign Up</Text>
            </TouchableOpacity>

            {/* Back to Login */}
            <TouchableOpacity onPress={() => router.push("/login")}>
              <Text className="text-green-700 text-base mt-2 underline">
                Already have an account? Log in
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
