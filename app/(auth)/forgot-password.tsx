import { Redirect } from 'expo-router';
import { useAuth } from '../../hooks/AuthContext';
import { View, Text } from 'react-native';

export default function Login() {
  const { user, loading } = useAuth();

  if (loading) return null;
  if (user) return <Redirect href="/" />;

  return (
    <View className="flex-1 justify-center items-center">
      <Text>Login Screen</Text>
      {/* Your login form goes here */}
    </View>
  );
}
