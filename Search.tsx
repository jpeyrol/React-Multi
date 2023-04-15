import React, { useState } from "react";
import { StyleSheet, TextInput, View, Text, FlatList, Button, StatusBar } from "react-native";


console.log("-------");

const Search: React.FC = () => {
    const [artist, setArtiste] = useState<string>();
    const [albumData, setAlbumData] = useState<any[]>([]);
    const [errorMsg, setErrorMsg] = useState<string>("");

    const Search = () => {
        fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${artist}&api_key=09ea7e86a3c38d53ed803603850a51b3&format=json&page=1`)
            .then(res => res.json())
            .then((result) => {
                console.log(result);
                setAlbumData(result.toptracks.track);
            })
            .catch((error) => {
                console.log(error);
                setErrorMsg(error.message);
            });
    };

    const Add = () => {
        console.log("Add");
        console.log(albumData);
    };

    return (
        <View style={styles.container}>
            <TextInput placeholder="Recherche un artiste" style={styles.input} onChangeText={(artist) => setArtiste(artist)} />
            <Button title="Rechercher" onPress={Search} color="#89375F" />
            <Text style={styles.error}>{errorMsg}</Text>
            <FlatList
                data={albumData}
                keyExtractor={(item, index) => item.name + index}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text>
                            {item.name}
                            {"\n"}
                            {item.playcount} écoutes
                        </Text>
                        <Button onPress={Add} title="+" color="#89375F" />
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        marginHorizontal: 16,
    },
    picker: {
        backgroundColor: "#fff",
    },
    input: {
        backgroundColor: "#fff",
        marginBottom: 20,
    },
    item: {
        backgroundColor: "#fff",
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 6,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    error: {
        color: "red",
    },
});

export default Search;
