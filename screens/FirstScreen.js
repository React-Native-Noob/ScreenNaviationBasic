import 'react-native-gesture-handler';
import React, {Component, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import GoalItem from '/Users/macmini/Desktop/ReactNoob/ScreenNavigation/components/GoalItem.js';
import GoalInput from '/Users/macmini/Desktop/ReactNoob/ScreenNavigation/components/GoalInput.js';

export default function FirstScreen() {
  const [courseGoal, setCourseGoal] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const onButtonPress = goalTitle => {
    setCourseGoal(currentGoals => [
      ...currentGoals,
      {id: Math.random().toString(), value: goalTitle},
    ]);
    setIsAddMode(false);
  };

  const onRemoveItem = goalId => {
    setCourseGoal(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalId);
    });
  };

  const onAddGoalCancelHandler = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.setupBaseViewStyle}>
      <Text style={{color: 'white', alignSelf: 'center', marginBottom: 20}}>
        TODO App
      </Text>
      <Button title="Add New Task" onPress={() => setIsAddMode(true)} />
      <GoalInput
        visible={isAddMode}
        onAddGoal={onButtonPress}
        onCancel={onAddGoalCancelHandler}
      />
      <FlatList
        style={{marginTop: 20}}
        keyExtractor={(item, index) => item.id}
        data={courseGoal}
        renderItem={itemData => (
          <GoalItem
            id={itemData.item.id}
            onDelete={onRemoveItem}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  setupBaseViewStyle: {
    padding: 40,
    backgroundColor: 'teal',
    flex: 1,
    justifyContent: 'center',
  },
});
