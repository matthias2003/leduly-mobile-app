import { Text, View, Image, TouchableOpacity } from "react-native";
import SearchInput from "@/components/SearchInput";
import RecentSearchesItem from "@/components/RecentSearchesItem";
import icons from "@/constants/IconsSearch";

function Search() {
    return(
        <View className="bg-primary h-full">
            <SearchInput additionalStyle="mx-3 my-7" />
            <View className="mx-3">
                <Text className="font-mextrabold text-[20px]">Recent searches</Text>
            </View>
            <RecentSearchesItem text="Spanish"/>
            <RecentSearchesItem text="English"/>
            <RecentSearchesItem text="Maths"/>
        </View>
    )
}

export default Search;