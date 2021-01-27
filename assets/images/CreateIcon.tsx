import {View, Image} from 'react-native';

const CreateIcon = (image: any) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Image
        source={image}
        style={{
          width: 40,
          height: 40,
          borderRadius: 40 / 2,
          marginLeft: 15,
        }}
      />
    </View>
  );
};

export default CreateIcon;