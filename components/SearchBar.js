import React from 'react';
import { TextInput, View, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SearchBar = ({ onSearch }) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search for a location"
        placeholderTextColor="#fff"
        onSubmitEditing={(event) => onSearch(event.nativeEvent.text)}
        style={styles.input}
      />
      <Icon name="search" size={20} style={styles.icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#fff', 
    width: Dimensions.get('window').width * 0.8, 
    alignSelf: 'center',
    position: 'absolute', 
    top: 100,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  },
  input: {
    flex: 1,
    height: 40,
    padding: 10,
    color: '#fff', 
    fontWeight: 'bold', 
  },
  icon: {
    marginLeft: 10,
    color: '#fff', 
  },
});

export default SearchBar;