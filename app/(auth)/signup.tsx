import { Link, useRouter } from "expo-router";
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from "react-native";
import { useState } from "react";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore"; // Import Firestore functions
import { auth, db } from "../../config/firebaseConfig"; // Ensure db (Firestore) is exported from firebaseConfig

export default function Signup() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSignup = async () => {
    if (!username || !email || !password) {
      Alert.alert("Error", "Please fill in all fields.");
      return;
    }

    try {
      // Create user in Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Store additional user data in Firestore
      const userRef = doc(db, "users", user.uid);
      await setDoc(userRef, {
        username: username,
        email: email,
        profilePicture: "https://via.placeholder.com/150", // Default profile picture URL
        createdAt: new Date().toISOString(),
      });

      // Successfully created user and stored data
      router.replace("/(auth)/onboarding");
    } catch (error: any) {
        Alert.alert("Signup Failed", error.message);
    }
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
            Register Now!
          </Text>
          <Text
            className="text-[#4B5563] text-xl font-medium mt-2"
            style={{ fontFamily: "Poppins_500Medium" }}
          >
            Create New Account
          </Text>
        </View>

        {/* Username Input */}
        <View className="flex-row items-center border border-[#A3C5A8] rounded-xl px-4 py-3 bg-[#E7F5E3] mb-5 mt-7">
          <TextInput
            placeholder="User Name"
            placeholderTextColor="#6B7280"
            className="flex-1 text-[#4B5563] text-base"
            style={{ fontFamily: "Poppins_400Regular" }}
            value={username}
            onChangeText={setUsername}
          />
          <Feather name="user" size={22} color="#6B7280" />
        </View>

        {/* Email Input */}
        <View className="flex-row items-center border border-[#A3C5A8] rounded-xl px-4 py-3 bg-[#E7F5E3] mb-5">
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

        {/* Sign Up Button */}
        <TouchableOpacity
          className="bg-[#B2EA71] rounded-xl py-5 mt-6"
          onPress={handleSignup}
        >
          <Text
            className="text-center text-[#133C13] font-semibold text-lg"
            style={{ fontFamily: "Poppins_600SemiBold" }}
          >
            Sign Up
          </Text>
        </TouchableOpacity>

        {/* Sign In Link */}
        <Text
          className="text-center text-[#4B5563] text-medium mt-4"
          style={{ fontFamily: "Poppins_400Regular" }}
        >
          Already have an account?{" "}
          <Link
            href="/(auth)/login"
            className="text-[#2563EB] font-medium"
            style={{ fontFamily: "Poppins_500Medium" }}
          >
            Sign In
          </Link>
        </Text>
      </View>
    </View>
  );
}