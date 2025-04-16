import { Link } from "expo-router";
import { Redirect } from 'expo-router';
import { useAuth } from '../../hooks/AuthContext';
import { View, Text, ActivityIndicator } from 'react-native';

export default function Home() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (!user) {
    return <Redirect href="/login" />;
  }

  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-lg">Welcome back, {user.email}!</Text>

      {/* Sign Up Link */}
      <Text
          className="text-center text-[#4B5563] text-medium mt-4"
          style={{ fontFamily: "Poppins_400Regular" }}
        >
          Don't have an account?{" "}
          <Link
            href="/(auth)/signup"
            className="text-[#2563EB] font-medium"
            style={{ fontFamily: "Poppins_500Medium" }}
          >
            Sign Up
          </Link>
        </Text>
    </View>
  );
}
