import React from "react";
import { 
    View, 
    Text, 
    Button, 
    StyleSheet, 
    Alert, 
} from "react-native";

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