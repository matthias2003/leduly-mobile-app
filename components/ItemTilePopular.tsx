import {Image, Text, View} from "react-native";
import icons from "@/constants/IconsHome";

function ItemTilePopular( {title ,style} : any) {
    return(
        <View className={`bg-gray rounded-2xl ${style}`}>
            <Image className="absolute right-4 top-4 w-[25px] h-[25px]" source={icons.heart} />
        </View>
    )
}

export default ItemTilePopular;