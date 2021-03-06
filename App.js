/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { useState } from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
 } from 'react-native';
 
 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
 
 import RegistrationPage from './RegistrationPage';
 import UserListPage from './UserListPage';
 
 const App = () => {
   const isDarkMode = useColorScheme() === 'dark';
 
   const backgroundStyle = {
     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
   };
 
   const [page, setPage] = useState('Registration')
 
   if (page == 'Registration') {
     return (
       <View>
         <RegistrationPage changePageHandler={()=> setPage('UserList')}/>
       </View>
     )
   } else if (page == 'UserList'){
     return (
       <View>
         <UserListPage/>
       </View>
     )
   }
 };
 
 export default App;
 