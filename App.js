import React from "react";
import { NativeBaseProvider, Box } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Bag from "./src/components/english/bag";
import Bedroom from "./src/components/english/bedroom";
import Blacksmith from "./src/components/english/blacksmith";
import Farm from "./src/components/english/farm";
import Great_Hall from "./src/components/english/great_hall";
import Necklace_Table from "./src/components/english/necklace_table";
import Options from "./src/components/english/options";
import QuestList from "./src/components/english/quest_list";
import ReferenceBook from "./src/components/english/reference_book";
import Title from "./src/components/english/title";
import Village from "./src/components/english/village";

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <NativeBaseProvider>
                <Box>My Dragons Island Adventure</Box>
            </NativeBaseProvider>
        </NavigationContainer>
    );
}

export default App;