import { Image, View } from "react-native";
import icons from "@/constants/IconsHome";

function ItemTile( {style} : any) {
    return(
        <View className={`bg-gray h-[200px] w-11/12 rounded-2xl ${style} mx-auto`}>
            <Image className="absolute right-5 top-5 w-[25px] h-[25px]" source={icons.heart}/>
        </View>
    )
}

export default ItemTile;