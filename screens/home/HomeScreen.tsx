import * as React from 'react';
import { styles } from '../../styles/stylesheet'
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import {ITEM_WIDTH, SLIDER_WIDTH} from '../../constants/Dimensions';
import Carousel from 'react-native-snap-carousel';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Image, Card } from 'react-native-elements';
import { ScrollView, TouchableHighlight } from 'react-native';
import { ProductCarousel } from '../../product/ProductCarousel';
import { TabBarIcon } from '../../navigation/BottomTabNavigator';


export default function HomeScreen() {
  const clubTypes: String[] = ["Putter", "Driver", "Wedges", "Iron Sets", "Single Irons"]
  return (
    <ScrollView>
      <Text style={styles.title}>Featured Items</Text>
      <ProductCarousel />
      <Text style={styles.title}>Popular Brands</Text>
      <Grid style={{ paddingLeft: 30, paddingVertical: 20}}>
        <Col style={{paddingRight: 5}}>
          <Image style={{height: 200, width: "100%", }} source={{uri: "https://i.pinimg.com/originals/1f/4b/e5/1f4be594111eb1c301891aeeeb485194.jpg" }} />
        </Col>
        <Col>
          <Row style={{paddingBottom: 5}}>
            <Image style={{ height: 100, width: 200}} source={{uri: "https://i.pinimg.com/originals/ee/c3/9d/eec39d87f6aa101524da6efaa5ef5a92.png"}} />
          </Row>
          <Row>
            <Image style={{ height: 100, width: 200}} source={{uri: "https://www.logolynx.com/images/logolynx/4b/4ba3f3f6e0d22e1ca570ed2cf3c709d8.jpeg"}} />
          </Row>
        </Col>
      </Grid>
      <View style={styles.container}>
      <Text style={styles.title}>Shop By Club</Text>
        {clubTypes.map((club: String) => {
          return (
            <View 
            // TODO: add styling for arrows 
            // style={{
            //   flexDirection: "row",
            //   justifyContent: "space-between",
            //   alignItems: "center"}}
            >
              <TouchableHighlight onPress={() => {
                alert('you clicked ' + club);
              }
              }>
                <Card containerStyle={{shadowColor: 'white', width: ITEM_WIDTH, 
                      minHeight: 30, paddingBottom: 20,  borderRadius: 10, 
                      flexDirection: "row"}}
                      > 
                  <Text style={styles.header}>{club}</Text>
                  <TabBarIcon name="arrow-forward-sharp" color="black"/>
                </Card>
              </TouchableHighlight>
            </View>
          )
        })}
      </View>
   </ScrollView>
  );
}

