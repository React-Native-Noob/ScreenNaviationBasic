import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet,
  Modal,
} from 'react-native';

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };

  const onAddGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal('');
  };
  const onCancelHandler = () => {
    props.onCancel(enteredGoal);
    setEnteredGoal('');
  };

  return (
    <Modal visible={props.visible} animationType="slide" transparent={true}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          backgroundColor: 'rgba(0,0,0,0.7)',
        }}>
        <View style={styles.inputViewStyle}>
          <TextInput
            placeholder="Enter Something"
            style={styles.niceInputStyle}
            onChangeText={goalInputHandler}
            value={enteredGoal}
          />
          <View
            style={{
              flexDirection: 'row',
              width: '60%',
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity onPress={onCancelHandler}>
              <View style={styles.cancleButtonStyle}>
                <Text style={{color: 'white'}}>Cancel</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={onAddGoalHandler}>
              <View style={styles.customButtonViewStyle}>
                <Text style={{color: 'white'}}> Add </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputViewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: '90%',
    height: 200,
    backgroundColor: 'orange',
  },

  niceInputStyle: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    margin: 10,
    width: '80%',
  },

  cancleButtonStyle: {
    borderRadius: 15,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    width: 70,
  },

  customButtonViewStyle: {
    borderRadius: 15,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    width: 70,
  },
});

export default GoalInput;
