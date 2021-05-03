import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const ResultsDetails = (props) =>{
    return(
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{uri: props.result.image_url}}
            />
            <Text style={styles.name}>{props.result.name}</Text>
            <View >
                <Text>Rating {props.result.rating}</Text>
                <Text style={styles.review}>{props.result.review_count} reviews</Text>
            </View>
        </View>
        
    )
}

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 250,
        borderRadius: 10
    },
    container: {
        margin: 20,
        width: 250,
    },
    name: {
        fontWeight: 'bold',
    },
    review: {
        alignSelf:'flex-end',
        position: 'absolute'
    }
})

export default ResultsDetails