import Styles from '../styles/styles';
import { useState, useEffect } from 'react'
// import Client from 'react-native-config'
import { SafeAreaView, FlatList } from 'react-native';
import Item from './Item';

const requestURL = `https://api.unsplash.com/photos/random?client_id=nacf_mpPtZsWYBrYtZWx9CSMY33giWl20EBxbySedpU&count=10`


export default function Card(props) {
    const [data, setData] = useState()

    useEffect(() => {
        dataHandler();
    }, [])

    const dataHandler = async () => {
        const response = await fetch(requestURL)
        const answer = await response.json()
        setData(answer)
    }

    return (
        <SafeAreaView>
                <FlatList
                data={data}
                keyExtractor={item => item.user.id}
                renderItem={({item}) => <Item urls={item.urls.small} names={item.user.name} navigation={props.nav}/>}
                />
        </SafeAreaView>
    );
}