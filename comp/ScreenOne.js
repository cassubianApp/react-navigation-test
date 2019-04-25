import React from 'react'; 

//ui
import { StyleSheet, View } from 'react-native';
import { Text, Button } from 'native-base';

const ScreenOne =  (props) => {
  
  return (
    <View style={styles.container}>
        <Text>screen one</Text>
        <Button 
          style={{backgroundColor: 'rgb(0, 104, 179)'}}
          onPress={() => props.navigation.push('ScreenTwo')}
        >
          <Text styles={styles.textShadow}>screen two</Text>
        </Button>
    </View>
  );
}

ScreenOne.navigationOptions = ({navigation}) => ({
  header: null
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    display: 'flex'
  }
});

export default ScreenOne;