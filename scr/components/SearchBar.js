import React from 'react'
import {View, Text, TextInput, StyleSheet} from 'react-native'
import { useState } from 'react'
import {Feather} from '@expo/vector-icons'

const SearchBar = (props) => {

    return(
        <View style={styles.backgroundStyle}>
            <Feather name="search" style={styles.iconStyle} />
            <TextInput
                autoCapitalize='none'
                style={styles.searchBar}
                placeholder={props.placeholder}
                value={props.term}
                onChangeText={props.onChangeTerm}
                onEndEditing={props.onTermSubmit}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    searchBar: {
        padding: 10,
        flex: 1,
        fontSize: 15
    },
    backgroundStyle: {
        backgroundColor: '#c7c5c5',
        height: 50,
        borderRadius: 10,
        flexDirection: 'row',
        marginTop: 15,
        marginBottom:15
    },
    iconStyle: {
        fontSize: 35,
        padding: 5,
        alignSelf:'center'
    }

})

export default SearchBar