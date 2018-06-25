import React, { Component } from 'react';
import {
    View,
    Button,
    CameraRoll,
    ScrollView,
    Image,
} from 'react-native';

export default class ImageBrowser extends Component {

    state = {
        modalVisible: false,
        photos: [],
        index: null
    }
    
    constructor(props) {
        super(props)
    }

    getPhotos = () => {
        console.log('in get Photos');
        CameraRoll.getPhotos({
          first: 20,
          assetType: 'All'
        })
        .then(r => this.setState({ photos: r.edges }))
    }


    render() {
        return (
            <View style={{display: 'flex', flexDirection: 'column' }}>
                <Button title='View Photos' onPress={() => { this.getPhotos() }}/>
                <ScrollView >
                    {this.state.photos.map((p, i) => {
                    return (
                        <Image
                        key={i}
                        style={{
                            width: 200,
                            height: 100,
                        }}
                        source={{ uri: p.node.image.uri }}
                        />
                    );
                })}
                </ScrollView>
            </View>
        );
    }
}