import { Link, useRouter, useFocusEffect } from "expo-router";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  BackHandler,
  TextInput,
} from "react-native";
import { useCallback, useState } from "react";

export default function Onboarding() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [income, setIncome] = useState("");
  const [selectedGoal, setSelectedGoal] = useState("");

  const steps = [
    {
      title: "Welcome to BudgetWise!",
      description:
        "Take charge of your budget with ease. Simplify your financial management.",
      image: require("../../assets/images/onboarding-illustration.png"),
      credit: "Photo by sketchify on Canva",
    },
    {
      title: "Track Your Income",
      description: "Tell us your monthly income to get started.",
      image: require("../../assets/images/income.png"),
      credit: "Photo by Bea Cerojano on Canva",
    },
    {
      title: "Set Your Financial Goal",
      description: "Choose one of your top financial goals.",
      image: require("../../assets/images/goals.png"),
      credit: "Photo by sparklestoke on Canva",
    },
    {
      title: "Experience Financial Freedom",
      description:
        "Set budgets and achieve your financial goals with BudgetWise.",
      image: require("../../assets/images/check.png"),
      credit: "Photo by med.asf on Canva",
    },
  ];

  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => true;
      BackHandler.addEventListener("hardwareBackPress", onBackPress);
      return () => BackHandler.removeEventListener("hardwareBackPress", onBackPress);
    }, [])
  );

  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    }
  };

  const handlePrevious = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const goals = ["Save More", "Pay Off Debt", "Travel Fund", "Emergency Fund"];

  return (
    <View className="flex-1 bg-white px-6 py-10">
      <View className="flex-1 justify-center items-center">
        {/* Illustration */}
        <View className="mb-10">
          <Image
            source={steps[step].image}
            className="w-64 h-64"
            resizeMode="contain"
          />
          <Text
            className="text-gray-500 text-xs mt-2 italic text-center"
            style={{ fontFamily: "Poppins_400Regular" }}
          >
            {steps[step].credit}
          </Text>
        </View>

        {/* Title and Description */}
        <Text
          className="text-gray-900 text-3xl font-bold text-center mb-4 px-4"
          style={{ fontFamily: "Poppins_700Bold" }}
        >
          {steps[step].title}
        </Text>
        <Text
          className="text-gray-600 text-base text-center leading-relaxed px-8 mb-6"
          style={{ fontFamily: "Poppins_500Medium" }}
        >
          {steps[step].description}
        </Text>

        {/* Custom content for specific steps */}
        {step === 1 && (
          <TextInput
            placeholder="Enter your monthly income"
            value={income}
            onChangeText={setIncome}
            keyboardType="numeric"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-base mb-6"
            style={{ fontFamily: "Poppins_500Medium" }}
          />
        )}

        {step === 2 && (
        <View className="w-full mb-6">
            {goals.map((goal, index) => (
            <TouchableOpacity
                key={index}
                onPress={() => setSelectedGoal(goal)}
                className={`rounded-full border py-3 px-5 mb-4 ${
                selectedGoal === goal
                    ? "bg-green-500 border-green-500"
                    : "border-gray-300"
                }`}
            >
                <Text
                className={`text-center text-base ${
                    selectedGoal === goal ? "text-white" : "text-gray-700"
                }`}
                style={{ fontFamily: "Poppins_500Medium" }}
                >
                {goal}
                </Text>
            </TouchableOpacity>
            ))}
        </View>
        )}


        {/* Pagination Dots */}
        <View className="flex-row justify-center mb-10">
          {steps.map((_, index) => (
            <View
              key={index}
              className={`w-2 h-2 rounded-full mx-1 ${
                index === step ? "bg-green-500" : "bg-gray-300"
              }`}
            />
          ))}
        </View>
      </View>

      {/* Navigation Buttons */}
      <View className="w-full space-y-4">
        {step > 0 && (
          <TouchableOpacity
            onPress={handlePrevious}
            className="border border-green-500 rounded-full py-4 px-6 w-full mb-5"
          >
            <Text
              className="text-green-500 font-semibold text-lg text-center"
              style={{ fontFamily: "Poppins_600SemiBold" }}
            >
              Previous
            </Text>
          </TouchableOpacity>
        )}

        {step < steps.length - 1 ? (
          <TouchableOpacity
            onPress={handleNext}
            className="bg-green-500 rounded-full py-4 px-6 w-full"
          >
            <Text
              className="text-white font-semibold text-lg text-center"
              style={{ fontFamily: "Poppins_600SemiBold" }}
            >
              Next
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity className="bg-green-500 rounded-full py-4 px-6 w-full">
            <Link href="/(auth)/signup" className="text-center">
              <Text
                className="text-white font-semibold text-lg"
                style={{ fontFamily: "Poppins_600SemiBold" }}
              >
                Get Started
              </Text>
            </Link>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
