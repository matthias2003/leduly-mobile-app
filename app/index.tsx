import { TouchableOpacity, Image, ScrollView, Text, View} from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import { SafeAreaView } from "react-native-safe-area-context"
import logo from "../assets/images/logo.png";
import { router } from "expo-router";
import Button from "@/components/Button";

export default function RootLayout() {
    return (
        <SafeAreaView className="bg-primary h-full flex items-center justify-between">
            <View className="flex items-center justify-center h-3/5">
                <Svg height="700" width="700">
                    <Ellipse
                        cx="350"
                        cy="250"
                        rx="350"
                        ry="250"
                        fill="#246EE9"
                        stroke="#246EE9"
                        strokeWidth="5"
                        transform="rotate(19, 350, 250)"
                    />
                </Svg>
                <View className="absolute top-0 flex items-center">
                    <Text className="text-[70px] text-white mb-10 font-mextrabold">Leduly</Text>
                    <Image source={logo} className="h-[200px] w-[200px]"/>
                </View>
            </View>

            <View className="w-full flex items-center justify-between h-2/5">
                <View>
                    <Text className="text-[30px] font-mextrabold text-center mb-5">Taking care of your knowledge is easier when you have help!</Text>
                    <Text className="text-[12px] font-rregular text-center">Click button bellow and let’s gret your work done!</Text>
                </View>

                <Button
                    title="Get started"
                    onPress={() => router.navigate('/login')}
                />
            </View>
        </SafeAreaView>
    );
}