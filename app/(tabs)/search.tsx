import {Text, View, Image, TouchableOpacity} from "react-native";
import SearchInput from "@/components/SearchInput";
import icons from "@/constants/IconsSearch";

function Search() {
    return(
        <View className="bg-primary h-full">
            <SearchInput />
            <View>
                <Text className="font-mextrabold text-[20px]">Recent searches</Text>
            </View>
            <View className="items-center">
                <TouchableOpacity className="w-11/12 flex flex-row items-center justify-between">
                    <View className="flex flex-row items-center">
                        <Image source={icons.last} className="w-[15px] h-[15px]" />
                        <Text className="mx-5">Spanish</Text>
                    </View>
                    <Image source={icons.arrow} className="w-[20px] h-[20px]" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Search;