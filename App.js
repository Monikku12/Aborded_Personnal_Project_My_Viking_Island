import React from "react";
import { NativeBaseProvider, Box } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Bag from "./src/components/bag";
import Bedroom from "./src/components/bedroom";
import Blacksmith from "./src/components/blacksmith";
import Farm from "./src/components/farm";
import Great_Hall from "./src/components/great_hall";
import Necklace_Table from "./src/components/necklace_table";
import Options from "./src/components/options";
import QuestList from "./src/components/quest_list";
import ReferenceBook from "./src/components/reference_book";
import Title from "./src/components/title";
import Village from "./src/components/village";

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <NativeBaseProvider>
                <Box>Hello world</Box>
            </NativeBaseProvider>
        </NavigationContainer>
    );
}

export default App;