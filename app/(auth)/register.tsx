import {Pressable, Text, View} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import {router} from "expo-router";
import FormField from "@/components/FormField";
import Button from "@/components/Button";

function Register() {
    const [ registerForm, setRegisterForm ] = useState({
        name:"",
        surname:"",
        email:"",
        password:"",
        confirmPassword:""
    })

    const handleSignUp = async (): Promise<void> => {
        router.navigate("/auth");
    }

    return(
        <SafeAreaView className="bg-primary h-full items-center">
            <Text className="text-[70px] text-alphaBlack mb-20 font-mextrabold">Leduly</Text>
            <View className="w-full flex-1 flex justify-between items-center">
               <View className="w-full flex items-center justify-center ">
                    <FormField
                        title="Name"
                        value={registerForm.name}
                        placeholder="Name"
                        handleChangeText={ (e : any)  => setRegisterForm({ ...registerForm, name: e })}
                    />
                    <FormField
                        title="Surname"
                        value={registerForm.surname}
                        placeholder="Surname"
                        handleChangeText={ (e : any)  => setRegisterForm({ ...registerForm, surname: e })}
                    />
                    <FormField
                        title="Email"
                        value={registerForm.email}
                        placeholder="Email"
                        handleChangeText={ (e : any)  => setRegisterForm({ ...registerForm, email: e })}
                    />
                    <FormField
                        title="Password"
                        value={registerForm.password}
                        placeholder="Password"
                        handleChangeText={ (e : any)  => setRegisterForm({ ...registerForm, password: e })}
                    />
                    <FormField
                        title="Confirm Password"
                        value={registerForm.confirmPassword}
                        placeholder="Confirm Password"
                        handleChangeText={ (e : any)  => setRegisterForm({ ...registerForm, confirmPassword: e })}
                    />
               </View>
                <Button
                    title="Sign Up"
                    onPress={handleSignUp}
                    additionalStyle="mt-10"
                />
                <Pressable onPress={() => router.replace('/login')}>
                    <Text className="font-rsemibold text-[17px]">Already have an account? Just sign in</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

export default Register;