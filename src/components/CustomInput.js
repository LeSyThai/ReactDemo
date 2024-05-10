import React from "react";
import { View, Text, TextInput, StyleSheet, Dimensions, Keyboard, } from "react-native";
import { Controller } from "react-hook-form";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const screen= Dimensions.get('screen');

const CustomInput = ({
    control,
    name,
    icon_name,
    rules ={}, 
    placeholder, 
    secureTextEntry
}) =>{
    return (
        <Controller
            control={control}
            name= {name}
            rules={rules}
            render={({
                    field: {
                        value, 
                        onChange, 
                        onBlur
                    }, fieldState: {error}
                }) => 
                <>
                <View style={[styles.textInput, {borderColor: error ? 'red': '#233f63'}]}>
                    <MaterialIcons name={icon_name} size={24} color="white" />
                    <TextInput 
                        placeholder={placeholder}
                        placeholderTextColor='#4a607d'
                        value={value}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        style={{paddingLeft:10, color: 'white', flex: 1}}
                        secureTextEntry ={secureTextEntry}
                        // onChangeText={(val)=> setEmail(val)}
                        />
                </View>
                {error && (
                    <Text style={{color: 'red', alignSelf: 'stretch',paddingLeft: 20, marginTop: -15}}>
                        {error.message || 'Error'}
                    </Text>
                )}
                </>    
            }
        />


    )
}

const styles= StyleSheet.create({
    textInput:{
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#233f63',
        backgroundColor: '#233f63',
        flexDirection: 'row',
        height: screen.height * 0.06,
        alignItems: 'center',
        paddingHorizontal: 20,
        marginBottom: 15
    },
})

export default CustomInput;