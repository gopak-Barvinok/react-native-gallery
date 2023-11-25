import { SafeAreaView, ScrollView, } from 'react-native';
import Styles from '../styles/styles';

export default function CardList(props) {
    return (
      <ScrollView>
        <SafeAreaView style={Styles.blocks.background}>
          {props.children}
        </SafeAreaView>
      </ScrollView>
      );
}