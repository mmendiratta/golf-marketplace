import { StyleSheet } from 'react-native';
import { ITEM_WIDTH } from '../constants/Dimensions';

export const styles = StyleSheet.create({
  image: {
    width: ITEM_WIDTH,
    height: 300,
  },
carouselContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  carouselCard: {
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  carouselHeader: {
    color: "#222",
    fontSize: 28,
    fontWeight: "bold",
    paddingLeft: 20,
    paddingTop: 20
  },
  carouselBody: {
    color: "#222",
    fontSize: 18,
    paddingLeft: 20,
    paddingRight: 20
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    paddingLeft: 30
  },
  header: {
    fontSize: 16,
    fontWeight: 'normal',
    color: 'black'
  },
  separator: {
    marginVertical: 30,
    height: 3,
    width: '80%',
  },
  accountHeader:{
    backgroundColor: "#00BFFF",
    height:200,
  },
  accountAvatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    // marginBottom:10,
    alignSelf:'center',
    // position: 'absolute',
    // marginTop:130
  },
  accountContent: {
    flex: 1,
    alignItems: 'center',
    //padding:30,
  },
  accountName:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600"
  },
  accountInfo:{
    fontSize:16,
    color: "#33DAFF",
    marginTop:10
  },
  accountDescription:{
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'center'
  },
  accountButtonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#33DAFF",
  },
  userInfo:{
    fontSize:16,
    color:"#778899",
    fontWeight:'600',
  },
  item:{
    flexDirection : 'row',
  },
  infoContent:{
    flex:8,
    // alignItems:'flex-start',
    alignContent: 'center',
    paddingLeft:5,
    paddingTop:5,
  },
  iconContent:{
    flex:1,
    alignItems:'flex-end',
    paddingRight:5,
  },
  icon:{
    width:30,
    height:30,
    marginTop:20,
  },
  info:{
    fontSize:18,
    marginTop:20,
    color: "#FFFFFF",
  }
});