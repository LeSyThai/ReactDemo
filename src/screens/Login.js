import {
    View, 
    Text, 
    StyleSheet, 
    Dimensions,
    TextInput, 
    TouchableOpacity, 
    Image
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import Fontisto from 'react-native-vector-icons/Fontisto'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useForm, Controller, useFormState} from 'react-hook-form';
import CustomInput from '../components/CustomInput';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { loginAction } from '../store/userAction';

const screen = Dimensions.get('screen');
const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

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
        height: screen.height,
    },
    header:{
        borderBottomWidth: 2,
        borderBottomColor: '#3f7ad9',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 25,
        paddingTop: 35,
        height: screen.height*0.15,
    },
    header_image:{
        width: 50,
        height: 50,
        borderRadius: 50,
        marginRight: 25
    },
    body:{
        paddingVertical: 35,
        paddingHorizontal: 35,
    },
    textInput:{
        borderRadius: 50,
        backgroundColor: '#233f63',
        flexDirection: 'row',
        height: screen.height * 0.06,
        alignItems: 'center',
        paddingHorizontal: 20,
        marginBottom: 15
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
    separator:{
        flex: 1,
        backgroundColor: 'black',
        height: screen.height*0.001,
        marginHorizontal: 10
    },
    fbButton:{
        flexDirection: 'row',
        alignItems:'center',
        borderRadius: 50,
        height: screen.height*0.06,
        marginVertical: 15,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#3B5998',
    },
    apButton:{
        flexDirection: 'row',
        alignItems:'center',
        borderRadius: 50,
        height: screen.height*0.06,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#000000',
    }
});

function Login(){
    const navigation = useNavigation();
    const {
        control, 
        handleSubmit,
        formState: {errors},
    } = useForm();

    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();

    const onSignInPressed = async data =>{
        await dispatch(loginAction(data.email, data.password));
        //console.log(data.email)
    }


    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#433f51','#364456','#463b4d']}
                style={styles.background}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
            >
            
            <View style={styles.header}>
                <Image style={styles.header_image} source={require('../assets/images/upnow.png')}/>
                <View>
                    <Text style={{color: 'white', fontWeight: 'bold', fontSize: 25}}>UpNow</Text>
                    <Text style={{color: '#3f7ad9'}}>Digital Hypnoterapy</Text>
                </View>
            </View>
            
            <View style={styles.body}>
                <Text style={{color: 'white', fontWeight: 'bold', fontSize: 25, paddingBottom: 15}}>Log In</Text>
                <CustomInput 
                    name='email'
                    icon_name='email'
                    placeholder= 'Email'
                    control={control}
                    // value={email}
                    rules={{
                        required: 'Email is required', 
                        pattern: {
                            value: emailRegex, 
                            message: 'Incorrect email address'
                        }
                    }}
                    //onChange={(val) => setEmail(val)}
                />

                <CustomInput
                    name='password'
                    icon_name='lock'
                    placeholder='Password'
                    secureTextEntry
                    control={control}
                    //value={password}
                    rules={{
                        required: 'Password is required', 
                        minLength: {
                            value: 6, 
                            message: 'Password should be minimum 6 characters long'
                        },
                        maxLength: {
                            value: 24,
                            message: 'Password should be maximum 24 character long'
                        }
                    }}
                    //onChange={(val) => setPassword(val)}
                />
                
                <View style={{alignItems: 'flex-end'}}>
                    <TouchableOpacity>
                        <Text style={{right: 0, color: 'white'}}>Forget password ?</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity             
                    onPress={handleSubmit(onSignInPressed)}
                    >
                    <LinearGradient
                        colors={['#ff608b','#fe7591','#ff9199']}
                        style={styles.button}
                    >
                    <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>Log In</Text>
                    </LinearGradient>
                </TouchableOpacity>
                <View style={{alignItems: 'center', flexDirection: 'row', justifyContent: 'space-evenly', paddingHorizontal: 50}}>
                    <Text style={{color: 'white'}}>Don't have an account?</Text>
                    <TouchableOpacity
                         onPress={() => navigation.navigate('Signup')}
                        >
                        <Text style={{color: '#ff4f9e', fontWeight: 'bold'}}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
                <View style={{alignItems: 'center', flexDirection: 'row', justifyContent: 'space-evenly', paddingVertical: screen.height*0.05}}>
                    <View style={styles.separator}/>
                    <Text style={{color: 'white'}}>Or Log in with</Text>
                    <View style={styles.separator}/>
                </View>
                <TouchableOpacity style={styles.fbButton}>
                    <MaterialIcons name="facebook" size={30} color="white" style={{marginRight: 30}}/>
                    <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>Log in with Facebook</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.apButton}>
                    <MaterialIcons name="apple" size={24} color="white" style={{marginRight: 50}} />
                    <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18, }}>Log in with Apple</Text>
                </TouchableOpacity>
            </View>
            </LinearGradient>
        </View>
    )
}

export default Login;