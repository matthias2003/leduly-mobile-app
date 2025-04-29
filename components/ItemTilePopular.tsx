import {Image, Text, View} from "react-native";
import icons from "@/constants/IconsHome";

function ItemTilePopular( {title ,style} : any) {
    return(
        <View className={`bg-gray h-[150px] w-[150px] rounded-2xl ${style} mx-2`}>
            <Image className="absolute right-4 top-4 w-[25px] h-[25px]" source={icons.heart} />
        </View>
    )
}

export default ItemTilePopular;