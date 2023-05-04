/* import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

interface Props {
    title: string,
    image: string,
    genre: string,
    artist: string,
    year?: string,
    track?: string,
}

export const DiskItem = (props: Props) => (
    <View style={{
        padding: 20,
        marginVertical: 8,
        flexDirection: "row"
    }}>
        <Image source={{ uri: props.image }} style={styles.image} />
        <View style={{ flexDirection: "column", marginStart: 5 }}>
            <Text style={styles.title}>{props.title}</Text>
            <Text>{props.genre}</Text>
            <Text>{props.artist}</Text>
            <Text style={styles.year}>{props.year}</Text>
        </View>
    </View>
);

const styles = StyleSheet.create({
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

}); */