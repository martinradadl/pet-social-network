import {useShallow} from 'zustand/shallow';
import {logout, setIsExpirationModalOpen, useAuth} from '../data/auth';
import {Modal, Pressable, StyleSheet, Text, View} from 'react-native';
import Icon from '@react-native-vector-icons/material-icons';

export const ExpirationModal = () => {
  const {isExpirationModalOpen} = useAuth(
    useShallow(state => ({
      isExpirationModalOpen: state.isExpirationModalOpen,
    })),
  );

  const close = () => {
    logout();
    setIsExpirationModalOpen(false);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isExpirationModalOpen}
      onRequestClose={close}>
      <View style={styles.container}>
        <Icon name="warning-amber" size={36} color="#900" />
        <Text style={styles.title}>Session Expired</Text>
        <Text style={styles.message}>
          Your session has expired, please login again.
        </Text>
        <Pressable style={styles.button} onPress={close}>
          <Text style={styles.buttonText}>Logout</Text>
        </Pressable>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  title: {fontSize: 30},
  message: {fontSize: 20},
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 6,
    backgroundColor: 'red',
  },
  buttonText: {fontSize: 20, color: 'white', marginHorizontal: 'auto'},
});
