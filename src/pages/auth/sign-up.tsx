import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useState} from 'react';
import {Text, TextInput, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {RootStackScreensList} from '../../main-router';
import {useNavigation} from '@react-navigation/native';
import {authStyles as styles} from './styles';
import {register, RegisterI} from '../../data/auth';
import {Toast} from 'toastify-react-native';

type NavigationProp = NativeStackNavigationProp<RootStackScreensList, 'SignUp'>;

export const SignUp = () => {
  const [email, onChangeEmail] = useState('');
  const [name, onChangeName] = useState('');
  const [username, onChangeUsername] = useState('');
  const [password, onChangePassword] = useState('');
  const navigation = useNavigation<NavigationProp>();

  const hasEmptyFields = () => {
    return name === '' || email === '' || username === '' || password === '';
  };

  const handleSubmit = async () => {
    try {
      if (hasEmptyFields()) {
        () => {
          Toast.warn('Faltan campos por llenar');
        };
      } else {
        const newUser: RegisterI = {email, username, password, name};
        await register(newUser, () => navigation.navigate('SignUpCompleted'));
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
        onChangeText={onChangeEmail}
        value={email}
        placeholder="Email"
        placeholderTextColor={'#B3B9BD'}
      />

      <TextInput
        style={styles.formInput}
        onChangeText={onChangeName}
        value={name}
        placeholder="Full Name"
        placeholderTextColor={'#B3B9BD'}
      />

      <TextInput
        style={styles.formInput}
        onChangeText={onChangeUsername}
        value={username}
        placeholder="Username"
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
        onPress={() => navigation.navigate('Login')}>
        Have an account? <Text style={styles.boldText}>log in.</Text>
      </Text>
    </SafeAreaView>
  );
};
