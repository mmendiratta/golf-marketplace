import * as React from 'react';
import { styles } from '../../styles/stylesheet'
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';

export default function AccountScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Account Page</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/AccountScreen.tsx" />
    </View>
  );
}