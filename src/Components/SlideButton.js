import { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, PanResponder, Animated ,Image} from 'react-native';

const SlideButton = () => {
    const slideRef = useRef(null);
    const [slideWidth, setSlideWidth] = useState(0);
    const [slidePosition, setSlidePosition] = useState(new Animated.Value(0));
    const [panResponder, setPanResponder] = useState(PanResponder.create({}));
  
    useEffect(() => {
      setPanResponder(
        PanResponder.create({
          onMoveShouldSetPanResponder: (evt, gestureState) => {
            return Math.abs(gestureState.dx) > 5;
          },
          onPanResponderMove: (evt, gestureState) => {
            let newPosition = gestureState.dx;
            if (newPosition < 0) {
              newPosition = 0;
            } else if (newPosition > slideWidth) {
              newPosition = slideWidth;
            }
            setSlidePosition(new Animated.Value(newPosition));
          },
          onPanResponderRelease: (evt, gestureState) => {
            if (gestureState.dx >= slideWidth / 4) {
              // Perform the desired action
            }
            setSlidePosition(new Animated.Value(0));
          },
        })
      );
    }, [slideWidth]);
  
    const handleSlideMeasure = (event) => {
      setSlideWidth(event.nativeEvent.layout.width);
    };
  
    const slideStyles = {
      transform: [{ translateX: slidePosition }],
    };
  
    const iconStyles = {
      transform: [{ translateX: slidePosition }],
    };
  
    return (
      <View style={styles.container}>
        <Text>
            sfskjfsk
        </Text>
        <Animated.View
          style={[styles.slideButton, slideStyles]}
          {...panResponder.panHandlers}
          onLayout={handleSlideMeasure}
          ref={slideRef}
        >
          
          <Animated.Image
            source={{
                uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
              }}
            style={[styles.slideIcon, iconStyles]}
          />
          <Text style={styles.slideText}>Slide to Continue</Text>
        </Animated.View>
      </View>
    );
  };

  export default SlideButton;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    slideButton: {
      width: 200,
      height: 50,
      backgroundColor: 'green',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
    },
    slideText: {
      color: 'white',
      fontWeight: 'bold',
      marginRight: 10,
    },
    slideIcon: {
      width: 30,
      height: 30,
      zIndex:1
    },
  });