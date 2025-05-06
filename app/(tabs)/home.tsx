import { FlatList, Text, View, Image } from "react-native";
import ItemTile from "@/components/ItemTile";
import ItemTilePopular from "@/components/ItemTilePopular";
import icons from "@/constants/IconsHome";

function Home() {
    const data = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'First Item',
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Second Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d32',
            title: 'Third Item',
        }
    ];

    return(
        <View className="bg-primary">
            <FlatList
                data={data}
                renderItem={( {item }) =>  <ItemTile style={"my-5"}/>}
                ListHeaderComponent={() => (
                    <View>
                        <View className="flex flex-row justify-between">
                            <View className="m-3">
                                <Text className="font-rmedium text-[15px]">Your location</Text>
                            </View>
                            <View className="flex flex-row items-center m-3">
                                <Text className="font-rmedium text-[15px]">Opole</Text>
                                <Image className="w-[20px] h-[20px] rotate-90" source={icons.arrow} alt="arrow" />
                            </View>
                        </View>
                        <View>
                                <Text className="font-mextrabold text-[20px] m-3">Popular in your area</Text>
                                <FlatList
                                    data={data}
                                    className="px-3"
                                    renderItem={({item}) => <ItemTilePopular title={item.title} style="mx-2 w-[150px] h-[150px]"/>}
                                    keyExtractor={item => item.id}
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                />
                         </View>

                        <View className="m-3 mt-10">
                            <Text className="font-mextrabold text-[20px]">Explore recommended specialist </Text>
                        </View>
                    </View>
                )}>
            </FlatList>
        </View>
    )
}

export default Home;