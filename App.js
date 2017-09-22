import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Header headerText ={'Albums'}/>
          <AlbumList/>
      </View>
    );
  }
};

AppRegistry.registerComponent('my-new-project', () => App);