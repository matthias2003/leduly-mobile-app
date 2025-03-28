import {Pressable, Text, View} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "@/components/FormField";
import { useState } from "react";
import Button from "@/components/Button";
import icons from "@/constants/Icons";
import {router} from "expo-router";

function SignIn() {
    const [ loginForm, setLoginForm ] = useState({
        email: "",
        password: ""
    })

    const handleSignIn = async (): Promise<void> => {

    }

    return(
        <SafeAreaView className="bg-primary h-full items-center">
            <Text className="text-[70px] text-alphaBlack mb-20 font-mextrabold">Leduly</Text>
            <View className="w-full flex-1 flex justify-between items-center">
                <View className="w-full flex items-center justify-center ">
                    <FormField
                        title="Email"
                        value={loginForm.email}
                        placeholder="Email"
                        handleChangeText={ (e : any)  => setLoginForm({ ...loginForm, email: e })}
                    />
                    <FormField
                        title="Password"
                        value={loginForm.password}
                        placeholder="Password"
                        handleChangeText={ (e : any)  => setLoginForm({ ...loginForm, password: e })}
                    />
                    <Button
                        title="Sign In"
                        onPress={handleSignIn}
                        additionalStyle="mt-10"
                    />
                </View>

                <View className="w-4/5 items-center flex flex-row justify-center">
                    <View className="h-[1px] w-2/5 bg-black"></View>
                    <Text className="p-2 font-rextrabold text-[17px]">or</Text>
                    <View className="h-[1px] w-2/5 bg-black"></View>
                </View>

                <View className="w-full items-center flex">
                    <Button
                        title="Continue with Apple"
                        onPress={() => {}}
                        image={icons.apple}
                    />
                    <Button
                        title="Continue with Google"
                        onPress={() => {}}
                        additionalStyle="mt-5"
                        image={icons.google}
                    />
                </View>
                <Pressable onPress={() => router.replace('/register')}>
                    <Text className="font-rsemibold text-[17px]">First time here? Create an account</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

export default SignIn;