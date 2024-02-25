import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, ScrollView, ImageBackground  } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../Components/color'; // Import the color palette

const HomeScreen = ({ navigation }) => {
  const buttons = [
    { icon: 'calendar', title: 'Events', screen: 'EventsScreen' },
    { icon: 'list-alt', title: 'Attendance', screen: 'AttendanceScreen' },
    { icon: 'trophy', title: 'Results', screen: 'ResultsScreen' },
    { icon: 'book', title: 'Library', screen: 'LibraryScreen' },
    { icon: 'user', title: 'Profile', screen: 'ProfileScreen' },
    { icon: 'flask', title: 'Assignment', screen: 'Assignment' },
    { icon: 'code', title: 'TimeTable', screen: 'TimeTableScreen' },
    { icon: 'bell', title: 'Announcements', screen: 'AnnouncementsScreen' },
    { icon: 'rocket', title: 'Trial', screen: 'TrialScreen' },
    { icon: 'rocket', title: 'TestScreen', screen: 'TestScreen' },
    { icon: 'rocket', title: 'Develop', screen: 'Develop' },
    { icon: 'question', title: 'PostedAssignments', screen: 'PostedAssignments' },
  ];

  // Sample timetable data
  const timetableData = [
    { day: 'Monday', class: 'Math', time: '09:00 AM-10:00 AM' },
    { day: 'Monday', class: 'physics', time: '10:00 AM-11:00 AM' },
    { day: 'Monday', class: 'C programming', time: '11:00 AM-12 pM' },
    { day: 'Monday', class: 'Python', time: '1:00 PM- 2:00 PM' },
    { day: 'Monday', class: 'Science', time: '2:00 PM-3:00 PM' },
    { day: 'Monday', class: 'chemistry', time: '3:00 PM-4:00 PM' },

    { day: 'Tuesday', class: 'Math', time: '09:00 AM-10:00 AM' },
    { day: 'Tuesday', class: 'physics', time: '10:00 AM-11:00 AM' },
    { day: 'Tuesday', class: 'chemistry', time: '11:00 AM-12 pM' },
    { day: 'Tuesday', class: 'It workshop', time: '1:00 PM- 2:00 PM' },
    { day: 'Tuesday', class: 'Java', time: '2:00 PM-3:00 PM' },
    { day: 'Tuesday', class: 'c programming', time: '3:00 PM-4:00 PM' },
    
    { day: 'Wednesday', class: 'chemistry', time: '09:00 AM-10:00 AM' },
    { day: 'Wednesday', class: 'Physics', time: '10:00 AM-11:00 AM' },
    { day: 'Wednesday', class: 'C programming', time: '11:00 AM-12 pM' },
    { day: 'Wednesday', class: 'Java', time: '1:00 PM- 2:00 PM' },
    { day: 'Wednesday', class: 'Sports', time: '2:00 PM-3:00 PM' },
    { day: 'Wednesday', class: 'Library', time: '3:00 PM-4:00 PM' },

    { day: 'Thursday', class: 'Python', time: '09:00 AM-10:00 AM' },
    { day: 'Thursday', class: 'Physics', time: '10:00 AM-11:00 AM' },
    { day: 'Thursday', class: 'C programming', time: '11:00 AM-12 pM' },
    { day: 'Thursday', class: 'Chemistry', time: '1:00 PM- 2:00 PM' },
    { day: 'Thursday', class: 'Sports', time: '2:00 PM-3:00 PM' },
    { day: 'Thursday', class: 'Library', time: '3:00 PM-4:00 PM' },

    { day: 'Friday', class: 'C programming', time: '09:00 AM-10:00 AM' },
    { day: 'Friday', class: 'Physics', time: '10:00 AM-11:00 AM' },
    { day: 'Friday', class: 'C programming', time: '11:00 AM-12 pM' },
    { day: 'Friday', class: 'Java', time: '1:00 PM- 2:00 PM' },
    { day: 'Friday', class: 'chemistry', time: '2:00 PM-3:00 PM' },
    { day: 'Friday', class: 'Library', time: '3:00 PM-4:00 PM' },

    { day: 'Saturday', class: 'chemistry', time: '09:00 AM-10:00 AM' },
    { day: 'Saturday', class: 'Physics', time: '10:00 AM-11:00 AM' },
    { day: 'Saturday', class: 'Library', time: '11:00 AM-12 pM' },
    { day: 'Saturday', class: 'Java', time: '1:00 PM- 2:00 PM' },
    { day: 'Saturday', class: 'C programing', time: '2:00 PM-3:00 PM' },
    { day: 'Saturday', class: 'beee', time: '3:00 PM-4:00 PM' },
    // Add more classes for other days
  ];

  // Get the current day
  const currentDate = new Date();
  const dayIndex = currentDate.getDay();

  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentDay = daysOfWeek[dayIndex];

  // Function to filter classes for today
  const filterClassesForToday = () => {
    return timetableData.filter((classItem) => classItem.day.toLowerCase() === currentDay.toLowerCase());
  };

  const todayClasses = filterClassesForToday();

  const handleButtonPress = (screen) => {
    navigation.navigate(screen);
  };

  const navigateToSettings = () => {
    navigation.navigate('SettingsScreen');
  };

  return (
    <View style={styles.container}>
      {/* Today's timetable section */}
      <ScrollView
        horizontal
        contentContainerStyle={styles.todayTimetableContainer}
        showsHorizontalScrollIndicator={false}
      >
        {todayClasses.map((classItem, index) => (
          <View key={index} style={styles.todayClassContainer}>
            <Text style={styles.todayClassText}>{classItem.class}</Text>
            <Text style={styles.todayClassText1}>{classItem.time}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Existing buttons section */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.gridContainer}>
          {buttons.map((button, index) => (
            <TouchableOpacity
              key={index}
              style={styles.button}
              onPress={() => handleButtonPress(button.screen)}
            >
              <Icon name={button.icon} size={30} color={colors.secondary} />
              <Text style={styles.buttonText}>{button.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Settings button */}
      <TouchableOpacity style={styles.settingsButton} onPress={navigateToSettings}>
        <Icon name="cogs" size={30} color={colors.secondary} />
        <Text style={styles.settingsButtonText}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: colors.primary, // Use primary color for background
  },
  scrollContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  button: {
    width: '48%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white', // Use background color for buttons
    borderRadius: 10,
    marginBottom: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  buttonText: {
    marginTop: 5,
    fontSize: 14,
    color: colors.buttonText, // Use button text color
  },
  todayTimetableContainer: {
    marginBottom: 20,
    flexDirection: 'row',
    paddingVertical: 1,
  },
  todayClassContainer: {
    marginRight: 5,
    backgroundColor: '#e0ffff', // Use card background color
    padding: 17,
    borderRadius: 15,
  },
  todayClassText: {
    fontSize: 16,
    color: colors.buttonText, // Use button text color
    marginBottom: 15,
    marginTop:-10,
  },
  todayClassText1: {
    fontSize: 16,
    color: colors.buttonText, // Use button text color
    marginBottom: 10,
    marginTop:-10,
  },
  settingsButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gold', // Use background color for settings button
    borderRadius: 10,
    padding: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    marginTop: 10,
  },
  settingsButtonText: {
    marginLeft: 10,
    fontSize: 16,
    color: colors.buttonText, // Use button text color
  },
});

export default HomeScreen;
