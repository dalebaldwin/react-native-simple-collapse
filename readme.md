# React Native Simple Collapse
#### A simple React Native Collapse component

### Install
Just do a simple npm install
`
npm install react-native-simple-collapse
`

### Setting it up

Import into your project and then wrap anything you want to collapse under your collapse component.
To trigger the collapse send a bool value to the trigger prop.

```
import React from 'react'
import { View, Text } from 'react-native'
import Collapse from 'react-native-simple-collapse'

class Stuff extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            isOpen: false,
        }
    }

    render() {
        return (
            <View>
                <View style={{flex: 1, width: 200, backgroundColor: "#eee"}}>
                    <Text style={{marginTop: 50}} onPress={() => this.setState({isOpen: !this.state.isOpen})}>{this.state.isOpen ? "close" : "open"}</Text>
                    <Collapse trigger={this.state.isOpen}>
                        <Text>Text stuff</Text>
                        <Text>Text stuff</Text>
                        <Text>Text stuff</Text>
                        <Text>Text stuff</Text>
                        <Text>Text stuff</Text>
                        <Text>Text stuff</Text>
                        <Text>Text stuff</Text>
                        <Text>Text stuff</Text>
                        <Text>Text stuff</Text>
                        <Text>Text stuff</Text>
                        <Text>Text stuff</Text>
                        <Text>Text stuff</Text>
                        <Text>Text stuff</Text>
                        <Text>Text stuff</Text>
                    </Collapse>
                    </View>
            </View>
        )
    }
}

export default Stuff 
```