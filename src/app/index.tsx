import { useRef } from 'react';
import { Alert, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function HomeScreen() {
  const textValue = useRef('');

  const handleSubmit = () => {
    Alert.alert('Submitted text:', textValue.current);
  };

  return (
    <View style={styles.container}>
      <Text style = {styles.heading}>Welcome to Call-endar!</Text>

      <Text style = {styles.smallerHeading}>Create an account</Text>
      <Text style = {styles.text}>Your calls are one click away</Text>

      <SafeAreaView style = {styles.inputContainer}>
        <TextInput style={styles.input} placeholder='email@domain.com' defaultValue='' 
        onChangeText={(text) => { textValue.current = text;}} />
        <Pressable style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Continue</Text>
        </Pressable>
      </SafeAreaView>

      <Text style = {styles.text}>or</Text>
      
      <SafeAreaView style = {styles.inputContainer}>
        <Pressable style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Continue with Google</Text>
        </Pressable>
      </SafeAreaView>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 10
  },
  text: {
    color: 'black',
    textAlign: 'center',
    fontSize: 16
  },

  heading: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 150,
    marginBottom: 70,
    padding: 20
  },

  smallerHeading: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 18,
    textAlign: 'center'
  },

  inputContainer: {
    width: '100%',
    paddingHorizontal: 24,
    gap: 20,
  },

  input: {
    marginTop: 10,
    height: 48, 
    width: '100%',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    paddingHorizontal: 12,
  },

  button: {
    backgroundColor: 'black',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center'
  },

  buttonText: {
    color: 'white',
    fontSize: 16
  }

});