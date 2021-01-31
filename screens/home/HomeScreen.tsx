import * as React from 'react';
import { styles } from '../../styles/stylesheet'
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.header}>Find by these categories on Home</Text>
      <Text style={styles.header}>Popular Brands</Text>
      <Text style={styles.header}>Featured Items</Text>
      <Text style={styles.header}>News</Text>
    </View>
  );
}

