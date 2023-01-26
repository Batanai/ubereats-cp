import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

interface Props {
    text: String;
    btnColor: String | any;
    textColor: String | any;
    activeTab: String;
    setActiveTab: (text: String) => void;
}

const HeaderButton = ({text, btnColor, textColor, activeTab, setActiveTab}: Props) => {
  return (
    <TouchableOpacity 
        style={[styles.container, {backgroundColor: activeTab === text ? "black" : "white"}]}
        onPress={() => setActiveTab(text)}
    >
      <Text style={[styles.text, {color: activeTab === text ? "white" : "black"}]}>{text}</Text>
    </TouchableOpacity>
  )
}

export default HeaderButton

const styles = StyleSheet.create({
    container: {
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 30
    },
    text: {
        fontSize: 15,
        fontWeight: "900"
    }
})