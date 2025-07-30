import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {Text, TextInput, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {RootStackScreensList} from '../../main-router';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {authStyles as styles} from './styles';
import {Toast} from 'toastify-react-native';
import {login, LoginI} from '../../data/auth';

type NavigationProp = NativeStackNavigationProp<RootStackScreensList, 'Login'>;

export const Login = () => {
  const navigation = useNavigation<NavigationProp>();
  const [usernameOrEmail, onChangeUsernameOrEmail] = useState('');
  const [password, onChangePassword] = useState('');

  const hasEmptyFields = () => {
    return usernameOrEmail === '' || password === '';
  };

  const emailRegex = /^([a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
  const isEmail = () => emailRegex.test(usernameOrEmail);

  const handleSubmit = async () => {
    try {
      if (hasEmptyFields()) {
        () => {
          Toast.warn('Faltan campos por llenar');
        };
      } else {
        const credentials: LoginI = {password};
        if (isEmail()) {
          credentials.email = usernameOrEmail;
        } else {
          credentials.username = usernameOrEmail;
        }

        await login(credentials);
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error(err.message);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Petgram</Text>

      <TextInput
        style={styles.formInput}
        onChangeText={onChangeUsernameOrEmail}
        value={usernameOrEmail}
        placeholder="Email or username"
        placeholderTextColor={'#B3B9BD'}
      />

      <TextInput
        style={styles.formInput}
        onChangeText={onChangePassword}
        value={password}
        placeholder="Password"
        secureTextEntry={true}
        placeholderTextColor={'#B3B9BD'}
      />

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Login</Text>
      </TouchableOpacity>

      <Text
        style={styles.additionalOption}
        onPress={() => navigation.navigate('ForgotPassword')}>
        Forgot your details?{' '}
        <Text style={styles.boldText}> Get help logging in.</Text>
      </Text>

      <Text
        style={styles.additionalOption}
        onPress={() => navigation.navigate('SignUp')}>
        Don't have an account? <Text style={styles.boldText}>Sign up.</Text>
      </Text>
    </SafeAreaView>
  );
};
