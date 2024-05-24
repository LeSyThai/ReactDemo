import React, { useMemo } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Keyboard, TouchableWithoutFeedback} from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import {Dimensions} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { useForm} from 'react-hook-form';
import CustomInput from "../../components/custom_input/CustomInput";
import { updateTodoAction } from "../../store/todoAction";
import { useTranslation } from "react-i18next";

const screen = Dimensions.get('screen');

const UpdateTodo = ({route}) =>{
    const {t} = useTranslation();
    const navigation = useNavigation();
    const dispatch= useDispatch();
    const user= useSelector((state) => state.user)
    const todos= useSelector((state) => state.todo)

    const todo= useMemo(() =>{
        //console.log(todos.todos)
        let list = todos.todos.filter((item: any) => {
            return item?.id?.toString() === route?.params?.id?.toString()})
            return list?.length ? list[0]: null;
    }, [todos])
    

    // console.log(todo);
    //console.log(todos.todos[0])

    const {
        control, 
        handleSubmit,
        formState: {errors},
    } = useForm({
        defaultValues: {
            title: todo.title,
            description: todo.description
        }
    });

    const onUpdateTodoPressed = async(data) =>{
        //console.log(route.params.id, data.title, data.description);
        await dispatch(updateTodoAction(route.params.id, user.user[0].id, data.title, data.description))
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
                    <Text style={{color: 'white', fontWeight: 'bold', fontSize: 25, paddingBottom: 25}}>{t('Update Todo')}:</Text>
                    <CustomInput
                        name='title'
                        placeholder={t('Tittle')}
                        control={control}
                        rules={{
                            required: 'Title is required'
                        }}
                        value='kn'
                        />
                    <CustomInput
                        name='description'
                        placeholder={t('Description')}
                        control={control}
                        value='ln'
                        />
                </View>
                <View>
                    <TouchableOpacity
                        onPress={handleSubmit(onUpdateTodoPressed)}
                        >
                    <LinearGradient
                        colors={['#ff608b','#fe7591','#ff9199']}
                        style={styles.button}
                        >
                        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>{t('Update')}</Text>
                    </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>
            </LinearGradient>   
        </View>
        </TouchableWithoutFeedback>
    );
}

export default UpdateTodo;

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