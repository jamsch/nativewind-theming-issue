import { Pressable, Text, View } from "react-native";
import { useColorScheme, vars } from "nativewind";
import "../global.css";

export default function App() {
  const { colorScheme } = useColorScheme();
  const style =
    colorScheme === "light"
      ? vars({ "--background": "red" })
      : vars({ "--background": "#000000" });
  return (
    <View style={style}>
      <View className={"flex-1 bg-[--background]"}>
        <DarkModeToggle />
      </View>
    </View>
  );
}

function DarkModeToggle() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  return (
    <Pressable
      className={"px-4 h-10 bg-blue-500 items-center justify-center mt-24"}
      onPress={toggleColorScheme}
    >
      <Text className="text-red-500 text-2xl font-bold">
        {colorScheme || "auto"} mode
      </Text>
    </Pressable>
  );
}
