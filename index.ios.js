'use strict';

import React, { AppRegistry, StyleSheet, View, Animated, Component, PanResponder, Image, } from 'react-native';
import ReactART, { Surface, Group, Shape, Text, Transform, } from 'ReactNativeART';
import clamp from 'clamp';

const { createAnimatedComponent } = Animated;
const BigNumber = 999999;

class Flix extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
    }
  }

  componentDidMount() {
    this._animateEntrance();
  }

  _animateEntrance() {
    requestAnimationFrame(() => {
      this.setState({value: this.state.value + 15});
      if (this.state.value <= 700) {
        requestAnimationFrame(this._animateEntrance.bind(this));
      }
    });
  }


  render() {
    return (
      <View style={styles.container}>
        <Surface width={320} height={600}>
          <Shape d="M1,1L200,200L202,200L150,200L300,500L350,550" stroke="black" strokeDash={[this.state.value,700]} strokeWidth={2} />
        </Surface>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

AppRegistry.registerComponent('Flix', () => Flix);
