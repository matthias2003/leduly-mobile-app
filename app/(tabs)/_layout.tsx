import { Tabs } from "expo-router";
import { View, Text, Image, StatusBar } from "react-native";
import icons from "@/constants/IconsNav";
import { SafeAreaView } from "react-native-safe-area-context";

const TabIcon = ({ icon,color, name, focused }: any) => {
    return (
        <View className="flex items-center justify-center gap-1 w-20">
            <Image
                source={icon}
                resizeMode="contain"
                className="w-6 h-6"
                tintColor={color}
            />
            {/*<Text*/}
            {/*    className={"font-pregular text-[12px]"}*/}
            {/*    style={{ minWidth: 50, textAlign: "center" }}*/}
            {/*>*/}
            {/*    {name}*/}
            {/*</Text>*/}
        </View>
    );
};



export default function TabsLayout() {

    return (
    <>
        <SafeAreaView className="bg-blue-600 flex items-center h-[110px]">
                <Text className="h-[50px] font-mextrabold text-white text-[30px]">Leduly</Text>  /* TODO: CHANGE TO DYNAMIC HEIGHT */
        </SafeAreaView>
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: "#246EE9",
                tabBarInactiveTintColor: "#000000",
            }}>

        {/*<Tabs screenOptions={{ headerShown: false }}>*/}
            <Tabs.Screen name="search"
                options={{ title: "Search" ,
                    headerShown: false,
                    tabBarIcon: ( {color, focused } ) => (
                        <TabIcon
                            icon={icons.search}
                            name="Search"
                            color={color}
                            focused={ focused }
                        />)
            }}/>
            <Tabs.Screen name="favourites"
                options={{ title: "Favourites",
                headerShown: false,
                tabBarIcon: ({color, focused } ) => (
                <TabIcon
                    icon={icons.favourites}
                    name="Favourites"
                    color={color}
                    focused={ focused }
                />)
            }}/>
            <Tabs.Screen name="home"
                options={{ title: "Home",
                headerShown: false,
                tabBarIcon: ({color, focused } ) => (
                    <TabIcon
                        icon={icons.home}
                        name="Favourites"
                        color={color}
                        focused={ focused }
                    />)
            }}/>
            <Tabs.Screen name="messages"
                options={{ title: "Messages",
                headerShown: false,
                tabBarIcon: ( {color, focused }) => (
                    <TabIcon
                        icon={icons.messages}
                        name="Favourites"
                        color={color}
                        focused={ focused }
                    />

                )}}/>
            <Tabs.Screen name="profile"
                options={{ title: "Profile",
                headerShown: false,
                tabBarIcon: ( {color, focused }) => (
                    <TabIcon
                        icon={icons.profile}
                        name="Favourites"
                        color={color}
                        focused={ focused }
                    />)
            }}/>
        </Tabs>
        <StatusBar barStyle="light-content" />
    </>
    );
}