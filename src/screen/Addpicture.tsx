import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Text,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import {launchImageLibrary} from 'react-native-image-picker';
import {useDispatch, useSelector} from 'react-redux';
import {addDoto} from '../Redux/todoSlice';
import {useNavigation} from '@react-navigation/native';

const Addpicture = ({}: any) => {
  const navigation = useNavigation();
  const [selectImage, setSelectImage] = useState(''); // Define selectImage within the component

  const ImagePicker = () => {
    let options: any = {
      storageOptions: {
        path: 'image',
      },
    };

    launchImageLibrary(options, response => {
      setSelectImage(response.assets?.[0]?.uri ?? '');

      console.log(response.assets?.[0]?.uri ?? '');
    });
  };
  const [Name, setName] = useState();
  const [Description, setDescription] = useState();
  const dispatch = useDispatch();
  const dotos = useSelector((state: any) => state?.doto?.dotos);
  const Datahandler = () => {
    if (Name && Description) {
      // Check if Name and Description are not empty
      console.log(Name, Description, selectImage);
      dispatch(addDoto({Name, Description, selectImage}));
      navigation.navigate('PictureData');
    } else {
      alert('Name and Description are required');
    }
  };

  return (
    <SafeAreaView style={styles.maincontainer}>
      <View style={styles.container1}>
        <View style={{padding: 10}}>
          <TextInput
            placeholder="name"
            style={styles.Input}
            value={Name}
            onChangeText={setName}></TextInput>
        </View>
        <View style={{padding: 10}}>
          <TextInput
            placeholder="Description"
            style={styles.Input}
            value={Description}
            onChangeText={setDescription}></TextInput>
        </View>
      </View>
      <View style={styles.container2}>
        <Image
          source={{uri: selectImage}}
          style={{
            width: 110,
            height: 110,
            borderRadius: 55,
            borderColor: 'black',
            borderWidth: 1,
          }}
        />
        <View style={{alignItems: 'center', width: 200}}>
          <Text style={{fontSize: 30}}>Upload File</Text>
          <Text
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
            }}>
            Browse and Select your files you wanted to upload
          </Text>
          <TouchableOpacity
            onPress={() => {
              ImagePicker();
            }}>
            <Image
              source={require('../assets/pics/plus.png')}
              style={{
                width: 50,
                height: 50,
                borderRadius: 5,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.container3}>
        <TouchableOpacity
          style={{
            backgroundColor: '#05c6a1',
            width: 90,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 7,
          }}
          onPress={Datahandler}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>Submit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Addpicture;

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    // backgroundColor: 'red',
  },
  container1: {
    flex: 0.3,
    // backgroundColor: '#05c6a1',
    justifyContent: 'center',
  },
  container2: {
    flex: 0.4,
    // backgroundColor: 'pink',
    padding: 10,
    alignItems: 'center',
  },
  container3: {
    flex: 0.3,
    alignItems: 'center',
    padding: 10,
  },
  Input: {
    borderWidth: 2,
    borderColor: '#e4e4e4',
    padding: 12,
  },
});
