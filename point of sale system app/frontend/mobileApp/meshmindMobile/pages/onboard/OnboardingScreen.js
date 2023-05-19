import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

const onboardingData = [
  {
    title: 'Welcome to MyApp',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: '',
  },
  {
    title: 'Explore our Features',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: '',
  },
  {
    title: 'Get Started',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: '',
  },
];

const OnboardingScreen = () => {
  const renderSlides = () => {
    return onboardingData.map((slide, index) => (
      <View key={index} style={styles.slideContainer}>
        <Image source={slide.image} style={styles.slideImage} />
        <Text style={styles.slideTitle}>{slide.title}</Text>
        <Text style={styles.slideDescription}>{slide.description}</Text>
      </View>
    ));
  };

  return (
    <View style={styles.container}>
      <View style={styles.slidesContainer}>{renderSlides()}</View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#FFFFFF',
//   },
//   slidesContainer: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingHorizontal: 40,
//     marginBottom: 40,
//   },
//   slideContainer: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   slideImage: {
//     width: 200,
//     height: 200,
//     marginBottom: 40,
//   },
//   slideTitle: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 16,
//     textAlign: 'center',
//   },
//   slideDescription: {
//     fontSize: 16,
//     textAlign: 'center',
//     color: '#666666',
//   },
//   button: {
//     backgroundColor: '#4285F4',
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//     borderRadius: 8,
//   },
//   buttonText: {
//     fontSize: 18,
//     color: '#FFFFFF',
//   },
// });

export default OnboardingScreen;
