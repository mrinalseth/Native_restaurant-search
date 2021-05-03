import React from 'react'
import {View, 
    Text, 
    StyleSheet, 
    FlatList, 
    TouchableOpacity} from 'react-native'
import ResultsDetails from '../components/ResultsDetails'
import {withNavigation} from 'react-navigation'

const ResultsList = (props) => {
    return(
        <>
            <Text style={styles.title}>{props.title}</Text>
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={props.results}
                keyExtractor={(result) => {return result.id}}
                renderItem={({item}) => {
                    return(
                        <TouchableOpacity 
                        onPress={() => {
                            props.navigation.navigate('Result',{id:item.id})
                        }}>
                            <ResultsDetails result = {item}/>
                        </TouchableOpacity>
                    )
                }}
            />
        </>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})

export default withNavigation(ResultsList)