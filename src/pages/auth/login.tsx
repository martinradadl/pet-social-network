import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {RootStackScreensList} from '../../main-router';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {authStyles as styles} from './styles';
import {Toast} from 'toastify-react-native';
import {login, LoginI} from '../../data/auth';
import {Controller, useForm} from 'react-hook-form';
import {emailRegex} from '../../helpers/utils';

type NavigationProp = NativeStackNavigationProp<RootStackScreensList, 'Login'>;

type FormInputs = {
  usernameOrEmail: string;
  password: string;
};

export const Login = () => {
  const navigation = useNavigation<NavigationProp>();

  const {
    control,
    handleSubmit,
    formState: {errors},
    getValues,
  } = useForm<FormInputs>();

  const [isSubmitLoading, setIsSubmitLoading] = useState(false);

  const isEmail = () => emailRegex.test(getValues('usernameOrEmail'));

  const onSubmit = async () => {
    try {
      const credentials: LoginI = {password: getValues('password')};
      if (isEmail()) {
        credentials.email = getValues('usernameOrEmail');
      } else {
        credentials.username = getValues('usernameOrEmail');
      }
      setIsSubmitLoading(true);
      await login(credentials);
      setIsSubmitLoading(false);
    } catch (err: unknown) {
      if (err instanceof Error) {
        Toast.error(err.message);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Petgram</Text>

      <View style={styles.formItem}>
        <Controller
          control={control}
          rules={{required: {message: 'This field is required', value: true}}}
          render={({field: {onChange, value}}) => (
            <TextInput
              style={styles.formInput}
              onChangeText={onChange}
              value={value}
              placeholder="Email or username"
              placeholderTextColor={'#B3B9BD'}
              editable={!isSubmitLoading}
            />
          )}
          name="usernameOrEmail"
        />
        {errors.usernameOrEmail && (
          <Text style={styles.formInputError}>
            {errors.usernameOrEmail.message}
          </Text>
        )}
      </View>

      <View style={styles.formItem}>
        <Controller
          control={control}
          rules={{required: {message: 'This field is required', value: true}}}
          render={({field: {onChange, value}}) => (
            <TextInput
              style={styles.formInput}
              onChangeText={onChange}
              value={value}
              placeholder="Password"
              placeholderTextColor={'#B3B9BD'}
              editable={!isSubmitLoading}
              secureTextEntry={true}
            />
          )}
          name="password"
        />
        {errors.password && (
          <Text style={styles.formInputError}>{errors.password.message}</Text>
        )}
      </View>

      <TouchableOpacity
        style={styles.submitButton}
        onPress={handleSubmit(onSubmit)}
        disabled={isSubmitLoading}>
        <Text style={styles.submitButtonText}>Login</Text>
      </TouchableOpacity>

      <Text
        style={styles.additionalOption}
        onPress={() => navigation.navigate('ForgotPassword')}>
        Forgot your password?{' '}
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
