import {
    View, 
    Text, 
    StyleSheet, 
    Dimensions,
    Keyboard,
    TouchableWithoutFeedback,
    TouchableOpacity, 
    Image,
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { useForm, Controller, useFormState} from 'react-hook-form';
import CustomInput from '../../components/custom_input/CustomInput';
import CheckBox from '@react-native-community/checkbox';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { signupAction } from '../../store/userAction';
import { t } from 'i18next';

const screen = Dimensions.get('screen');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Signup(){
    const {
        control, 
        handleSubmit,
        formState: {errors},
    } = useForm();

    const dispatch= useDispatch();

    const onSignUpPressed = async(data) => {
        await dispatch(signupAction(data.fName, data.lName, data.email, data.password))
    }

    //const [toggleCheckBox, setToggleCheckBox] = useState(false);
    const navigation = useNavigation();


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
                        <Text style={styles.headerText}>UpNow</Text>
                        <Text style={styles.headerColor}>{t('Digital Hypnoterapy')}</Text>
                    </View>
                </View>
                <View style={styles.body}>
                    <View>

                        <Text style={styles.bodyText}>Register</Text>
                        <CustomInput
                                name='fName'
                                icon_name='account-circle'
                                placeholder={t('First Name')}
                                control={control}
                                rules={{
                                    required: t('First name is required')
                                }} secureTextEntry={undefined}                            />
                        <CustomInput
                                name='lName'
                                icon_name='account-circle'
                                placeholder={t('Last Name')}
                                control={control}
                                rules={{
                                    required: t('Last name is required')
                                }} secureTextEntry={undefined}                            />
                        <CustomInput 
                                name='email'
                                icon_name='email'
                                placeholder={t('Email')}
                                control={control}
                                rules={{
                                    required: t('Email is required'),
                                    pattern: {
                                        value: emailRegex,
                                        message: t('Incorrect email address')
                                    }
                                }} secureTextEntry={undefined}                            />

                        <CustomInput
                            name='password'
                            icon_name='lock'
                            placeholder={t('Password')}
                            secureTextEntry
                            control={control}
                            rules={{
                                required: t('Password is required'), 
                                minLength: {
                                    value: 6, 
                                    message: t('Password should be minimum 6 characters long')
                                },
                                maxLength: {
                                    value: 24,
                                    message: t('Password should be maximum 24 character long')
                                }
                            }}
                            />
                        <View>
                            <Controller
                                control={control}
                                name='checkbox'
                                rules={{required: t('Please check the Term & Conditions and Privacy Policy')}}
                                render={({
                                    field: { onChange, value}, fieldState: {error}
                                }) =>(
                                    <>
                                    <View style={styles.checkview}>
                                        <CheckBox
                                            disabled = {false}
                                            value={value}
                                            //value={toggleCheckBox}
                                            //onValueChange={(newValue)=> setToggleCheckBox(newValue)}
                                            style={styles.checkbox}
                                            onValueChange={onChange}
                                            />
                                        <View>
                                            <Text style={{color: 'white'}}>
                                                {t('by clicking')} 
                                            <TouchableOpacity>
                                                <Text style={styles.linkText}> {t('Term & Conditions')} </Text>
                                            </TouchableOpacity>
                                            {t('and')}
                                            <TouchableOpacity>
                                                <Text style={styles.linkText}> {t('Privacy policy')}</Text>
                                            </TouchableOpacity>
                                            </Text>
                                        </View>
                                    </View>
                                    {error && (
                                        <Text style={styles.errorMessage}>
                                            {error.message || 'Error'}
                                        </Text>
                                    )}
                                    </>
                                )}
                                

                            />
                            
                        </View>
                    </View>
                    
                    <View>
                        <TouchableOpacity  
                            onPress={handleSubmit(onSignUpPressed)}
                            >
                            <LinearGradient
                                colors={['#ff608b','#fe7591','#ff9199']}
                                style={styles.button}
                                >
                                <Text style={styles.btnText}>{t('Register')}</Text>
                            </LinearGradient>
                        </TouchableOpacity>


                        <View style={styles.navibox}>
                            <Text style={{color: 'white'}}>{t('Already have an account?')} </Text>
                            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                                <Text style={styles.loginText}>{t('Log In')}</Text>
                            </TouchableOpacity>
                        </View>
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
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 1000,
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
        width: 60,
        height: 60,
        borderRadius: 50,
        marginRight: 25
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
    checkview:{
        alignItems: 'center',
        flexDirection: 'row',
        height: screen.height * 0.05,
    },
    checkbox:{
        margin: 8,
        borderRadius: 5,
    },
    bodyText:{
        color: 'white', 
        fontWeight: 'bold', 
        fontSize: 25, 
        paddingBottom: 25
    },
    linkText:{
        color: '#ff0000', 
        marginBottom: -5
    },
    errorMessage:{
        color: 'red', 
        alignSelf: 'stretch'
    },
    btnText:{
        color: 'white', 
        fontWeight: 'bold', 
        fontSize: 18       
    },
    navibox:{
        alignItems: 'center', 
        flexDirection: 'row', 
        justifyContent: 'space-evenly', 
        paddingHorizontal: 50
    },
    loginText:{
        color: '#ff4f9e', 
        fontWeight: 'bold'
    },
    headerText:{
        color: 'white', 
        fontWeight: 'bold', 
        fontSize: 25
    },
    headerColor:{
        color: '#3f7ad9'
    }
    
});