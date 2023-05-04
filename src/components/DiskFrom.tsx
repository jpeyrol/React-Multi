import React, { useState } from 'react';
import { TextInput, View, StyleSheet, Button } from 'react-native';
import { Disk } from "../modal/Disc";
import { DATA } from "../data/data";
import { SafeAreaView } from 'react-native-safe-area-context';


const DiskForm: React.FC = () => {
    const [image, setImage] = useState('');
    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [genre, setGenre] = useState('');
    const [tracks, setTracks] = useState<string[]>([]);
    const [year, setYear] = useState('');



    const handleAddDisk = () => {
        const newDisk = new Disk("https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Banana-Single.jpg/2324px-Banana-Single.jpg", title, artist, genre, tracks, year);
        DATA.push(newDisk);
        console.log(DATA);
    };

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    onChangeText={(e) => setImage(e)}
                    placeholder="image"
                    value={image}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={(e) => setTitle(e)}
                    placeholder="title"
                    value={title}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={(e) => setArtist(e)}
                    placeholder="artist"
                    value={artist}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={(e) => setGenre(e)}
                    placeholder="genre"
                    value={genre}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={(e) => setTracks(e.split(', '))}
                    placeholder="tracks"
                    value={String(tracks)}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={(e) => setYear(e)}
                    value={year}
                    placeholder="year"
                    keyboardType="numeric"
                />
                <Button onPress={() => handleAddDisk()} title="Add a new disk" color="#89375F" />
            </View>
        </SafeAreaView>

    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        marginBottom: 12,
        borderWidth: 0.5,
        padding: 10,
    },
    container: {
        marginHorizontal: 16,
        marginTop: 16,
    }
});

export default DiskForm;


// to be implemented in app