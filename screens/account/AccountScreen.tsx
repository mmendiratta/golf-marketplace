import * as React from 'react';
import { styles } from '../../styles/stylesheet'
import EditScreenInfo from '../../components/EditScreenInfo';
import {
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

export default function AccountScreen() {
  return (
    <View style={styles.container}>
          <View style={styles.accountHeader}></View>
          <Image style={styles.accountAvatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
          <View style={{marginTop: 80}}>
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
                <Image style={styles.icon} source={{uri: 'https://img.icons8.com/color/70/000000/cottage.png'}}/>
              </View>
              <View style={styles.infoContent}>
                <Text style={styles.info}>Home</Text>
              </View>
            </View>

            <View style={styles.item}>
              <View style={styles.iconContent}>
                <Image style={styles.icon} source={{uri: 'https://img.icons8.com/color/70/000000/administrator-male.png'}}/>
              </View>
              <View style={styles.infoContent}>
                <Text style={styles.info}>Settings</Text>
              </View>
            </View>

            <View style={styles.item}>
              <View style={styles.iconContent}>
                <Image style={styles.icon} source={{uri: 'https://img.icons8.com/color/70/000000/filled-like.png'}}/>
              </View>
              <View style={styles.infoContent}>
                <Text style={styles.info}>News</Text>
              </View>
            </View>

            <View style={styles.item}>
              <View style={styles.iconContent}>
                <Image style={styles.icon} source={{uri: 'https://img.icons8.com/color/70/000000/facebook-like.png'}}/>
              </View>
              <View style={styles.infoContent}>
                <Text style={styles.info}>Shop</Text>
              </View>
            </View>
            </View>
        </View>
      </View>
  );
}