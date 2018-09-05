import React from 'react'
import { View, Animated, Easing } from 'react-native'

class collapsible extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            heightAnim: new Animated.Value(0),
            height: 0
        }
    }

    openAnimation() {
        let duration = 250

        if (this.state.height > 1024) {
            duration = 500
        }

        Animated.timing(
            this.state.heightAnim,
            {
                toValue: this.state.height,
                duration: duration,
                easing: Easing.quad
            }
        ).start()
    }

    resizeAnimation() {
        Animated.timing(
            this.state.heightAnim,
            {
                toValue: this.state.height,
                duration: 50,
                easing: Easing.quad
            }
        ).start()
    }

    closeAnimation() {
        let duration = 250

        if (this.state.height > 1024) {
            duration = 500
        }

        Animated.timing(
            this.state.heightAnim,
            {
                toValue: 0,
                duration: duration,
                easing: Easing.quad
            }
        ).start()
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.trigger != prevProps.trigger && this.props.trigger) {
            this.openAnimation()
        } else if (this.props.trigger != prevProps.trigger && !this.props.trigger) {
            this.closeAnimation()
        }

        if (this.state.height != prevState.height && this.props.trigger) {
            this.resizeAnimation()
        }
    }

    render() {
        return (
            <View style={Style.Container}>
                <Animated.View style={{...Style.AnimatedContainer, height: this.state.heightAnim}}>
                    <View style={Style.InternalContainer} onLayout={(event) => {this.setState({height: event.nativeEvent.layout.height})}}>
                        {this.props.children}
                    </View>
                </Animated.View>
            </View>
        )
    }
}

const Style = {
    Container: {
        flex: 1,
    },
    AnimatedContainer: {
        overflow: "hidden",
    },
    InternalContainer: {
        flex: 1,
        position: "absolute",
        left: 0,
        top: 0
    }
}

export default collapsible