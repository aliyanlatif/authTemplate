import React, {useRef} from 'react';
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
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const LoginScreen: React.FC = () => {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

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

  return (
    <LinearGradient
      colors={['#403A3E', '#BE5869']} // Update with your desired gradient colors
      style={styles.gradient}>
      <View style={[styles.container, isDarkMode && styles.darkContainer]}>
        <Text style={styles.title}>Welcome back!</Text>
        <Text style={styles.subtitle}>
          Hello, you must login first to be able to use the application and
          enjoy all the features in Calashop
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Email Address"
          keyboardType="email-address"
          autoCapitalize="none"
          placeholderTextColor={isDarkMode ? '#ccc' : '#888'}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          placeholderTextColor={isDarkMode ? '#ccc' : '#888'}
        />
        <TouchableOpacity style={styles.rememberMe}>
          <Text style={styles.rememberMeText}>Remember me</Text>
        </TouchableOpacity>
        <Animated.View style={{transform: [{scale: signInButtonScale}]}}>
          <TouchableOpacity
            style={styles.signInButton}
            onPress={() => {
              animateButton(signInButtonScale);
            }}>
            <Text style={styles.signInButtonText}>Sign in</Text>
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
            <Text style={styles.socialButtonText}>Continue With Facebook</Text>
          </TouchableOpacity>
        </Animated.View>
        <TouchableOpacity>
          <Text style={styles.link}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.link}>Don't have an account? Sign up</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  gradient: {
    flex: 1,
  },
  darkContainer: {
    backgroundColor: '#000',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff',
  },
  subtitle: {
    marginBottom: 20,
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
  rememberMe: {
    marginBottom: 20,
    alignSelf: 'flex-start',
  },
  rememberMeText: {
    color: '#fff',
  },
  signInButton: {
    backgroundColor: '#007BFF',
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
    marginBottom: 20,
  },
  signInButtonText: {
    color: '#fff',
    fontWeight: 'bold',
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
    color: '#007BFF',
    textAlign: 'center',
  },
});

export default LoginScreen;
