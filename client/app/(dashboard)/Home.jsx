import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
  } from "react-native";
  import { useState } from "react";
  import { Ionicons, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
  
  export default function Home() {
    const [activeTab, setActiveTab] = useState("Home");
  
    const navItems = [
      { name: "Home", icon: <Ionicons name="home" size={24} /> },
      { name: "My Plant", icon: <FontAwesome5 name="seedling" size={20} /> },
      { name: "History", icon: <MaterialIcons name="history" size={24} /> },
      { name: "Settings", icon: <Ionicons name="settings" size={24} /> },
    ];
  
    return (
      <KeyboardAvoidingView
        className="flex-1 bg-green-50"
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View className="flex-1 pt-12 px-4 pb-24">
          {/* Top bar */}
          <View className="flex-row justify-between items-center mb-6">
            <Text className="text-3xl font-bold text-green-900">HerbaPedia</Text>
            <TouchableOpacity>
              <Ionicons name="notifications-outline" size={28} color="#1b5e20" />
            </TouchableOpacity>
          </View>
  
          {/* Search Bar */}
          <View className="flex-row items-center bg-white rounded-xl px-4 py-3 border border-green-200 shadow-sm">
            <Ionicons name="search" size={20} color="#4caf50" />
            <TextInput
              className="ml-2 flex-1 text-green-800"
              placeholder="Search for herbs..."
              placeholderTextColor="#9e9e9e"
            />
          </View>
  
          {/* Main content */}
          <ScrollView className="mt-6">
            <Text className="text-green-800 text-lg text-center mt-20">🌿 Welcome to HerbaPedia 🌿</Text>
          </ScrollView>
        </View>
  
        {/* Bottom Navigation */}
        <View className="absolute bottom-0 left-0 right-0 bg-white border-t border-green-100 flex-row justify-around items-center py-4 px-2 shadow-xl rounded-t-3xl">
          {/* Nav Items */}
          {navItems.slice(0, 2).map((item) => (
            <TouchableOpacity
              key={item.name}
              onPress={() => setActiveTab(item.name)}
              className="items-center"
            >
              {item.icon}
              <Text
                className={`text-xs mt-1 ${
                  activeTab === item.name ? "text-green-700 font-bold" : "text-gray-400"
                }`}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          ))}
  
          {/* Center Camera Button */}
          <TouchableOpacity
            onPress={() => setActiveTab("Camera")}
            className={`bg-green-600 p-4 rounded-full -mt-8 shadow-md border-4 border-white ${
              activeTab === "Camera" ? "scale-110" : ""
            }`}
          >
            <Ionicons name="camera" size={28} color="white" />
          </TouchableOpacity>
  
          {/* Remaining Nav Items */}
          {navItems.slice(2).map((item) => (
            <TouchableOpacity
              key={item.name}
              onPress={() => setActiveTab(item.name)}
              className="items-center"
            >
              {item.icon}
              <Text
                className={`text-xs mt-1 ${
                  activeTab === item.name ? "text-green-700 font-bold" : "text-gray-400"
                }`}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </KeyboardAvoidingView>
    );
  }
  