import React, {useState, useEffect} from 'react'
import {View,  Text, StyleSheet, FlatList, Image, ScrollView} from 'react-native'

import yelp from '../api/yelp'

const ResultsShowScreen = (props) => {

    const [result, setResult] = useState(null)

    const id = props.navigation.getParam('id')
    const getResult = async (id) => {
        const res = await yelp.get(`/${id}`)
        setResult(res.data)
    }

    useEffect(() => {
        getResult(id)
    },[])

    if(!result){
        return null;
    }

    return(
        <View style={style.container}>
            <Text style={style.title}>{result.name}</Text>
            <View>
            </View>
            <FlatList
                data={result.photos}
                keyExtractor={(photo) => {return photo}}
                renderItem={({item}) => {
                    return(
                        <Image
                            style={style.image}
                            source={{uri: item}}
                        />
                    )
                }}
            />
        </View>
    )
}

const style = StyleSheet.create({
    image: {
        height: 200,
        borderRadius: 10,
        margin: 10,
        flex: 1
    },
    title: {
        padding: 10,
        alignSelf: 'center',
        fontSize: 24,
        fontWeight: 'bold'
    },
    container: {
        margin: 10
    }
})

export default ResultsShowScreen