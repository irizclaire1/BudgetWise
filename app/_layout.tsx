// app/_layout.tsx
import { Stack } from "expo-router";
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "../hooks/AuthContext";
import "@/global.css";

export default function RootLayout() {
  return (
    <AuthProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </AuthProvider>
  );
}
