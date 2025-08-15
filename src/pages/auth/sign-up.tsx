import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {RootStackScreensList} from '../../main-router';
import {useNavigation} from '@react-navigation/native';
import {authStyles as styles} from './styles';
import {register, RegisterI} from '../../data/auth';
import {Controller, useForm} from 'react-hook-form';
import {VALIDATIONS} from '../../validations';
import {COLORS} from '../../global-styles';

type NavigationProp = NativeStackNavigationProp<RootStackScreensList, 'SignUp'>;

type FormInputs = {
  email: string;
  name: string;
  username: string;
  password: string;
};

export const SignUp = () => {
  const navigation = useNavigation<NavigationProp>();

  const {
    control,
    handleSubmit,
    formState: {errors},
    getValues,
  } = useForm<FormInputs>();

  const [isSubmitLoading, setIsSubmitLoading] = useState(false);

  const onSubmit = async () => {
    try {
      const newUser: RegisterI = getValues();

      setIsSubmitLoading(true);
      await register(newUser, () => navigation.navigate('SignUpCompleted'));
      setIsSubmitLoading(false);
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error(err.message);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Petgram</Text>

      <View style={styles.formItem}>
        <Controller
          control={control}
          rules={{
            required: VALIDATIONS.REQUIRED,
            pattern: VALIDATIONS.EMAIL_PATTERN,
          }}
          render={({field: {onChange, value}}) => (
            <TextInput
              style={styles.formInput}
              onChangeText={onChange}
              value={value}
              placeholder="Email"
              placeholderTextColor={COLORS.INPUT}
              editable={!isSubmitLoading}
            />
          )}
          name="email"
        />
        {errors.email && (
          <Text style={styles.formInputError}>{errors.email.message}</Text>
        )}
      </View>

      <View style={styles.formItem}>
        <Controller
          control={control}
          rules={{
            required: VALIDATIONS.REQUIRED,
            minLength: VALIDATIONS.MIN(3),
            maxLength: VALIDATIONS.MAX(26),
          }}
          render={({field: {onChange, value}}) => (
            <TextInput
              style={styles.formInput}
              onChangeText={onChange}
              value={value}
              placeholder="Full Name"
              placeholderTextColor={COLORS.INPUT}
              editable={!isSubmitLoading}
            />
          )}
          name="name"
        />
        {errors.name && (
          <Text style={styles.formInputError}>{errors.name.message}</Text>
        )}
      </View>

      <View style={styles.formItem}>
        <Controller
          control={control}
          rules={{
            required: VALIDATIONS.REQUIRED,
            minLength: VALIDATIONS.MIN(3),
            maxLength: VALIDATIONS.MAX(20),
            pattern: VALIDATIONS.USERNAME_PATTERN,
          }}
          render={({field: {onChange, value}}) => (
            <TextInput
              style={styles.formInput}
              onChangeText={onChange}
              value={value}
              placeholder="Username"
              placeholderTextColor={COLORS.INPUT}
              editable={!isSubmitLoading}
            />
          )}
          name="username"
        />
        {errors.username && (
          <Text style={styles.formInputError}>{errors.username.message}</Text>
        )}
      </View>

      <View style={styles.formItem}>
        <Controller
          control={control}
          rules={{
            required: VALIDATIONS.REQUIRED,
            minLength: VALIDATIONS.MIN(6),
            maxLength: VALIDATIONS.MAX(40),
          }}
          render={({field: {onChange, value}}) => (
            <TextInput
              style={styles.formInput}
              onChangeText={onChange}
              value={value}
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor={COLORS.INPUT}
              editable={!isSubmitLoading}
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
        <Text style={styles.submitButtonText}>Sign Up</Text>
      </TouchableOpacity>

      <Text
        style={styles.additionalOption}
        onPress={() => navigation.navigate('Login')}>
        Have an account? <Text style={styles.boldText}>log in.</Text>
      </Text>
    </SafeAreaView>
  );
};
