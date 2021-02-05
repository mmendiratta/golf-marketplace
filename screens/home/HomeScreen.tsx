import * as React from 'react';
import { styles } from '../../styles/stylesheet'
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import {ITEM_WIDTH, SLIDER_WIDTH} from '../../constants/Dimensions';
import Carousel from 'react-native-snap-carousel';
import { Card, ListItem, Button, Icon, Image} from 'react-native-elements';
import { ScrollView } from 'react-native';
import { ProductCarousel } from '../../product/ProductCarousel';

 
// const CarouselCardItem = () => {
//   return (
//     carouselItems.map((item) => {
//       return (
//         <Card>
//           <Card.Title>{item.title}</Card.Title>
//           <Card.FeaturedSubtitle>{item.text}</Card.FeaturedSubtitle>
//         </Card>
//       )
//     })
//   )
// }

 

export default function HomeScreen() {
  return (
    <>
    <ScrollView>
      <ProductCarousel />
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.header}>Find by these categories on Home</Text>
      <Text style={styles.header}>Popular Brands</Text>
      <Text style={styles.header}>Featured Items</Text>
      <Text style={styles.header}>News</Text>
    </View>
    </ScrollView>
    </>
  );
}

