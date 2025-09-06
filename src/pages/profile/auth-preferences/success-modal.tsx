import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS} from '../../../global-styles';
import Icon from '@react-native-vector-icons/material-icons';
import {logout} from '../../../data/auth';

interface SuccessfulPasswordChangeModalProps {
  modalVisible: boolean;
  setModalVisible: (modalVisible: boolean) => void;
}

export const SuccessfulPasswordChangeModal = (
  props: SuccessfulPasswordChangeModalProps,
) => {
  const {modalVisible, setModalVisible} = props;

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
            <Icon
              name={'check-circle-outline'}
              size={32}
              color={COLORS.PRIMARY_TEXT}
            />
            <Text style={styles.title}>Success</Text>
          </View>

          <Text style={styles.description}>
            Your password has been seccessfully updated! You will be log out
          </Text>

          <TouchableOpacity style={styles.submitButton} onPress={logout}>
            <Text style={styles.submitButtonText}>Confirm</Text>
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
    alignItems: 'center',
    gap: 10,
    borderRadius: 8,
    elevation: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.PRIMARY_TEXT,
  },
  description: {textAlign: 'center'},
  submitButton: {
    marginTop: 10,
    paddingVertical: 10,
    width: '80%',
    borderRadius: 6,
    backgroundColor: COLORS.PRIMARY_BUTTON,
  },
  submitButtonText: {
    fontSize: 20,
    color: COLORS.SECONDARY_TEXT,
    marginHorizontal: 'auto',
  },
});
