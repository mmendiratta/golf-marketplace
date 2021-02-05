import { View, Text, Image } from "react-native";
import { styles } from "../styles/stylesheet";
import Carousel from "react-native-snap-carousel";
import { SLIDER_WIDTH, ITEM_WIDTH } from "../constants/Dimensions";

const data = [
  {
    title: "Aenean leo",
    body: "Ut tincidunt tincidunt erat. Sed cursus turpis vitae tortor. Quisque malesuada placerat nisl. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
    imgUrl: "https://picsum.photos/id/11/200/300"
  },
  {
    title: "In turpis",
    body: "Aenean ut eros et nisl sagittis vestibulum. Donec posuere vulputate arcu. Proin faucibus arcu quis ante. Curabitur at lacus ac velit ornare lobortis. ",
    imgUrl: "https://picsum.photos/id/10/200/300"
  },
  {
    title: "Lorem Ipsum",
    body: "Phasellus ullamcorper ipsum rutrum nunc. Nullam quis ante. Etiam ultricies nisi vel augue. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.",
    imgUrl: "https://picsum.photos/id/12/200/300"
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
      <Text>{item.text}</Text>
      <Image
        source={{ uri: item.imgUrl }}
        />
    </View>
  )
}

export const ProductCarousel: React.FC = () => {
  return(
    <View style={styles.carouselContainer}>
      <Carousel
        data={carouselItems}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        itemHeight={ITEM_WIDTH / 4}
        useScrollView={true}
      />
    </View>
  )
}