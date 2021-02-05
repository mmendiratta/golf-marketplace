import { StyleSheet } from 'react-native';
import { ITEM_WIDTH } from '../constants/Dimensions';

export const styles = StyleSheet.create({
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
  },
  header: {
    fontSize: 16,
    fontWeight: 'normal',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});