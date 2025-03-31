import { Tabs } from "expo-router";
import { View, Text, Image } from "react-native";
import icons from "@/constants/IconsNav";

const TabIcon = ({ icon, name }: any) => {
    return (
        <View className="flex items-center justify-center gap-1 w-20">
            <Image
                source={icon}
                resizeMode="contain"
                className="w-6 h-6"
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
        <Tabs screenOptions={{ headerShown: false }}>
            <Tabs.Screen name="search"
                options={{ title: "Search" ,
                    headerShown: false,
                    tabBarIcon: ( ) => (
                        <TabIcon
                            icon={icons.search}
                            name="Search"
                        />)
            }}/>
            <Tabs.Screen name="favourites"
                options={{ title: "Favourites",
                headerShown: false,
                tabBarIcon: ( ) => (
                <TabIcon
                    icon={icons.favourites}
                    name="Favourites"/>)
            }}/>
            <Tabs.Screen name="home"
                options={{ title: "Home",
                headerShown: false,
                tabBarIcon: ( ) => (
                    <TabIcon
                        icon={icons.home}
                        name="Favourites"/>)
            }}/>
            <Tabs.Screen name="messages"
                options={{ title: "Messages",
                headerShown: false,
                tabBarIcon: ( ) => (
                    <TabIcon
                        icon={icons.messages}
                        name="Favourites"/>)
                }}/>
            <Tabs.Screen name="profile"
                options={{ title: "Profile",
                headerShown: false,
                tabBarIcon: ( ) => (
                    <TabIcon
                        icon={icons.profile}
                        name="Favourites"/>)
            }}/>
        </Tabs>
    );
}