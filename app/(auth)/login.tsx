import { Link } from "expo-router";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useState } from "react";
import { Feather, MaterialIcons } from "@expo/vector-icons";

export default function Login() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View className="flex-1 items-center justify-center bg-[#FFFFFF] px-6">
      <View className="w-full space-y-6">
        {/* Logo and Title */}
        <View className="mb-6">
            <View className="flex-row items-center justify-start gap-x-2">
                <Image
                    source={require("../../assets/images/bw-large.png")}
                    className="w-16 h-16 mr-2"
                    resizeMode="contain"
                />
                <Text
                    className="text-[#1A3C34] text-xl font-semibold"
                    style={{ fontFamily: "Poppins_500Medium" }}
                >
                    BudgetWise.
                </Text>
            </View>

          <Text
            className="text-[#1A3C34] text-4xl font-bold"
            style={{ fontFamily: "Poppins_700Bold" }}
          >
            Welcome Back!
          </Text>
          <Text
            className="text-[#4B5563] text-xl font-medium mt-2"
            style={{ fontFamily: "Poppins_500Medium" }}
          >
            Sign In To Continue
          </Text>
        </View>


        {/* Email Input */}
        <View className="flex-row items-center border border-[#A3C5A8] rounded-xl px-4 py-3 bg-[#E7F5E3] mb-6 mt-7">
          <TextInput
            placeholder="Email"
            placeholderTextColor="#6B7280"
            className="flex-1 text-[#4B5563] text-base"
            style={{ fontFamily: "Poppins_400Regular" }}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <MaterialIcons name="email" size={22} color="#6B7280" />
        </View>

        {/* Password Input */}
        <View className="flex-row items-center border border-[#A3C5A8] rounded-xl px-4 py-3 bg-[#E7F5E3] mb-4">
          <TextInput
            placeholder="Password"
            placeholderTextColor="#6B7280"
            className="flex-1 text-[#4B5563] text-base"
            style={{ fontFamily: "Poppins_400Regular" }}
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={togglePasswordVisibility}>
            <Feather
              name={showPassword ? "eye" : "eye-off"}
              size={22}
              color="#6B7280"
            />
          </TouchableOpacity>
        </View>

        {/* Forgot Password Link */}
        <View className="items-end mb-7">
        <Link
            href="/(auth)/forgot-password"
            className="text-[#2563EB] text-medium font-medium"
            style={{ fontFamily: "Poppins_500Medium" }}
        >
            Forgot Password?
        </Link>
        </View>

        {/* Sign Up Button */}
        <TouchableOpacity className="bg-[#B2EA71] rounded-xl py-4 mt-2">
          <Text
            className="text-center text-[#133C13] font-semibold text-lg"
            style={{ fontFamily: "Poppins_600SemiBold" }}
          >
            Sign In
          </Text>
        </TouchableOpacity>

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
    </View>
  );
}