import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Title } from 'react-native-paper';
import { getNewsMoviesApi } from '../api/movies';
import CarouselVertical from '../components/CarouselVertical';

export default function Home() {

    const [newMovies, setNewMovies] = useState(null);

    console.log(newMovies);

    useEffect(() => {
        getNewsMoviesApi().then(response => {
            setNewMovies(response.results);
        });
    }, []);

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {newMovies && (
                <View style={styles.news}>
                    <Title style={styles.newsTitle}>Nuevas Películas</Title>
                    <CarouselVertical data={newMovies} />
                </View>
            )}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    news: {
        marginVertical: 10,
    },

    newsTitle: {
        marginBottom: 15,
        marginHorizontal: 20,
        fontWeight: 'bold',
        fontSize: 22,
    },
});
