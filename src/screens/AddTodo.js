import React, { useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Keyboard, TouchableWithoutFeedback} from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import {Dimensions} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { useForm, Controller, useFormState} from 'react-hook-form';
import CustomInput from "../components/CustomInput";
import { addTodoAction } from "../store/todoAction";

const screen = Dimensions.get('screen');

export default function AddTodo(){
    const navigation = useNavigation();
    const dispatch= useDispatch();
    const {
        control, 
        handleSubmit,
        formState: {errors},
    } = useForm();

    const user= useSelector((state) => state.user)
    const todos= useSelector((state) => state.todo)
    
    const onAddTodoPressed = async(data) =>{
        await dispatch(addTodoAction(user.user[0].id, data.title, data.description));
        
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
            <LinearGradient
                    colors={['#433f51','#364456','#463b4d']}
                    style={styles.background}
                    start={{ x: 0, y: 0.5 }}
                    end={{ x: 1, y: 0.5 }}
                    >
            <View style={styles.body}>
                <View>
                    <Text style={{color: 'white', fontWeight: 'bold', fontSize: 25, paddingBottom: 25}}>Add New Todo:</Text>
                    <CustomInput
                        name='title'
                        placeholder='Todo Title'
                        control={control}
                        rules={{
                            required: 'Title is required'
                        }}
                        />
                    <CustomInput
                        name='description'
                        placeholder='Todo Description'
                        control={control}
                        />
                </View>
                <View>
                    <TouchableOpacity
                        onPress={handleSubmit(onAddTodoPressed)}
                        >
                    <LinearGradient
                        colors={['#ff608b','#fe7591','#ff9199']}
                        style={styles.button}
                        >
                        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>Add</Text>
                    </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>
            </LinearGradient>   
        </View>
        </TouchableWithoutFeedback>
    );
}

const styles= StyleSheet.create({
    container:{
        flex: 1,
        // fontFamily: 'Arial',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 1000,
    },
    body:{
        paddingVertical: 35,
        paddingHorizontal: 35,
        flex: 1,
    },
    button:{
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 50,
        elevation: 3,
        backgroundColor: '#ff4f9e',
        marginVertical: 25,
    },
    
});