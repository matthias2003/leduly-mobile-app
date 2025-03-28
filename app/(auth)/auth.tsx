import {Pressable, Text, View} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {router} from "expo-router";
import FormField from "@/components/FormField";
import Button from "@/components/Button";

function Auth() {
    const handleAuth = async (): Promise<void> => {

    }

    return(
        <SafeAreaView className="bg-primary h-full items-center">
            <Text className="text-[70px] text-alphaBlack mb-20 font-mextrabold">Leduly</Text>
            <View className="w-full flex-1 flex justify-between items-center">

                <View className="flex w-full flex-row items-center justify-evenly ">
                    <View className="w-[60px] h-[75px] bg-dark rounded-2xl flex justify-center items-center">
                        <Text className="font-mextrabold text-[30px] text-white">5</Text>
                    </View>
                    <View className="w-[60px] h-[75px] bg-dark rounded-2xl flex justify-center items-center">
                        <Text className="font-mextrabold text-[30px] text-white">A</Text>
                    </View>
                    <View className="w-[60px] h-[75px] bg-dark rounded-2xl flex justify-center items-center">
                        <Text className="font-mextrabold text-[30px] text-white">8</Text>
                    </View>
                    <View className="w-[60px] h-[75px] bg-dark rounded-2xl flex justify-center items-center">
                        <Text className="font-mextrabold text-[30px] text-white">B</Text>
                    </View>
                    <View className="w-[60px] h-[75px] bg-dark rounded-2xl flex justify-center items-center">
                        <Text className="font-mextrabold text-[30px] text-white">G</Text>
                    </View>
                    <View className="w-[60px] h-[75px] bg-dark rounded-2xl flex justify-center items-center">
                        <Text className="font-mextrabold text-[30px] text-white">4</Text>
                    </View>
                </View>

                <View>
                    <Text className="font-mextrabold text-[30px] text-center w">
                        Enter the pin which we send you to your email to ensure thats you!
                    </Text>
                </View>

                <Button
                    title="Confirm"
                    onPress={handleAuth}
                />
            </View>
        </SafeAreaView>
    )
}

export default Auth;