import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarLabelPosition: "below-icon",
        headerTitle: "Reciepes App",
        tabBarActiveTintColor: "blue",
        tabBarInactiveTintColor: "#ccc",
        tabBarStyle:{
          backgroundColor:'#000000',
        },
        headerStyle:{
          backgroundColor:'#000000',
        },
        headerTintColor:'#ffffff'
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" color={color} size={size} />
          ),
          title: "Home",
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          tabBarLabel: "Reciepes",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="search" color={color} size={20} />
          ),
          title: "Explore Reciepes",
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "My Profile",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" color={color} size={size} />
          ),
          tabBarBadge: "3",
          title: "My Profile",
        }}
      />
    </Tabs>
  );
}
