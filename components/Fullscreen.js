import { Image, SafeAreaView } from 'react-native';
import Styles from '../styles/styles';

export default function Fullscreen({route}) {
    const {picture} = route.params
    return (
        <SafeAreaView style={Styles.blocks.background}>
            <Image style={Styles.bigImage} source={picture}/>
        </SafeAreaView>
    )
}