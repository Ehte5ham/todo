import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import React from 'react';
import {addDoto} from '../Redux/todoSlice';
import {useDispatch, useSelector} from 'react-redux';

const PictureData = () => {
  const dotos = useSelector((state: any) => state?.doto?.dotos);
  console.log(dotos);
  return (
    <View>
      <FlatList
        data={dotos}
        renderItem={({item}) => (
          <View>
            <View>
              <Image
                source={{uri: item.text.selectImage}}
                style={{
                  width: 400,
                  height: 400,
                  borderRadius: 5,
                }}
              />
            </View>
            <View>
              <Text> {item.text.Name} </Text>
            </View>
            <View>
              <Text> {item.text.Description} </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default PictureData;

const styles = StyleSheet.create({});
