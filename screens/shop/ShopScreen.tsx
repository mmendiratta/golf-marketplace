import * as React from 'react';
import { SearchBar } from 'react-native-elements';
import { styles } from '../../styles/stylesheet'
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';

const ShopScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query: React.SetStateAction<string>) => setSearchQuery(query);

  return (
    <SearchBar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
  );
};

export default ShopScreen;