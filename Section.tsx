// un peu comme un css -> pour modifier le style des composants
import React from 'react';
import { DATA } from './data';

import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Image,
    FlatList,
    ScrollView
} from 'react-native';

interface Props {
    title: string,
    data: string[],
    image: string,
    genre: string,
    artist: string,
    year?: string,
    track?: string,
}


const Section = () => {
    return (
        <SafeAreaView>
            <View style={styles.sectionContainer}>
                <ScrollView horizontal={false}>
                    <ScrollView horizontal={true} contentContainerStyle={{ width: '100%', height: '100%' }}>
                        <FlatList nestedScrollEnabled={true}
                            horizontal={false}
                            data={DATA}
                            renderItem={({ item }) => <View style={{
                                padding: 20,
                                marginVertical: 8,
                                flexDirection: "row"

                            }}>

                                <Image source={{ uri: item.image }} style={styles.image} />
                                <View style={{ flexDirection: "column", marginStart: 5 }}>
                                    <Text style={styles.title}>{item.title}</Text>
                                    <Text>{item.genre}</Text>
                                    <Text>{item.artist}</Text>
                                    <Text style={styles.year}>{item.year}</Text>
                                </View>
                            </View>}
                        />
                    </ScrollView>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
    title: {
        fontSize: 23,
        fontWeight: 'bold',
    },
    artist: {
        fontSize: 18,
        fontWeight: 'normal',
    },
    image: {
        width: 70,
        height: 70,
        marginTop: 3,
        marginRight: 10,
    },
    year: {
        fontStyle: 'italic',
    }
});

export default Section;