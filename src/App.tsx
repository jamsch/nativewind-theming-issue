import { Text, View } from "react-native";
import { vars } from "nativewind";
import "../global.css";
import { useState } from "react";

export default function App() {
  return (
    <View className="flex flex-row flex-1 mt-24 gap-4">
      <NotWorking />
      <Working />
    </View>
  );
}

function NotWorking() {
  const [counter, setCounter] = useState(0);
  const style =
    counter % 2 === 0
      ? vars({ "--notworking": "#999999" })
      : vars({ "--notworking": "#333333" });
  return (
    <View style={style}>
      <View className={"bg-[--notworking] border-2"}>
        <Text
          className="text-red-500 text-4xl"
          onPress={() => setCounter(counter + 1)}
        >
          Not working {counter}
        </Text>
      </View>
    </View>
  );
}

function Working() {
  const [counter, setCounter] = useState(0);
  const style =
    counter % 2 === 0
      ? vars({ "--working": "#999999" })
      : vars({ "--working": "#333333" });
  return (
    <View style={style}>
      <Text
        onPress={() => setCounter(counter + 1)}
        className="bg-[--working] text-red-500 text-4xl"
      >
        Working {counter}
      </Text>
    </View>
  );
}
