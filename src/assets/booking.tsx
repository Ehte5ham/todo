import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {SafeAreaView} from 'react-native-safe-area-context';
import {addTodo, removeTodo} from '../Redux/todoSlice';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

const Booking = ({}: any) => {
  const [text, setText] = useState('');
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const todos = useSelector((state: any) => state?.todo?.todos);

  const handleTodoDone = (id: string) => {
    dispatch(removeTodo(id));
  };

  const onChangeHandler = (t: string) => {
    setText(t);
  };

  const addTodoHandler = () => {
    dispatch(addTodo(text));
    console.log('todoarrayyyyy', todos);
  };

  return (
    // <ScrollView>
    <SafeAreaView style={styles.maincontainer}>
      <View style={styles.container1}>
        <TouchableOpacity onPress={() => navigation.navigate('Addpicture')}>
          <Text style={{fontSize: 35, textAlign: 'center', fontWeight: 'bold'}}>
            React Todo App
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container2}>
        <View style={{flexDirection: 'row'}}>
          <TextInput
            onChangeText={text => onChangeHandler(text)}
            value={text}
            placeholder="Enter Something"
            style={styles.input}></TextInput>
          <TouchableOpacity style={styles.addbutton} onPress={addTodoHandler}>
            <Text
              style={{
                fontSize: 20,
                color: 'white',
              }}>
              Add
            </Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={todos}
          renderItem={({item}) => (
            <View>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  lineHeight: 30,
                  color: 'red',
                  backgroundColor: 'white',
                  padding: 8,
                  width: 344,
                }}>
                <Text style={{fontWeight: 'normal', color: 'black'}}>
                  {item.text}{' '}
                </Text>

                <TouchableOpacity onPress={() => handleTodoDone(item.id)}>
                  <View>
                    <Icon name="times-circle" size={30} color={'red'} />
                  </View>
                </TouchableOpacity>
              </Text>
              <Text> </Text>
            </View>
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
    // </ScrollView>
  );
};

export default Booking;

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    // backgroundColor: 'red',
  },
  container1: {
    // flex: 0.2,
    // backgroundColor: 'green',
    justifyContent: 'center',
  },
  container2: {
    // flex: 0.9,
    // backgroundColor: 'pink',
    padding: 14,
  },
  input: {
    borderColor: '#707070',
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    fontSize: 15,
    paddingLeft: 10,
    width: 280,
    borderRadius: 5,

    // borderBottomColor: '#707070',
  },
  addbutton: {
    backgroundColor: 'green',
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: -5,
    borderRadius: 5,
  },
});
