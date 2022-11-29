import * as React from "react";
import { Button, View, Text } from "react-native";
import FloatingActionBar from "react-native-floating-action-bar";

<FloatingActionBar
    items={[
        {
            icon: "taxi",
            color: "rgb(130, 130, 130)",
            activeColor: "rgb(3, 137, 253)",
            activeBackgroundColor: "rgb(224, 243, 255)",
        },
        {
            icon: () => <Icon name="subway" />,
            color: "rgb(130, 130, 130)",
            activeColor: "rgb(3, 137, 253)",
            activeBackgroundColor: "rgb(224, 243, 255)",
        },
        {
            icon: ({ active }) => (
                <Icon
                    name="train"
                    color={active ? "rgb(3, 137, 253)" : "rgb(130, 130, 130)"}
                />
            ),
            color: "rgb(130, 130, 130)",
            activeColor: "rgb(3, 137, 253)",
            activeBackgroundColor: "rgb(224, 243, 255)",
        },
        {
            icon: ({ active, activeColor, color, icon, size }) => (
                <Icon
                    name={icon}
                    size={size}
                    color={active ? activeColor : color}
                />
            ),
            color: "rgb(130, 130, 130)",
            activeColor: "rgb(3, 137, 253)",
            activeBackgroundColor: "rgb(224, 243, 255)",
        },
    ]}
    offset={50}
    onPress={handlePress}
    position="bottom"
    selectedIndex={0}
    style={styles.floatingActionBar}
/>;