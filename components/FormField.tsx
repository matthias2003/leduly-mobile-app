import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useState } from "react";

function FormField( { title, value, placeholder, handleChangeText, ...props }: any) {
    const [ showPassword, setShowPassword ] = useState(false);
    return(
        <View className="m-2">
            <Text className="font-rlight text-[10px]">{title}</Text>
            <View className="w-4/5 h-[50px] px-2.5 rounded-2xl border flex justify-center border-alphaBlack bg-white">
                <TextInput
                    className="font-rmedium text-sm text-alphaBlack"
                    value={value}
                    placeholder={placeholder}
                    // placeholderTextColor="#7B7B8B"
                    onChangeText={handleChangeText}
                    autoCapitalize = {"none"}
                    secureTextEntry={title === "Password" && !showPassword}
                    {...props}
                />

                {/*{title === "Password" && (*/}
                {/*    <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>*/}
                {/*        <Image*/}
                {/*            source={!showPassword ? icons.eye : icons.eyeHide}*/}
                {/*            className="w-6 h-6"*/}
                {/*            resizeMode="contain"*/}
                {/*        />*/}
                {/*    </TouchableOpacity>*/}
                {/*)}*/}
            </View>
        </View>
    )
}

export default FormField;