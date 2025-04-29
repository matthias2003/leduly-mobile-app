import { Text, View } from "react-native";

function Messages() {
    return(
        <View>
            <View className="mx-3 my-5">
                <Text className="font-rextrabold text-[20px]">Messages</Text>
            </View>

            <View className="mx-5 gap-3">
                <View className="flex-row items-center gap-5">
                    <View className="bg-dark h-[50px] w-[50px] rounded-[100%]">
                    </View>
                    <View>
                        <Text className="font-rsemibold text-[15px]">Maciej Kłoda</Text>
                        <Text className="font-rregular text-[10px] color-black/50">You: Thanks</Text>
                    </View>
                    <View>
                        <Text className="font-rregular text-[10px] color-black/50">14:36</Text>
                    </View>
                </View>

                <View className="flex-row items-center gap-5">
                    <View className="bg-dark h-[50px] w-[50px] rounded-[100%]">
                    </View>
                    <View>
                        <Text className="font-rsemibold text-[15px]">Maciej Kłoda</Text>
                        <Text className="font-rregular text-[10px] color-black/50">You: Thanks</Text>
                    </View>
                    <View>
                        <Text className="font-rregular text-[10px] color-black/50">14:36</Text>
                    </View>
                </View>

                <View className="flex-row items-center gap-5">
                    <View className="bg-dark h-[50px] w-[50px] rounded-[100%]">
                    </View>
                    <View>
                        <Text className="font-rsemibold text-[15px]">Maciej Kłoda</Text>
                        <Text className="font-rregular text-[10px] color-black/50">You: Thanks</Text>
                    </View>
                    <View>
                        <Text className="font-rregular text-[10px] color-black/50">14:36</Text>
                    </View>
                </View>
            </View>
        </View>

    )
}

export default Messages;