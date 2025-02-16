import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
  useColorScheme,
  Animated,
  Image,
  Alert,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation';
import useNavigation from '../../navigation/use-navigation';

type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

const LoginScreen: React.FC = () => {
  const navigation = useNavigation<RootStackParamList>();
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signInButtonScale = useRef(new Animated.Value(1)).current;
  const googleButtonScale = useRef(new Animated.Value(1)).current;
  const facebookButtonScale = useRef(new Animated.Value(1)).current;

  const animateButton = (scale: Animated.Value) => {
    Animated.sequence([
      Animated.timing(scale, {
        toValue: 0.95,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scale, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const validateEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleSignIn = () => {
    if (!validateEmail(email)) {
      Alert.alert('Invalid Email', 'Please enter a valid email address.');
      return;
    }
    if (!password) {
      Alert.alert('Empty Password', 'Please enter your password.');
      return;
    }
    navigation.navigate('Home');
  };

  return (
    <LinearGradient
      colors={[
        '#8e9eab',
        '#267871',
        '#3498db',
        '#2980b9',
        '#34495e',
        '#2c3e50',
        '#8e9eab',
      ]}
      style={styles.gradient}
      start={{x: 0, y: 0}} 
      end={{x: 1, y: 1}}
    >
      <View style={[styles.container, isDarkMode && styles.darkContainer]}>
        <View style={styles.topContainer}>
          <Text style={styles.title}>Welcome!</Text>
          <Text style={styles.subtitle}>
            Hello, you must login first to be able to use the application and
            enjoy all the features in app
          </Text>
        </View>
        <View style={styles.bottomContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email Address"
            keyboardType="email-address"
            autoCapitalize="none"
            placeholderTextColor={isDarkMode ? '#ccc' : '#888'}
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            placeholderTextColor={isDarkMode ? '#ccc' : '#888'}
            value={password}
            onChangeText={setPassword}
          />
          <View style={styles.rememberMeContainer}>
            <TouchableOpacity style={styles.rememberMe}>
              <Text style={styles.rememberMeText}>Remember me</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.link}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
          <Animated.View style={{transform: [{scale: signInButtonScale}]}}>
            <TouchableOpacity
              onPress={() => {
                animateButton(signInButtonScale);
                handleSignIn();
              }}>
              <LinearGradient
                colors={['#2c3e50', '#3498db']}
                style={styles.signInButton}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}>
                <Text style={styles.signInButtonText}>Sign in</Text>
              </LinearGradient>
            </TouchableOpacity>
          </Animated.View>
          <Text style={styles.orText}>Or sign in with</Text>
          <Animated.View style={{transform: [{scale: googleButtonScale}]}}>
            <TouchableOpacity
              style={styles.socialButton}
              onPress={() => {
                animateButton(googleButtonScale);
              }}>
              <Image
                source={require('../../assets/images/png/google.png')}
                style={styles.icon}
              />
              <Text style={styles.socialButtonText}>Continue With Google</Text>
            </TouchableOpacity>
          </Animated.View>
          <Animated.View style={{transform: [{scale: facebookButtonScale}]}}>
            <TouchableOpacity
              style={styles.socialButton}
              onPress={() => {
                animateButton(facebookButtonScale);
              }}>
              <Image
                source={require('../../assets/images/png/facebook.png')}
                style={styles.icon}
              />
              <Text style={styles.socialButtonText}>
                Continue With Facebook
              </Text>
            </TouchableOpacity>
          </Animated.View>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.dontHaveAnAccount}>
              Don't have an account? Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  gradient: {
    flex: 1,
  },
  darkContainer: {
    backgroundColor: '#000',
  },
  topContainer: {
    flex: 0.25,
    padding: 20,
    paddingTop: 40,
    justifyContent: 'center',
    backgroundColor: '#ffffff25',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  bottomContainer: {
    flex: 0.7,
    padding: 20,
    paddingTop: 35,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff',
  },
  subtitle: {
    marginBottom: 30,
    color: '#fff',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  rememberMeContainer: {
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rememberMe: {
    alignSelf: 'flex-start',
  },
  rememberMeText: {
    color: '#fff',
  },
  signInButton: {
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
    marginBottom: 20,
  },
  signInButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  orText: {
    textAlign: 'center',
    marginVertical: 10,
    color: '#fff',
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginBottom: 20,
  },
  socialButtonText: {
    marginLeft: 10,
    color: '#000',
    fontWeight: 'bold',
  },
  icon: {
    width: 24,
    height: 24,
  },
  link: {
    color: '#fff',
  },
  dontHaveAnAccount: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default LoginScreen;
