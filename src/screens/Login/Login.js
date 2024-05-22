import {
    View, 
    Text, 
    StyleSheet, 
    Dimensions,
    Keyboard,
    TouchableOpacity, 
    Image,
    TouchableWithoutFeedback
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useForm } from 'react-hook-form';
import CustomInput from '../../components/custom_input/CustomInput';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { loginAction } from '../../store/userAction';
import notifee, { AndroidImportance, AndroidVisibility, TimestampTrigger, TriggerType } from '@notifee/react-native';

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
    otherLoginBtn:{
        flexDirection: 'row',
        alignItems:'center',
        borderRadius: 50,
        height: screen.height*0.06,
        marginVertical: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    btnText:{
        color: 'white', 
        fontWeight: 'bold', 
        fontSize: 18, 
        position: 'absolute', 
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
        onDisplayNotification();
        //console.log(data.email)
    }

    async function onDisplayNotification(){
        await notifee.requestPermission()

        const channelId= await notifee.createChannel({
            id: 'default',
            name: 'Default Channel',
            sound: 'hollow',
            importance: AndroidImportance.HIGH,
            visibility: AndroidVisibility.PUBLIC,
        });

        await notifee.displayNotification({
            // title: '<p style="color: #4caf50;"><b>Styled HTMLTitle</span></p></b></p> &#128576;',
            // subtitle: '&#129395;',
            // body: 
            //     'The <p style="text-decoration: line-through">body can</p> also be <p style="color: #ffffff; background-color: #9c27b0"><i>styled too</i></p> &#127881;!',
            // android: {
            //     channelId,
            //     //smallIcon: 'name-of-a-small-icon',
            //     color: '#4caf50',
            //     actions: [
            //     {
            //         title: '<b>Dance</b> &#128111;',
            //         pressAction: { id: 'dance' },
            //     },
            //     {
            //         title: '<p style="color: #f44336;"><b>Cry</b> &#128557;</p>',
            //         pressAction: { id: 'cry' },
            //     },
            //     ],
            //     importance: AndroidImportance.HIGH
            // },

            title: 'Log in successfully',
            body: 'A new message has been received from a user.',
            android: {
                channelId,
                // Remote image
                largeIcon: 'https://my-cdn.com/users/123456.png',
                
                // Local image
                largeIcon: require('../../assets/images/Valar,VaalmonicanHallowHymn.png'),
                
                // Absolute file path
                //largeIcon: file:///xxxx/xxxx/xxxx.jpg,
                
                // Android resource (mipmap or drawable)
                //largeIcon: 'large_icon',
                importance: AndroidImportance.HIGH,
            },
        });
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
                
                <View style={styles.header}>
                    <Image style={styles.header_image} source={require('../../assets/images/upnow.png')}/>
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
                        // onPress={handleSubmit(onDisplayNotification)}
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
                    <TouchableOpacity style={[styles.otherLoginBtn, {backgroundColor: '#3B5998'}]}>
                        <MaterialIcons name="facebook" size={30} color="white" style={{marginRight: 30}}/>
                        <Text style={[styles.btnText, {left: screen.width*0.2, right: screen.width*0.2}]}>Log in with Facebook</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.otherLoginBtn, {backgroundColor: '#000000'}]}>
                        <MaterialIcons name="apple" size={24} color="white" style={{marginRight: 50}} />
                        <Text style={[styles.btnText, {left: screen.width*0.24, right: screen.width*0.24}]}>Log in with Apple</Text>
                    </TouchableOpacity>
                </View>
                </LinearGradient>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default Login;
  
