import React, { useState } from 'react';
import { DATA } from '../data/data';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Image,
    FlatList,
    ScrollView
} from 'react-native';
import { Picker } from '@react-native-community/picker';
import { Disk } from '../modal/Disc';

const Section: React.FC = () => {
    const [sortedData, setSortedData] = useState(DATA);
    const [sortBy, setSortBy] = useState('year');

    const sortData = (sortBy: string) => {
        let sortedArray: Disk[] = [...DATA];
        if (sortBy === 'year') {
            sortedArray.sort((a, b) => Number(a.year) - Number(b.year));
        } else if (sortBy === 'genre') {
            sortedArray.sort((a, b) => (a.genre < b.genre ? -1 : 1));
        } else if (sortBy === 'artist') {
            sortedArray.sort((a, b) => (a.artist < b.artist ? -1 : 1));
        }
        setSortedData(sortedArray);
    };

    const renderItem = ({ item }: { item: Disk }) => (
        <View style={styles.itemContainer}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={{ flexDirection: 'column', marginStart: 5 }}>
                <Text style={styles.title}>{item.title}</Text>
                <Text>{item.genre}</Text>
                <Text>{item.artist}</Text>
                <Text style={styles.year}>{item.year}</Text>
            </View>
        </View>
    );
    return (
        <SafeAreaView>
            <View style={styles.sectionContainer}>

                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.sectionTitle}>Sort by:</Text>
                    <Picker
                        selectedValue={sortBy}
                        style={{ height: 50, width: 200 }}
                        onValueChange={(itemValue) => {
                            setSortBy(itemValue.toString());
                            sortData(itemValue.toString());
                        }}
                    >
                        <Picker.Item label="Year" value="year" />
                        <Picker.Item label="Genre" value="genre" />
                        <Picker.Item label="Artist" value="artist" />
                    </Picker>
                </View>
                <ScrollView horizontal={false}>
                    <ScrollView horizontal={true} contentContainerStyle={{ width: '100%', height: '100%' }}>
                        <FlatList nestedScrollEnabled={true}
                            horizontal={false}
                            data={sortedData}
                            renderItem={renderItem}
                        />
                    </ScrollView>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    itemContainer: {
        padding: 20,
        marginVertical: 8,
        flexDirection: 'row',
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
        marginBottom: 86,
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