import { Text, View, Image, TouchableOpacity } from "react-native";
import icons from "@/constants/IconsSearch";

function RecentSearchesItem( { text } : { text: string } ) {
    return(
        <View className="items-center m-3">
            <TouchableOpacity className="w-11/12 flex flex-row items-center justify-between">
                <View className="flex flex-row items-center">
                    <Image source={icons.last} className="w-[15px] h-[15px]" />
                    <Text className="mx-5">{text}</Text>
                </View>
                <Image source={icons.arrow} className="w-[20px] h-[20px]" />
            </TouchableOpacity>
        </View>
    )
}

export default RecentSearchesItem;