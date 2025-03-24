import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "@/components/FormField";
import {useState} from "react";
import Button from "@/components/Button";

function SignIn() {
    const [ loginForm, setLoginForm ] = useState({
        email: "",
        password: ""
    })

    return(
        <SafeAreaView className="bg-primary h-full flex items-center justify-between">
            <Text className="text-[70px] text-alphaBlack mb-10 font-mextrabold">Leduly</Text>
            <View className="w-full">
                <FormField
                    title="Email"
                    value={loginForm.email}
                    placeholder={"Email"}
                    handleChangeText={ (e : any)  => setLoginForm({ ...loginForm, email: e })}
                />

                <FormField
                    title="Password"
                    value={loginForm.password}
                    placeholder={"Password"}
                    handleChangeText={ (e : any)  => setLoginForm({ ...loginForm, password: e })}
                />

                <Button
                    title="Sign In"
                    onPress={() => {}}
                />
            </View>
        </SafeAreaView>
    )
}

export default SignIn;