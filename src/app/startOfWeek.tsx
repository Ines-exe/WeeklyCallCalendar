import { Alert, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function WelcomeScreen() {
  const handleSubmit = () => {
    Alert.alert('WORDSSSSSSSSSSSSSSS');
  };

  //date handling
  const today = new Date(); 
  const monday = new Date(today); 
  const day = today.getDay();

  const difference = day === 0 ? -6 : 1 - day;
  monday.setDate(today.getDate() + difference);

  const weekDays = Array.from( {length: 7}, (_, i) => {
    const date = new Date(monday);
    date.setDate(monday.getDate()+ i);
    return date;
  });

  const firstDay = weekDays[0];
  const lastDay = weekDays[6];

  const month = lastDay.toLocaleDateString('en-GB', {month: 'long'});
  const year = lastDay.getFullYear();
  const weekTitle = `${firstDay.getDate()}-${lastDay.getDate()} ${month}`;

  const deadline = new Date(monday);

  deadline.setDate(monday.getDate() + 2);
  deadline.setHours(20,0,0,0);

  const deadlineDay = deadline.toLocaleDateString('en-GB', {day: 'numeric', month: 'short'});
  const deadlineTime = deadline.toLocaleDateString('en-GB', {hour: 'numeric', minute: '2-digit', hour12: true});

  return (
    <View style={styles.container}>
      <Text style = {styles.smallText}>WEEKLY CATCH-UP</Text>
      <Text style = {styles.heading}>Make time for your people.</Text>

      <Text style = {styles.text}>Pick when you're free this week.{'\n'}We'll find a time that works for everyone.</Text>

      <Text style = {styles.heading2}>{weekTitle}</Text>
      <Text>THIS WEEK · {year}</Text>

      
      {/* Choosing date availability */}
      <View style={styles.daysRows}>
        {weekDays.map((date) =>
            <View style={styles.dayBox} key={date.toISOString()}>
                <Text>{date.toLocaleDateString('en-GB', { weekday: 'short'})}</Text>

                <Text style={styles.dayNumber}>{date.getDate()}</Text>
            </View>
        )}
      </View>

      <View style={styles.deadlineBox}>
        <Text style={styles.deadlineTitle}>Submit by Wednesday</Text>
        <Text style={styles.deadlineText}>{deadlineDay}, {deadlineTime}</Text>
      </View>

      <Text style = {styles.smallerHeading}>Your availability stays private.</Text>
      <Text style = {styles.text}>Only the final call time is shared.{'\n'}No group chat or back-and-forth needed.</Text>

      <SafeAreaView style = {styles.inputContainer}>
        <Pressable style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Choose availability</Text>
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
    alignItems: 'flex-start',
    gap: 10,
    paddingHorizontal: 20
  },
  text: {
    color: 'black',
    textAlign: 'left',
    fontSize: 15,
  },

  smallText: {
    color: 'black',
    textAlign: 'left',
    fontSize: 13,
    marginTop: 20,
    marginRight: 20
  },

  heading: {
    textAlign: 'left',
    fontSize: 35,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 10,
  },

  heading2: {
    textAlign: 'left',
    fontWeight: 'bold',
    color: 'black',
    fontSize: 20,
    marginTop: 30,

  },

  smallerHeading: {
    textAlign: 'left',
    fontWeight: 'bold',
    color: 'black',
    fontSize: 16,
    marginRight: 10
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
  },

  daysRows: {
    flexDirection: 'row',
    gap: 5,
    width: '90%',
  },

  dayBox: {
    flex: 1, 
    borderWidth: 1, 
    borderColor: '#DDDDDD',
    borderRadius: 12,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  
  dayNumber: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 8
  },

  deadlineBox: {
    backgroundColor: '#F2F2F2',
    padding: 16, 
    borderRadius: 14,
    width: '90%'
  },

  deadlineTitle: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 16,
    textAlign: 'left'
  },

  deadlineText: {
    color: 'black',
    fontSize: 13,
    textAlign: 'left'
  },

});