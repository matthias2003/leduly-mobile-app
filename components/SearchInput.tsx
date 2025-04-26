import { TextInput, TouchableOpacity, View, Image, Alert } from "react-native";
import icons from "@/constants/IconsNav"
import {useState} from "react";

function SearchInput( { title, onPress, additionalStyle, image } : any ) {
    const [data, setData] = useState("");

    return(
        <View className="flex flex-row items-center h-[60px] rounded-2x bg-graySecondary">
            <TextInput
                className="flex-1 font-mmedium text-[15px]"
                value={data}
                placeholder="Search for subject"
                placeholderTextColor="#00000066"
                onChangeText={(e) => setData(e)}
            />

            <TouchableOpacity
                onPress={() => {
                    if (data === "")
                        return Alert.alert(
                            "Missing Query",
                            "Please input something to search results across database"
                        );

                    // if (pathname.startsWith("/search")) router.setParams({ query });
                    // else router.push(`/search/${query}`);
                }}
            >
                <Image source={icons.search} className="w-5 h-5" resizeMode="contain" />
            </TouchableOpacity>
        </View>
    )
}

export default SearchInput;