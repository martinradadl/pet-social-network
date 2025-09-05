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
import {changePassword, checkPassword, useAuth} from '../../../data/auth';
import {useShallow} from 'zustand/react/shallow';
import {VALIDATIONS} from '../../../validations';
import {COLORS} from '../../../global-styles';
import Icon from '@react-native-vector-icons/material-icons';

type FormInputs = {
  currentPassword: string;
  newPassword: string;
  confirmNewPassword: string;
};

interface ChangePasswordModalProps {
  modalVisible: boolean;
  setModalVisible: (modalVisible: boolean) => void;
  setSuccessModalVisible: (modalVisible: boolean) => void;
}

const renderInput =
  (placeholder: string, isSubmitLoading: boolean) =>
  ({
    field: {onChange, value},
  }: {
    field: {onChange: (text: string) => void; value: string};
  }) =>
    (
      <TextInput
        style={styles.formInput}
        onChangeText={onChange}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={COLORS.INPUT}
        editable={!isSubmitLoading}
        secureTextEntry={true}
      />
    );

export const ChangePasswordModal = (props: ChangePasswordModalProps) => {
  const {modalVisible, setModalVisible, setSuccessModalVisible} = props;
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
      if (getValues().newPassword !== getValues().confirmNewPassword) {
        Toast.error('Confirm new password does not match with new password');
      } else {
        if (user?._id) {
          setIsSubmitLoading(true);
          const isCorrectPassword = await checkPassword(
            user._id,
            getValues().currentPassword,
          );

          if (isCorrectPassword) {
            await changePassword(user._id, getValues().newPassword);
            setSuccessModalVisible(true);
            setModalVisible(false);
          } else {
            Toast.warn('The current password you typed is not valid');
          }
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
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>Change Password</Text>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => {
                setModalVisible(false);
              }}>
              <Icon name={'close'} size={28} color={COLORS.PRIMARY_TEXT} />
            </TouchableOpacity>
          </View>

          <View style={styles.formItem}>
            <Controller
              control={control}
              rules={{required: VALIDATIONS.REQUIRED}}
              render={renderInput('Current password', isSubmitLoading)}
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
              render={renderInput('New password', isSubmitLoading)}
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
              render={renderInput('Confirm new password', isSubmitLoading)}
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
      </View>
    </Modal>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 16,
  },
  content: {
    backgroundColor: COLORS.BACKGROUND,
    width: '100%',
    paddingVertical: 20,
    paddingHorizontal: 16,
    gap: 10,
    borderRadius: 8,
    elevation: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'relative',
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.PRIMARY_TEXT,
  },
  closeButton: {position: 'absolute', right: 0},
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
