import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

const Box = props => {
  const {color, number} = props;
  return (
    <View style={styles.coloredBox(color)}>
      <Text style={styles.text(color)}>{number}</Text>
    </View>
  );
};

const App: () => Node = () => {
  return (
    <SafeAreaView>
      <View style={[styles.container, styles.firstContainer]}>
        <Box color={'red'} number={1} />
        <Box color={'yellow'} number={2} />
        <Box color={'black'} number={3} />
      </View>
      <View style={[styles.container, styles.secondContainer]}>
        <View style={{flex: 0.8}} />
        <Box color={'black'} number={1} />
        <Box color={'yellow'} number={2} />
        <Box color={'red'} number={3} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '50%',
    justifyContent: 'space-between',
  },
  firstContainer: {
    flexDirection: 'column',
    backgroundColor: 'cornflowerblue',
    alignItems: 'center',
  },
  secondContainer: {
    flexDirection: 'row',
    backgroundColor: 'lightgreen',
    alignItems: 'flex-end',
  },
  coloredBox: color => ({
    flexDirection: 'row',
    backgroundColor: color,
    width: '10%',
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  }),
  text: color => ({
    color: color === 'black' ? 'white' : 'black',
    fontSize: 14,
    alignItems: 'center',
  }),
});

export default App;
