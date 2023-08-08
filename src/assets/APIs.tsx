import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';

const batchSize = 7; // Number of items to show per batch

const APIs = () => {
  const [data, setData] = useState<any[]>([]);
  const [refreshing, setRefreshing] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);
  console.log(currentPage);
  const getAPI = () => {
    setRefreshing(false);
    axios({
      method: 'GET',
      url: 'https://restcountries.com/v3.1/all',
    })
      .then(res => {
        setData(prevData => [...prevData, ...res.data] as any);
        setCurrentPage(currentPage => currentPage + 1);
      })
      .catch(err => console.log(err))
      .finally(() => setRefreshing(false));
  };

  const onRefresh = () => {
    setData([]);
    setCurrentPage(1);
    getAPI();
  };

  useEffect(() => {
    // Fetch data on initial load
    getAPI();
  }, []);

  const renderLoader = () => {
    return (
      <View style={styles.loaderstyle}>
        <ActivityIndicator size="large" color="red" />
      </View>
    );
  };

  const loadMoreItem = () => {
    if (!loadingMore) {
      setLoadingMore(true);
      getAPI();
      setLoadingMore(false);
    }
  };

  const displayedData = data.slice(0, currentPage * batchSize);

  return (
    <View style={{flex: 1}}>
      <View>
        <TouchableOpacity style={{backgroundColor: 'pink'}} onPress={onRefresh}>
          <Text style={{fontSize: 30, textAlign: 'center', color: 'black'}}>
            GET DATA
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        data={displayedData}
        ListEmptyComponent={() => <Text>No data</Text>}
        ListFooterComponent={renderLoader}
        onEndReached={loadMoreItem}
        onEndReachedThreshold={0.5} // Adjust the threshold as needed
        renderItem={({item}) => (
          <View
            style={{
              margin: 20,
              flex: 1,
              flexDirection: 'row',
              width: 340,
              padding: 10,
              backgroundColor: 'white',
              borderRadius: 15,
            }}>
            <Image
              source={{
                uri: item.flags.png as string,
              }}
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                marginTop: 25,
              }}
            />
            <View style={{padding: 10, width: 270}}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  lineHeight: 30,
                  color: 'red',
                }}>
                name:{' '}
                <Text style={{fontWeight: 'normal', color: 'black'}}>
                  {item.name.common} |{' '}
                </Text>
                <Text>
                  population:{' '}
                  <Text style={{fontWeight: 'normal', color: 'black'}}>
                    {item.population} |{' '}
                  </Text>
                </Text>
                <Text>
                  Region:{' '}
                  <Text style={{fontWeight: 'normal', color: 'black'}}>
                    {item.region} |{' '}
                  </Text>
                </Text>
                <Text>
                  Translations:{' '}
                  <Text style={{fontWeight: 'normal', color: 'black'}}>
                    {item.translations.ara.common}
                  </Text>
                </Text>
              </Text>
            </View>
          </View>
        )}
        // keyExtractor={item => item.cca2} // Assuming 'cca2' is a unique key for each item
      />
    </View>
  );
};

export default APIs;

const styles = StyleSheet.create({
  loaderstyle: {
    marginVertical: 16,
    alignItems: 'center',
    marginBottom: 50,
  },
});
