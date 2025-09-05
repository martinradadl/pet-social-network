import {useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Toast} from 'toastify-react-native';
import {changePassword, useAuth} from '../../../data/auth';
import {useShallow} from 'zustand/react/shallow';
import {VALIDATIONS} from '../../../validations';
import {COLORS} from '../../../global-styles';

type FormInputs = {
  currentPassword: string;
  newPassword: string;
  confirmNewPassword: string;
};

interface ChangePasswordModalProps {
  modalVisible: boolean;
  setModalVisible: (modalVisible: boolean) => void;
}

export const ChangePasswordModal = (props: ChangePasswordModalProps) => {
  const {modalVisible, setModalVisible} = props;
  const [isSubmitLoading, setIsSubmitLoading] = useState(false);

  const {user} = useAuth(
    useShallow(state => ({
      user: state.user,
    })),
  );

  const {
    control,
    handleSubmit,
    formState: {errors},
    getValues,
  } = useForm<FormInputs>();

  const onSubmit = async () => {
    try {
      if (user) {
        if (getValues().newPassword !== getValues().confirmNewPassword) {
          Toast.error('Confirm new password does not match the new password');
        } else {
          setIsSubmitLoading(true);
          await changePassword(user._id, getValues().newPassword);
          setIsSubmitLoading(false);
        }
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        Toast.error(err.message);
      }
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <View>
        <Text>Change Password</Text>

        <View style={styles.formItem}>
          <Controller
            control={control}
            rules={{required: VALIDATIONS.REQUIRED}}
            render={({field: {onChange, value}}) => (
              <TextInput
                style={styles.formInput}
                onChangeText={onChange}
                value={value}
                placeholder="Current password"
                placeholderTextColor={COLORS.INPUT}
                editable={!isSubmitLoading}
                secureTextEntry={true}
              />
            )}
            name="currentPassword"
          />
          {errors.currentPassword && (
            <Text style={styles.formInputError}>
              {errors.currentPassword.message}
            </Text>
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
                placeholder="New password"
                placeholderTextColor={COLORS.INPUT}
                editable={!isSubmitLoading}
                secureTextEntry={true}
              />
            )}
            name="newPassword"
          />
          {errors.newPassword && (
            <Text style={styles.formInputError}>
              {errors.newPassword.message}
            </Text>
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
                placeholder="Confirm new password"
                placeholderTextColor={COLORS.INPUT}
                editable={!isSubmitLoading}
                secureTextEntry={true}
              />
            )}
            name="confirmNewPassword"
          />
          {errors.confirmNewPassword && (
            <Text style={styles.formInputError}>
              {errors.confirmNewPassword.message}
            </Text>
          )}
        </View>

        <TouchableOpacity
          style={styles.submitButton}
          onPress={handleSubmit(onSubmit)}
          disabled={isSubmitLoading}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export const styles = StyleSheet.create({
  formItem: {width: '100%'},
  formInput: {
    minHeight: 40,
    borderRadius: 6,
    backgroundColor: COLORS.BACKGROUND,
    borderWidth: 1,
    borderColor: COLORS.INPUT,
    color: COLORS.PRIMARY_TEXT,
    paddingHorizontal: 8,
  },
  formInputError: {
    paddingLeft: 4,
    color: COLORS.ERROR,
    fontSize: 10,
    marginBottom: -4,
  },
  submitButton: {
    marginTop: 10,
    paddingVertical: 10,
    width: '100%',
    borderRadius: 6,
    backgroundColor: COLORS.PRIMARY_BUTTON,
  },
  submitButtonText: {
    fontSize: 20,
    color: COLORS.SECONDARY_TEXT,
    marginHorizontal: 'auto',
  },
});
