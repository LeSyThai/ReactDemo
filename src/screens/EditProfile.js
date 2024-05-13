import React from "react";
import { 
    View, 
    Text, 
    Button, 
    StyleSheet, 
    Alert, 
    TouchableOpacity,
    ImageBackground,
    TextInput
} from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

const EditProfile = () =>{
    return (
        <View style={styles.container}>
            <Text>Edit Profile</Text>
            <Button
                title="Click here"
                onPress={() => Alert.alert('clicked')}
            />
        </View>
    );
}

export default EditProfile;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})