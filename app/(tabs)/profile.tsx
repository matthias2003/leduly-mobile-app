import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function Profile() {
    return(
        <View>
            <View className="mx-3 my-5">
                <Text className="font-rextrabold text-[20px]">My profile</Text>
            </View>

            <View className="w-11/12 h-[190px] bg-secondary mx-auto rounded-[15px] flex-row items-center">
                <View className="w-1/2">
                    <View className="w-[150px] h-[150px] bg-white rounded-[100%]"></View>
                </View>
                <View className="w-1/2">
                    <Text className="font-rextrabold color-white text-[20px]">Maciej Kłoda</Text>
                    <Text className="font-rextrabold color-white text-[15px]">4.95</Text>
                    <View className="h-[1px] w-[50px] bg-white"></View>
                    <Text className="font-rextrabold color-white text-[15px]">2 hired specialist</Text>
                    <View className="h-[1px] w-[50px] bg-white"></View>
                    <Text className="font-rextrabold color-white text-[15px]">2 years on Leduly</Text>
                </View>
            </View>
        </View>
    )
}

export default Profile;