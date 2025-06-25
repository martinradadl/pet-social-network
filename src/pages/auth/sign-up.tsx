import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {RootStackScreensList} from '../../main-router';
import {useNavigation} from '@react-navigation/native';
import {authStyles as styles} from './styles';

type NavigationProp = NativeStackNavigationProp<RootStackScreensList, 'SignUp'>;

export const SignUp = () => {
  const [email, onChangeEmail] = useState('');
  const [name, onChangeName] = useState('');
  const [username, onChangeUsername] = useState('');
  const [password, onChangePassword] = useState('');
  const navigation = useNavigation<NavigationProp>();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Petgram</Text>

      <View style={styles.titleSpacer} />

      <TextInput
        style={styles.formInput}
        onChangeText={onChangeEmail}
        value={email}
        placeholder="Email"
        placeholderTextColor={'#B3B9BD'}
      />

      <View style={styles.formSpacer} />

      <TextInput
        style={styles.formInput}
        onChangeText={onChangeName}
        value={name}
        placeholder="Full Name"
        placeholderTextColor={'#B3B9BD'}
      />

      <View style={styles.formSpacer} />

      <TextInput
        style={styles.formInput}
        onChangeText={onChangeUsername}
        value={username}
        placeholder="Username"
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

      <Text
        style={styles.additionalOption}
        onPress={() => navigation.navigate('Login')}>
        Have an account? <Text style={styles.boldText}>log in.</Text>
      </Text>
    </SafeAreaView>
  );
};
