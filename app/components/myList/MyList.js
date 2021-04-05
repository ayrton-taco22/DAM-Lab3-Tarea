import React, {Component} from 'react';
import {Text, Image, View, FlatList} from 'react-native';

const Item = ({ image,name,device,state})=>(
    <View style={styles.item}>
        <Image style={styles.image} source={{uri:image}}/>
        <View>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.device}>{device}</Text>
            <Text style={styles.state}>{state}</Text>
        </View>
    </View>
);

const renderItem = ({ item }) => (
    <Item image={item.image} name={item.name} device={device}
    state={item.state}/>
);

const MyList = () => {
    return (
        <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        />
    )
}