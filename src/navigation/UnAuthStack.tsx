import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UnAuthStackParams from "./UnAuthStackParams";
import LoginScreen from '../screens/login';

const UnauthStack = createNativeStackNavigator<UnAuthStackParams>();

export const UnauthenticatedScreens = () => {
    return (
      <UnauthStack.Navigator initialRouteName="LoginScreen" screenOptions={{ headerShown: false }}>
        <UnauthStack.Screen component={LoginScreen} name="LoginScreen" />
      </UnauthStack.Navigator>
    );
  };