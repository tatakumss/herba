import {
    View,
    Text,
    TextInput,
    ScrollView,
    TouchableOpacity,
    Switch,
    Alert,
} from "react-native";
import { Ionicons, FontAwesome5, MaterialIcons, Entypo } from "@expo/vector-icons";
import { useState } from "react";
import { useRouter } from "expo-router";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase";

export default function Settings() {
    const router = useRouter();
    const [darkMode, setDarkMode] = useState(false);

    const handleLogout = async () => {
        try {
            await signOut(auth);
            router.replace("/login");
        } catch (error) {
            Alert.alert("Logout Failed", error.message);
        }
    };

    return (
        <View className="flex-1 bg-green-50 pt-12 px-4">
            {/* Back Button */}
            <TouchableOpacity
                className="absolute top-4 left-4 z-10  "
                style={{ elevation: 4 }}
                onPress={() => router.replace("/Home")}
            >
                <Ionicons name="arrow-back" size={24} color="#1b5e20" />
            </TouchableOpacity>

            {/* Search Bar */}
            <View className="flex-row items-center bg-white rounded-xl px-4 py-3 border border-green-200 shadow-sm mb-4 mt-2">
                <Ionicons name="search" size={20} color="#4caf50" />
                <TextInput
                    className="ml-2 flex-1 text-green-800"
                    placeholder="Search settings..."
                    placeholderTextColor="#9e9e9e"
                />
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                <Section
                    title="Account"
                    items={[
                        { label: "Profile & Accounts", icon: "person" },
                        { label: "Security", icon: "lock-closed" },
                        { label: "Privacy & Security", icon: "shield-checkmark" },
                        { label: "Billing & Subscription", icon: "card" },
                    ]}
                />

                {/* Personalization */}
                <Text className="text-lg font-bold text-green-800 mt-6 mb-2">Personalization</Text>
                <View className="bg-white rounded-xl p-4 space-y-4 shadow-sm">
                    <View className="flex-row justify-between items-center">
                        <View className="flex-row items-center space-x-3">
                            <Ionicons name="moon" size={20} color="#388e3c" />
                            <Text className="text-green-800">Dark Mode</Text>
                        </View>
                        <Switch
                            value={darkMode}
                            onValueChange={setDarkMode}
                            trackColor={{ false: "#ccc", true: "#388e3c" }}
                            thumbColor={darkMode ? "#1b5e20" : "#f4f3f4"}
                        />
                    </View>
                    <Item label="Appearance" icon="color-palette" />
                    <Item label="Language" icon="language" />
                </View>

                <Section
                    title="Notification & Activity"
                    items={[
                        { label: "Notification", icon: "notifications" },
                        { label: "Sounds", icon: "volume-high" },
                    ]}
                />

                <Section
                    title="Data & Storage"
                    items={[
                        { label: "Data & Storage", icon: "cloud-upload" },
                        { label: "Backup & Store", icon: "folder-open" },
                        { label: "Connections", icon: "link" },
                    ]}
                />

                <Section
                    title="Accessibility & Advanced"
                    items={[
                        { label: "Help & Feedback", icon: "help-circle" },
                        { label: "Permissions", icon: "key" },
                        { label: "Terms & Service", icon: "document-text" },
                        { label: "Support us", icon: "heart" },
                    ]}
                />

                {/* Danger Zone */}
                <Text className="text-lg font-bold text-red-700 mt-6 mb-2">Danger</Text>
                <View className="bg-white rounded-xl p-4 space-y-4 shadow-sm">
                    <TouchableOpacity className="bg-red-100 py-3 rounded-xl">
                        <Text className="text-center text-red-700 font-semibold">
                            Deactivate Account
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={handleLogout}
                        className="bg-red-600 py-3 rounded-xl"
                    >
                        <Text className="text-center text-white font-semibold">Logout</Text>
                    </TouchableOpacity>
                </View>

                <View className="h-12" />
            </ScrollView>
        </View>
    );
}

// Reusable section with icons
function Section({ title, items }) {
    return (
        <>
            <Text className="text-lg font-bold text-green-800 mt-6 mb-2">{title}</Text>
            <View className="bg-white rounded-xl p-4 space-y-4 shadow-sm">
                {items.map((item) => (
                    <Item key={item.label} label={item.label} icon={item.icon} />
                ))}
            </View>
        </>
    );
}

// Reusable item with icon
function Item({ label, icon }) {
    return (
        <TouchableOpacity className="flex-row justify-between items-center">
            <View className="flex-row items-center space-x-3">
                <Ionicons name={icon} size={20} color="#388e3c" />
                <Text className="text-green-800">{label}</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#4caf50" />
        </TouchableOpacity>
    );
}
