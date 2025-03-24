import { Text, TouchableOpacity } from "react-native";

function Button( { title, onPress } : any ) {
    return(
        <TouchableOpacity onPress={onPress} className="bg-dark w-4/5 p-5 rounded-[45px] flex items-center justify-center">
            <Text className="text-white font-rsemibold text-[17px]">{title}</Text>
        </TouchableOpacity>
    )
}

export default Button;