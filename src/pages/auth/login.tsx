import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {RootStackScreensList} from '../../main-router';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {authStyles as styles} from './styles';

type NavigationProp = NativeStackNavigationProp<RootStackScreensList, 'Login'>;

export const Login = () => {
  const [username, onChangeUsername] = useState('');
  const [password, onChangePassword] = useState('');
  const navigation = useNavigation<NavigationProp>();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Petgram</Text>

      <View style={styles.titleSpacer} />

      <TextInput
        style={styles.formInput}
        onChangeText={onChangeUsername}
        value={username}
        placeholder="Email or username"
        placeholderTextColor={'#B3B9BD'}
      />

      <View style={styles.formSpacer} />

      <TextInput
        style={styles.formInput}
        onChangeText={onChangePassword}
        value={password}
        placeholder="Password"
        secureTextEntry={true}
        placeholderTextColor={'#B3B9BD'}
      />

      <View style={styles.submitSpacer} />

      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Login</Text>
      </TouchableOpacity>

      <View style={styles.formSpacer} />

      <Text style={styles.additionalOption}>
        Forgot yor details? <Text>Get help logging in.</Text>
      </Text>

      <View style={styles.formSpacer} />

      <Text
        style={styles.additionalOption}
        onPress={() => navigation.navigate('SignUp')}>
        Don't have an account? <Text style={styles.boldText}>Sign up.</Text>
      </Text>
    </SafeAreaView>
  );
};
