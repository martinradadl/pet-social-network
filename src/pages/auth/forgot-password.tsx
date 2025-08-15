import {SafeAreaView} from 'react-native-safe-area-context';
import {authStyles as styles} from './styles';
import {Text, TextInput, TouchableOpacity} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackScreensList} from '../../main-router';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {Toast} from 'toastify-react-native';
import Icon from '@react-native-vector-icons/material-icons';
import {forgotPassword} from '../../data/auth';
import {COLORS} from '../../global-styles';

type NavigationProp = NativeStackNavigationProp<
  RootStackScreensList,
  'ForgotPassword'
>;

export const ForgotPassword = () => {
  const [email, onChangeEmail] = useState('');
  const navigation = useNavigation<NavigationProp>();

  const handleSubmit = async () => {
    try {
      if (email === '') {
        () => {
          Toast.warn('Faltan campos por llenar');
        };
      } else {
        await forgotPassword(email);
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error(err.message);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Icon name="lock-outline" size={48} color={COLORS.PRIMARY_TEXT} />

      <Text style={{...styles.title, ...styles.boldText}}>
        Trouble with Logging in?
      </Text>

      <Text style={styles.message}>
        Enter your username or email address and we'll send you a link to get
        back into your account.
      </Text>

      <TextInput
        style={styles.formInput}
        onChangeText={onChangeEmail}
        value={email}
        placeholder="Email or username"
        placeholderTextColor={COLORS.INPUT}
      />

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Login</Text>
      </TouchableOpacity>

      <Text
        style={[styles.additionalOption, styles.boldText]}
        onPress={() => navigation.navigate('Login')}>
        Go back to login
      </Text>
    </SafeAreaView>
  );
};
