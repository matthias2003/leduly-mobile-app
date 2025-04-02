import {FlatList, ScrollView, Text, View} from "react-native";
import ItemTile from "@/components/ItemTile";
import ItemTilePopular from "@/components/ItemTilePopular";



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
        <FlatList
            data={data}
            renderItem={( {item }) =>  <ItemTile style={"my-3"}/>}
            ListHeaderComponent={() => (
                <View>
                    <View className="flex flex-row justify-between">
                        <View><Text className="font-rmedium text-[15px]">Your location</Text></View>
                        <View><Text className="font-rmedium text-[15px]">Opole</Text></View>
                    </View>
                    <View>
                            <Text className="font-rextrabold text-[20px]">Popular in your area</Text>
                            <FlatList
                                data={data}
                                renderItem={({item}) => <ItemTilePopular title={item.title}/>}
                                keyExtractor={item => item.id}
                                horizontal={true}
                            />
                     </View>

                    <View>
                        <Text className="font-rextrabold text-[20px]">Explore recommended specialist </Text>
                    </View>
                </View>
            )}>
        </FlatList>
    )
}

export default Home;