import React, { useEffect, useState } from 'react';
import { withNavigationFocus } from 'react-navigation';
import { useNavigationEvents } from 'react-navigation-hooks';

//ui
import { StyleSheet, View } from 'react-native';
import { Text } from 'native-base';

const ScreenTwo =  (props) => {
  
  useEffect(() => {
    console.log(props);
    alert('test');
  }, [props.test]);

  /*useNavigationEvents(evt => {
    // latest state on evt.state
    // prev state on evt.lastState
    // triggering navigation action on evt.action

    console.log(evt)
  });*/

  const didBlurSubscription = props.navigation.addListener(
    'didFocus',
    payload => {
      useEffect(() => {
        console.log(props);
        alert('test');
      }, []);
    }
  );

  return (
    <View style={styles.container}>
        <Text>screen two</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default withNavigationFocus(ScreenTwo);