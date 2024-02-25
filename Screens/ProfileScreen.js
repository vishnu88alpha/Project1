import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, ActivityIndicator, Alert } from 'react-native';
import { firebase } from '../FirebaseConfig'; // Import your Firebase configuration

const ProfileScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    // Fetch user profile data from Firestore
    const fetchUserProfile = async () => {
      try {
        const currentUser = firebase.auth().currentUser;
        if (currentUser) {
          // Query Firestore collection for user with matching email
          const userProfileRef = firebase.firestore().collection('users').where('email', '==', currentUser.email);
          const userProfileSnapshot = await userProfileRef.get();
          if (!userProfileSnapshot.empty) {
            // Assuming there's only one user with the given email
            setUserProfile(userProfileSnapshot.docs[0].data());
          } else {
            console.log('User profile not found.');
          }
        } else {
          console.log('No user signed in.');
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user profile:', error);
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  // Function to handle logout
  const handleLogout = async () => {
    try {
      // Display confirmation dialog
      Alert.alert(
        'Logout',
        'Are you sure you want to logout?',
        [
          { text: 'Cancel', style: 'cancel' },
          { text: 'Logout', onPress: async () => {
            await firebase.auth().signOut();
            // Navigate to the login screen after logout
            navigation.navigate('Login');
          }},
        ],
        { cancelable: false }
      );
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Profile</Text>
      {userProfile && (
        <View style={styles.userInfo}>
          <Text style={styles.userInfoText}>Student ID: {userProfile.ID}</Text>
          <Text style={styles.userInfoText}>Name: {userProfile.Name}</Text>
          <Text style={styles.userInfoText}>Email: {userProfile.email}</Text>
          <Text style={styles.userInfoText}>Position: {userProfile.Position}</Text>
          <Text style={styles.userInfoText}>Department: {userProfile.Department}</Text>
          {/* You can display more user information here */}
        </View>
      )}
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0a192f', // Background color
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#ccd6f6', // Text color
    textTransform: 'uppercase', // Uppercase text
  },
  userInfo: {
    marginBottom: 40,
    backgroundColor: '#1a365d', // Background color for user info section
    padding: 20, // Padding around user info section
    borderRadius: 20, // Border radius for user info section
    borderWidth: 2, // Border width
    borderColor: '#ccd6f6', // Border color
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  userInfoText: {
    fontSize: 18,
    marginBottom: 15,
    color: '#ccd6f6', // Text color for user info
    textAlign: 'center', // Align text in the center
  },
});
