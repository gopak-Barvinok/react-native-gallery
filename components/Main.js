import CardList from './CardList';
import Card from './Card';

export default function Main({navigation}) {
    return (
          <CardList>
            <Card nav={navigation}/>
          </CardList>
      );
}