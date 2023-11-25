import Styles from '../styles/styles';
import { SafeAreaView, Text, Image, TouchableOpacity } from 'react-native';


export default function Item(props) {
    return (
        <SafeAreaView style={Styles.blocks.card}>
            <TouchableOpacity onPress={() => props.navigation.navigate('Fullscreen', {
                picture: props.urls
            })}>
                <Image style={Styles.image} source={props.urls} />
            </TouchableOpacity>
            <Text style={Styles.blocks.text}>{props.names}</Text>
        </SafeAreaView>
    )
}