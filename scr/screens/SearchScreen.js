import React, {useState} from 'react'
import {View, Text, StyleSheet, ScrollView} from 'react-native'
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList'

import SearchBar from '../components/SearchBar'

const SearchScreen = () => {

    const [term, setTerm] = useState("")
    const [searchApi, results, error] = useResults()
    
    const filterByPrice = (price) => {
        return results.filter(result => {
            return result.price === price
        })
    }

    return(
        <View style={styles.main}>
            <SearchBar 
                placeholder='Search'
                term={term}
                onChangeTerm={(e) => setTerm(e)}
                onTermSubmit={() => searchApi(term)}
            />
            <ScrollView>
            <ResultsList
                results={filterByPrice('$')} 
                title='Cost Effective' />
            <ResultsList
                results={filterByPrice('$$')} 
                title='Bit Pricier' />
            </ScrollView>
            <Text>{error}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        margin: 10
    }
});

export default SearchScreen