import {Image, Text, TouchableOpacity, View} from "react-native";
import ConversationItem from "@/components/ConversationItem";
import images from "@/constants/ProfilePics";
import icons from "@/constants/IconsMessages";

function Messages() {
    return(
        <View className="h-full">
            <View className="mx-3 my-5">
                <Text className="font-mextrabold text-[20px]">Messages</Text>
            </View>

            <View className="mx-5 gap-5">
                <ConversationItem image={images.picFirst} person="Arthur Montgomery" lastMessage="You: Thanks" time="14:36"/>
                <ConversationItem image={images.picSecond} person="Monica Pauler" lastMessage="You: Thank you very much" time="14 Feb 2025"/>
                <ConversationItem image={images.picThird} person="Paul McKeny" lastMessage="You: See you!" time="20 Feb 2025"/>
            </View>

            <TouchableOpacity className="bg-dark h-[50px] w-[50px] rounded-[100%] absolute bottom-5 right-5 items-center justify-center shadow-sm">
                <Image className="w-[25px] h-[25px]" source={icons.plus} resizeMode="cover" alt="New message" />
            </TouchableOpacity>
        </View>

    )
}

export default Messages;