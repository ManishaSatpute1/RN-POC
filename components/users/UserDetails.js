import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

export default class UserDetails extends Component {
    constructor(props){
        super(props);
    }

    static navigationOptions =  ({ navigation }) => {
        const { params } = navigation.state;
        return {
            title: params ? params.userDetails.name + ' ' + 'Details' : 'Detail View'
            }
    };


    render() {
        /*  Read the params from the navigation state */
        const { params } = this.props.navigation.state;
        const name = params ? params.userDetails.name : null;
        const email = params ? params.userDetails.email : null;
        const street = params ? params.userDetails.address.street  : null;
        const city = params ? params.userDetails.address.city  : null;
        const zipcode = params ? params.userDetails.address.zipcode  : null;
        const phone = params ? params.userDetails.phone : null;
        const website = params ? params.userDetails.website : null;
        const company = params ? params.userDetails.company.name : null;

        return (
            <View style={styles.container}>
                <View styles={styles.userDetailsWrapper}>
                    <Text style={styles.labelText}>
                       User Name:  {name}
                    </Text>
                    <Text style={styles.labelText}>
                       Email:  {email}
                    </Text>
                    <Text style={styles.labelText}>
                        Address:  {street} , {city}, {zipcode }
                    </Text>
                    <Text style={styles.labelText}>
                        Phone:  {phone}
                    </Text>
                    <Text style={styles.labelText}>
                       Website:  {website}
                    </Text>
                    <Text style={styles.labelText}>
                        Company:  {company}
                    </Text>
                </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: '#581845',
        paddingTop: 20,
        paddingLeft: 20
    },
    labelText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    },
    userDetailsWrapper: {
        flex: 2,
        justifyContent: 'flex-start',
        color: '#fff'
    },
    buttonContainer: {
        flex: 1,
        alignItems: 'flex-end'
    }
});