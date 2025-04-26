import { Text, View } from "react-native";

function ItemTilePopular( {title ,style} : any) {
    return(
        <View className={`bg-gray h-[150px] w-[150px] rounded-2xl ${style} mx-2`}>
            {/*<Text>{title}</Text>*/}
        </View>
    )
}

export default ItemTilePopular;