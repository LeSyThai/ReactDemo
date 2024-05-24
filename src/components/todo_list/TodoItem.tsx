import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons'

export default function TodoItem({item, pressBtnHandler, pressHandler}){

   return(
    <>
    <View style={styles.line}>
        <TouchableOpacity onPress={() => pressBtnHandler(item.id)} style={styles.deleteBtn}>
                    <Icon name='delete' size={30} color='#333' style={{flex: 1}}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={() => pressHandler(item.id)}>
            <View style={styles.box}>
                <Text style={styles.itemTitle}>{item.title}</Text>
                <Text style={styles.itemDescription}>{item.description}</Text>
            </View>
        </TouchableOpacity>
    </View>
    </>
   )
}

const styles= StyleSheet.create({
    line:{
        flexDirection: 'row', 
        alignItems: 'center'
    },
    box:{
        flexDirection: 'column', 
        marginVertical: 16
    },
    item:{
        //padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1
    },
    itemTitle:{
        fontSize: 15,
        marginLeft: 10,
        color: 'white',
    },
    itemDescription:{
        fontSize: 13,
        marginLeft: 10,
        color: 'white',
    },
    deleteBtn:{
        backgroundColor: 'white',
        borderRadius: 10,
        height: 50, 
        width: 50,
        alignItems: 'center',
        paddingTop: 10,
        marginTop: 10,
        marginHorizontal: 10,
    },
})