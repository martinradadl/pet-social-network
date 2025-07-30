import {SafeAreaView} from 'react-native-safe-area-context';
import {authStyles as styles} from './styles';
import {Text, TouchableOpacity} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackScreensList} from '../../main-router';
import {useNavigation} from '@react-navigation/native';

type NavigationProp = NativeStackNavigationProp<
  RootStackScreensList,
  'SignUpCompleted'
>;

export const SignUpCompleted = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{...styles.title, ...styles.boldText}}>
        Registration Completed
      </Text>

      <Text style={styles.message}>You have completed the registration!</Text>

      <Text style={styles.message}>
        Check your email to activate your account.
      </Text>

      <Text style={styles.message}>
        If you already activated your account please:
      </Text>

      <TouchableOpacity
        style={styles.loginRedirectButton}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.submitButtonText}>Go to Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
