import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GameScreen from "./screens/GameScreen";
import StartScreen from "./screens/StartScreen";

export default function App() {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="StartScreen">
                <Stack.Screen
                    options={{ headerShown: false }}
                    component={StartScreen}
                    name="StartScreen"
                />
                <Stack.Screen
                    options={{
                        headerShown: false,
                        animation: "slide_from_bottom",
                    }}
                    component={GameScreen}
                    name="GameScreen"
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
