import { Text, TouchableOpacity, Image } from "react-native";

function Button( { title, onPress, additionalStyle, image } : any ) {
    return(
        <TouchableOpacity onPress={onPress} className={`bg-dark w-4/5 p-5 rounded-[45px] flex items-center justify-center ${additionalStyle}`}>
            <Image source={image} className="absolute w-[25px] h-[25px] left-5"/>
            <Text className="text-white font-rsemibold text-[17px]">{title}</Text>
        </TouchableOpacity>
    )
}

export default Button;