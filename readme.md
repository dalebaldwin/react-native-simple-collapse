# React Native Simple Collapse
#### A simple React Native Collapse component

React Native Simple Collapsible is a super simple component for hiding and showing content using default React Animation and Easing. It takes a single prop `trigger`. The component will automatically measure the content inside of it and create a smooth hide/show animation.

A few useful bits

- Automatically updates if the content inside the container updates.
- Single prop to toggle open and close
- Animation Duration is 250ms and jumps to 500ms if the internal content is over 1024
- Easing is set to quad
- Updates for additional props including easing and animation timing coming soon.

### Install
Just do a simple npm install

`
npm install react-native-simple-collapse
`

If you don't want to add it to your packages list you can also just copy the contents of `collapsible.js` into your project and use as you please.

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
                    <Text onPress={() => this.setState({isOpen: !this.state.isOpen})}>{this.state.isOpen ? "close" : "open"}</Text>
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
