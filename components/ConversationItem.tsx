import {Image, Text, View} from "react-native";

function ConversationItem( { person, lastMessage, time, image } : { person: string, lastMessage: string, time: string, image:any} ) {
    return(
        <View className="flex-row items-center gap-5 w-[80%]">
            <View className="bg-dark h-[50px] w-[50px] rounded-[100%] overflow-hidden">
                <Image className="w-full h-full" source={image} resizeMode="cover" alt="Profile picture" />
            </View>
            <View>
                <View>
                    <Text className="font-rsemibold text-[15px]">{ person }</Text>
                </View>
                <View className="flex flex-row justify-between w-full">
                    <Text className="font-rregular text-[10px] color-black/50">{ lastMessage }</Text>
                    <Text className="font-rregular text-[10px] color-black/50">{ time }</Text>
                </View>
            </View>
        </View>
    )
}

export default ConversationItem;