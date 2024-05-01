import React from 'react';
import { Modal, View, StyleSheet, TouchableWithoutFeedback } from 'react-native';

const ModalPopup: React.FC<ModalPopupProps>  = ({ children, show, setShow }:any) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={show}
      onRequestClose={() => setShow(false)}
    >
      <TouchableWithoutFeedback onPress={() => setShow(false)}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {children}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

interface ModalPopupProps {
  children: React.ReactNode;
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 18,
    borderRadius: 10,
    width: '80%',
  },
});

export default ModalPopup;
