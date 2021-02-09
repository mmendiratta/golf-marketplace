import * as React from 'react';
import { styles } from '../styles/stylesheet'
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import {ITEM_WIDTH, SLIDER_WIDTH} from '../constants/Dimensions';
import Carousel from 'react-native-snap-carousel';
import { Card, ListItem, Button, Icon, Image} from 'react-native-elements';

const data = [
  {
    title: "Gift Ideas",
    // body: "Ut tincidunt tincidunt erat. Sed cursus turpis vitae tortor. Quisque malesuada placerat nisl. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
    imgUrl: "https://www.tripsavvy.com/thmb/4uQ1MalcpDPfiI1PyP3AOsQzOE8=/3036x2010/filters:fill(auto,1)/golf-ball-wrapped-in-a-bow-5c169cdec9e77c0001ae0d64.jpg"
  },
  {
    title: "Newly Listed",
    // body: "Aenean ut eros et nisl sagittis vestibulum. Donec posuere vulputate arcu. Proin faucibus arcu quis ante. Curabitur at lacus ac velit ornare lobortis. ",
    imgUrl: "https://cdn11.bigcommerce.com/s-6p8lmnk/images/stencil/1280w/products/2236/28086/Omni-Golf-front__75195.1561043131.jpg?c=3"
  },
  {
    title: "Golf News",
    // body: "Phasellus ullamcorper ipsum rutrum nunc. Nullam quis ante. Etiam ultricies nisi vel augue. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.",
    imgUrl: "https://images.indianexpress.com/2020/12/golf.jpg"
  }
];

const carouselItems = [
  {
      title:"Item 1",
      text: "Text 1",
  },
  {
      title:"Item 2",
      text: "Text 2",
  },
  {
      title:"Item 3",
      text: "Text 3",
  },
  {
      title:"Item 4",
      text: "Text 4",
  },
  {
      title:"Item 5",
      text: "Text 5",
  },
];

const CarouselCardItem = ({ item, index }) => {
  return (
    <View style={styles.carouselCard} key={index}>
      <Text style={styles.carouselHeader}>{item.title}</Text>
      <Image
        style={styles.image}
        source={{ uri: item.imgUrl }}
        />
    </View>
  )
}

export function ProductCarousel() {
  return(
    <View style={styles.carouselContainer}>
      <Carousel
        data={data}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        itemHeight={ITEM_WIDTH / 4}
        useScrollView={true}
      />
    </View>
  )
}