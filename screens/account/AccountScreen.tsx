import * as React from 'react';
import { styles } from '../../styles/stylesheet'
import EditScreenInfo from '../../components/EditScreenInfo';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';

export default function AccountScreen() {
  return (
    <View style={styles.container}>
          <View style={styles.accountHeader}></View>
          <Image style={styles.accountAvatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
          <View style={{marginTop: 30}}>
            <View style={styles.accountContent}>
              {/* <Text style={styles.accountName}>John Doe</Text>
              <Text style={styles.accountInfo}>Software Engineer</Text>
              <Text style={styles.accountDescription}>Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum electram expetendis, omittam deseruisse consequuntur ius an,</Text>
              
              <TouchableOpacity style={styles.accountButtonContainer}>
                <Text>Option 1</Text>  
              </TouchableOpacity>              
              <TouchableOpacity style={styles.accountButtonContainer}>
                <Text>Option 2</Text> 
              </TouchableOpacity> */}
                 <Text style={styles.accountName}>John Doe </Text>
                <Text style={styles.userInfo}>jhonnydoe@mail.com </Text>
                <Text style={styles.userInfo}>Florida </Text>
               <View style={styles.item}>
              <View style={styles.iconContent}>
                <Image style={styles.icon} source={{uri: 'https://img.icons8.com/color/70/000000/information.png'}}/>
              </View>
              <View style={styles.infoContent}>
               <TouchableHighlight onPress={() => {
                  alert('you clicked Account Info');
                }}>
                  <Text style={styles.info}>Account Info</Text>
                </TouchableHighlight>
              </View>
            </View>

            <View style={styles.item}>
              <View style={styles.iconContent}>
                <Image style={styles.icon} source={{uri: 'https://img.icons8.com/color/70/000000/settings.png'}}/>
              </View>
              <View style={styles.infoContent}>
              <TouchableHighlight onPress={() => {
                  alert('you clicked SETTINGS');
                }}>
                  <Text style={styles.info}>Settings</Text>
                </TouchableHighlight>
              </View>
            </View>

            <View style={styles.item}>
              <View style={styles.iconContent}>
                <Image style={styles.icon} source={{uri: 'https://img.icons8.com/color/70/000000/lock.png'}}/>
              </View>
              <View style={styles.infoContent}>
              <TouchableHighlight onPress={() => {
                  alert('you clicked SECURITY');
                }}>
                  <Text style={styles.info}>Security</Text>
                </TouchableHighlight>
              </View>
            </View>

            <View style={styles.item}>
              <View style={styles.iconContent}>
                <Image style={styles.icon} source={{uri: 'https://img.icons8.com/color/70/000000/shopping-cart.png'}}/>
              </View>
              <View style={styles.infoContent}>
              <TouchableHighlight onPress={() => {
                  alert('you clicked SHOP');
                }}>
                  <Text style={styles.info}>Shopping History</Text>
                </TouchableHighlight>
              </View>
            </View>
            </View>
        </View>
      </View>
  );
}