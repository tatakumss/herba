import {View, Text, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView, Platform, ScrollView, } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";
import { Ionicons } from "@expo/vector-icons";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Missing Fields", "Please enter both email and password.");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.replace("/Home"); // Redirect to home
    } catch (error) {
      Alert.alert("Login Failed", error.message);
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

          {/* Centered Content */}
          <View className="flex-1 justify-center items-center mt-12">
            <Ionicons name="leaf" size={80} color="#1b5e20" />
            <Text className="text-3xl font-bold text-green-900 mt-2 mb-8">Welcome Back</Text>

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
            <View className="w-full mb-6">
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

            {/* Login Button */}
            <TouchableOpacity
              className="w-full bg-green-600 py-3 rounded-xl shadow-lg mb-4"
              onPress={handleLogin}
            >
              <Text className="text-center text-white font-semibold text-lg">Login</Text>
            </TouchableOpacity>

            {/* Signup Redirect */}
            <TouchableOpacity onPress={() => router.push("/signup")}>
              <Text className="text-green-700 text-base mt-2 underline">
                Don't have an account? Sign up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
