import {FlatList, Image, Text, View} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ItemTilePopular from "@/components/ItemTilePopular";
import icons from "@/constants/IconsHome";

const data = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3adaea53abb28ba',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-ased',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-asd',
        title: 'Third Item',
    },
    {
        id: '58694a0f-3da1-123-bd96-145571e29d32',
        title: 'Third Item'
    },
    {
        id: '58694a0f-3da1-471f-424-145571e29d32',
        title: 'Third Item',
    },
    {
        id: '58694a0f-3da1-471f-12314125125-145571e29d32',
        title: 'Third Item',
    }
];


function Favourites() {
    return(
        <FlatList
            data={data}
            className="w-full"
            columnWrapperStyle={{ justifyContent: 'space-evenly' }}
            numColumns={2}
            renderItem={({item}) => <ItemTilePopular title={item.title} style="mb-5 h-[170px] w-[170px]" />}
            keyExtractor={item => item.id}
            ListHeaderComponent={() => (
                <View className="mx-3 my-5">
                    <Text className="font-mextrabold text-[20px]">Favourites specialist</Text>
                </View>
            )}
        />
    )
}

export default Favourites;