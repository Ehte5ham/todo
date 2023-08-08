// import {
//   StyleSheet,
//   Text,
//   View,
//   TextInput,
//   Image,
//   TouchableOpacity,
// } from 'react-native';
// import React, {Component, useState} from 'react';
// import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
// import * as ImagePicker from 'react-native-image-picker';
// import firestore from '@react-native-firebase/firestore';
// import Storage from '@react-native-firebase/firestore';

// class ProfileUI extends Component {
//   state = {
//     user: {
//       name: '',
//       age: '',
//       email: '',
//       gender: '',
//       phone: '',
//     },
//   };
//   constructor(props) {
//     super(props);
//     this.getUser();
//     this.subscriber = firestore()
//       .collection('user')
//       .doc('ABC')
//       .onSnapshot(doc => {
//         this.setState({
//           user: {
//             name: doc.data().name,
//             email: doc.data().email,
//             phone: doc.data().phone,
//             gender: doc.data().gender,
//             age: doc.data().age,
//           },
//         });
//       });
//   }
//   getUser = async () => {
//     // const userDocument = await firestore().collection('user').doc('ABC').get();
//     const userrDocument = await firestore().collection('user').doc().set({
//       name: this.state.user.name,
//       age: this.state.user.age,
//       email: this.state.user.email,
//       gender: this.state.user.gender,
//       phone: this.state.user.phone,
//     });
//     // console.log(userDocument);
//     console.log(userrDocument);
//   };

//   render() {
//     return (
//       <View style={styles.mainContainer}>
//         <View style={styles.Container1}>
//           <Image
//             source={require('./pics/header.jpg')}
//             style={{
//               width: 110,
//               height: 110,
//               borderRadius: 55,
//             }}></Image>
//           <TouchableOpacity>
//             <Image
//               source={require('./pics/camera.png')}
//               style={{
//                 position: 'absolute',
//                 width: 40,
//                 height: 40,
//                 borderRadius: 5,
//                 bottom: -20,
//                 right: -60,
//               }}></Image>
//           </TouchableOpacity>
//         </View>
//         <View style={styles.Container2}>
//           <View style={{paddingVertical: 20}}>
//             <TextInput
//               placeholder="Username"
//               style={styles.Input}
//               // value={this.state.user.name}
//               onChangeText={text =>
//                 this.setState({
//                   user: {
//                     ...this.state.user,
//                     name: text,
//                   },
//                 })
//               }>
//               {''}
//               {this.state.user.name}
//             </TextInput>
//           </View>
//           <View style={{paddingVertical: 20}}>
//             <TextInput
//               placeholder="Email"
//               style={styles.Input}
//               onChangeText={text =>
//                 this.setState({
//                   user: {
//                     ...this.state.user,
//                     email: text,
//                   },
//                 })
//               }>
//               {''}
//               {this.state.user.email}
//             </TextInput>
//           </View>
//           <View style={{paddingVertical: 20}}>
//             <TextInput
//               placeholder="Phone"
//               style={styles.Input}
//               keyboardType="numeric"
//               onChangeText={text =>
//                 this.setState({
//                   user: {
//                     ...this.state.user,
//                     phone: text,
//                   },
//                 })
//               }>
//               {''}
//               {this.state.user.phone}
//             </TextInput>
//           </View>
//           <View style={{paddingVertical: 20}}>
//             <TextInput
//               placeholder="Gender"
//               style={styles.Input}
//               onChangeText={text =>
//                 this.setState({
//                   user: {
//                     ...this.state.user,
//                     gender: text,
//                   },
//                 })
//               }>
//               {''}
//               {this.state.user.gender}
//             </TextInput>
//           </View>
//           <View style={{paddingVertical: 20}}>
//             <TextInput
//               placeholder="Date of Birth"
//               style={styles.Input}
//               onChangeText={text =>
//                 this.setState({
//                   user: {
//                     ...this.state.user,
//                     age: text,
//                   },
//                 })
//               }>
//               {''}
//               {this.state.user.age}
//             </TextInput>
//           </View>
//           <View
//             style={
//               {
//                 // justifyContent: 'center',
//                 // width: 90,
//                 // height: 50,
//                 // alignItems: 'center',
//               }
//             }>
//             <TouchableOpacity
//               style={{
//                 backgroundColor: 'red',
//                 width: 90,
//                 height: 40,
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 borderRadius: 10,
//               }}
//               onPress={this.getUser}>
//               <Text
//                 style={{
//                   color: 'white',
//                   fontSize: 20,
//                   fontWeight: 'bold',

//                   alignItems: 'center',
//                 }}>
//                 Update
//               </Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     );
//   }
// }

// export default ProfileUI;

// const styles = StyleSheet.create({
//   mainContainer: {
//     flex: 1,
//   },
//   Container1: {
//     flex: 0.26,
//     backgroundColor: '#0e1a32',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   Container2: {
//     flex: 0.7,

//     padding: 15,
//   },
//   Input: {
//     borderBottomWidth: 2,
//     borderBottomColor: '#e4e4e4',
//   },
// });

// import React, {Component} from 'react';
// import {View, Text, Button} from 'react-native';

//   render() {
//     return (
//       <View>
//         <Text>name:{this.state.user.name}</Text>
//       </View>
//     );
//   }
// }
// export default ProfileUI;

import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import storage from '@react-native-firebase/firestore';

import {Calendar, LocaleConfig} from 'react-native-calendars';

const ProfileUI = () => {
  const [selected, setSelected] = useState('');

  const [user, setUser] = useState<any>({
    name: '',
    age: '',
    email: '',
    gender: '',
    phone: '',
    image: '',
  });
  const createDocument = async () => {
    try {
      const userId = 'ABC';
      const documentSnapshot = await firestore()
        .collection('user')
        .doc(userId)
        .get();
      if (!documentSnapshot.exists) {
        await firestore().collection('user').doc(userId).set({
          name: '',
          age: '',
          email: '',
          gender: '',
          phone: '',
          profileImageUrl: '',
        });
        console.log('Document created successfully.');
      }
    } catch (error) {
      console.error('Error creating document:', error);
    }
  };
  useEffect(() => {
    createDocument();
    const subscriber = firestore()
      .collection('user')
      .doc('ABC')
      .onSnapshot(doc => {
        const data = doc.data();
        if (data) {
          setUser(data);
          setselectImage(data.profileImageUrl);
        }
      });

    // Unsubscribe from the Firestore document when the component unmounts
    return () => subscriber();
  }, []);

  const getUser = async () => {
    try {
      const userId = 'ABC'; // Replace 'ABC' with the actual document ID you want to update.
      await firestore().collection('user').doc(userId).update({
        name: user.name,
        age: user.age,
        email: user.email,
        gender: user.gender,
        phone: user.phone,
        profileImageUrl: selectImage,
      });
      console.log('User data updated successfully.');
    } catch (error) {
      console.error('Error updating user data:', error);
    }
  };
  const [selectImage, setselectImage] = useState('');
  const ImagePicker = () => {
    let options: any = {
      storageoptions: {
        path: 'image',
      },
    };

    launchImageLibrary(options, response => {
      setselectImage(response.assets?.[0]?.uri ?? '');

      console.log(response.assets?.[0]?.uri ?? '');
    });

    // launchImageLibrary(options, response => {
    //   if (response.assets && response.assets.length > 0) {
    //     const reference = storage().ref(`users/${'ABC'}/profileImage`);
    //     const pathToFile = response.assets[0].uri;
    //     reference
    //       .putFile(pathToFile)
    //       .then(() => {
    //         reference
    //           .getDownloadURL()
    //           .then(url => {
    //             setselectImage(url);
    //             // AsyncStorage.setItem('profileImageURL', url);
    //           })
    //           .catch(error => {
    //             console.log('Error getting download URL:', error);
    //           });
    //       })
    //       .catch(error => {
    //         console.log('Error uploading file:', error);
    //       });
    //   }
    // });
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.Container1}>
        <Image
          source={{uri: selectImage}}
          style={{
            width: 110,
            height: 110,
            borderRadius: 55,
          }}
        />
        <TouchableOpacity
          onPress={() => {
            ImagePicker();
          }}>
          <Image
            source={require('./pics/photo-camera.png')}
            style={{
              position: 'absolute',
              width: 40,
              height: 40,
              borderRadius: 5,
              bottom: -20,
              right: -60,
            }}
          />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.Container2}>
        <View style={{paddingVertical: 20}}>
          <TextInput
            placeholder="Username"
            style={styles.Input}
            onChangeText={text =>
              setUser({
                ...user,
                name: text,
              })
            }>
            {user.name}
          </TextInput>
        </View>
        <View style={{paddingVertical: 20}}>
          <TextInput
            placeholder="Email"
            style={styles.Input}
            onChangeText={text =>
              setUser({
                ...user,
                email: text,
              })
            }>
            {user.email}
          </TextInput>
        </View>
        <View style={{paddingVertical: 20}}>
          <TextInput
            placeholder="Phone"
            style={styles.Input}
            keyboardType="numeric"
            onChangeText={text =>
              setUser({
                ...user,
                phone: text,
              })
            }>
            {user.phone}
          </TextInput>
        </View>
        <View style={{paddingVertical: 20}}>
          <TextInput
            placeholder="Gender"
            style={styles.Input}
            onChangeText={text =>
              setUser({
                ...user,
                gender: text,
              })
            }>
            {user.gender}
          </TextInput>
        </View>
        <View style={{paddingVertical: 20}}>
          <Calendar
            placeholder="Date of Birth"
            style={styles.Input}
            onDayPress={day => {
              setUser({
                ...user,
                age: day.dateString,
              });
              setSelected(day.dateString);
            }}
            markedDates={{
              [selected]: {
                selected: true,
                disableTouchEvent: true,
              },
            }}
            // onChangeText={text =>
            //   setUser({
            //     ...user,
            //     age: text,
            //   })
            // }
          >
            {user.age}
          </Calendar>
        </View>
        <View
          style={
            {
              // justifyContent: 'center',
              // width: 90,
              // height: 50,
              // alignItems: 'center',
            }
          }>
          <TouchableOpacity
            style={{
              backgroundColor: 'red',
              width: 90,
              height: 40,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
            }}
            onPress={getUser}>
            <Text
              style={{
                color: 'white',
                fontSize: 20,
                fontWeight: 'bold',

                alignItems: 'center',
              }}>
              Update
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileUI;

const styles = StyleSheet.create({
  Scrollcontainer: {
    flexGrow: 1,
  },
  mainContainer: {
    flex: 1,
  },
  Container1: {
    flex: 0.35,
    backgroundColor: '#0e1a32',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Container2: {
    flex: 0.6,

    padding: 15,
  },
  Input: {
    borderBottomWidth: 2,
    borderBottomColor: '#e4e4e4',
  },
});
