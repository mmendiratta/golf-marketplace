import * as React from 'react';
import { styles } from '../../styles/stylesheet'
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';

export default function ShopScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shop Screen</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.header}>Search Bar</Text>
      <Text style={styles.header}>Club Type</Text>
      <Text style={styles.header}>Equipment</Text>
      <Text style={styles.header}>Clothing</Text>
      <Text style={styles.header}>Technology</Text>
    </View>
  );
}