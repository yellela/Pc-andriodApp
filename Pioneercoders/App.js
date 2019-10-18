// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow
//  */

// import React from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,
// } from 'react-native';

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// const App: () => React$Node = () => {
//   return (
//     <>
//       <StatusBar barStyle="dark-content" />
//       <SafeAreaView>
//         <ScrollView
//           contentInsetAdjustmentBehavior="automatic"
//           style={styles.scrollView}>
//           <Header />
//           {global.HermesInternal == null ? null : (
//             <View style={styles.engine}>
//               <Text style={styles.footer}>Engine: Hermes</Text>
//             </View>
//           )}
//           <View style={styles.body}>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Step One</Text>
//               <Text style={styles.sectionDescription}>
//                 Edit <Text style={styles.highlight}>App.js</Text> to change this
//                 screen and then come back to see your edits.
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>See Your Changes</Text>
//               <Text style={styles.sectionDescription}>
//                 <ReloadInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Debug</Text>
//               <Text style={styles.sectionDescription}>
//                 <DebugInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Learn More</Text>
//               <Text style={styles.sectionDescription}>
//                 Read the docs to discover what to do next:
//               </Text>
//             </View>
//             <LearnMoreLinks />
//           </View>
//         </ScrollView>
//       </SafeAreaView>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
//   engine: {
//     position: 'absolute',
//     right: 0,
//   },
//   body: {
//     backgroundColor: Colors.white,
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: Colors.black,
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//     color: Colors.dark,
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   footer: {
//     color: Colors.dark,
//     fontSize: 12,
//     fontWeight: '600',
//     padding: 4,
//     paddingRight: 12,
//     textAlign: 'right',
//   },
// });

// export default App;



// import React, { Component } from 'react';
// import { 
//   StyleSheet,
//   Dimensions, 
//   Platform, 
//   View, 
//   Image, 
//   Text, 
//   TextInput, 
//   TouchableOpacity, 
//   Alert, 
//   AsyncStorage, 
//   ScrollView,
//   Picker
// } from 'react-native';
// import {WebView} from 'react-native';
// import { DrawerNavigator } from 'react-navigation';
// import { StackNavigator } from 'react-navigation';

// class HamburgerIcon extends Component {
//   toggleDrawer = () => {
//     console.log(this.props.navigationProps);
//     this.props.navigationProps.toggleDrawer();
//   }
//   render() {
//     return (
//       <View style={{ flexDirection: 'row' }}>
//         <TouchableOpacity onPress={this.toggleDrawer.bind(this)} >
//           <Image
//             source={require('./humberg.png')}
//             style={{ width: 50, height: 50, marginLeft: 10 }}
//           />
//         </TouchableOpacity>
//       </View>
//     );
//   }
// }
 
// class Custom_Side_Menu extends Component {
//   render() {
//     return (
//       <View style={styles.sideMenuContainer}>
//         <View style={{backgroundColor: '#0d7cdd',height:100,width:'100%'}}>
//          <Image source={{ uri: '#url' }}
//           style={styles.sideMenuProfileIcon} />
//           <Text style={{flexDirection: 'row', marginLeft:90, marginTop: -45,fontSize:25,color:'#fff'}}> USER NAME </Text>
//         </View>

//         <View style={{ width: '100%', height: 1, backgroundColor: '#e2e2e2'}} />
 
//         <View style={{width: '100%'}}>
 
//             <View style={{flexDirection: 'row', alignItems: 'center',height:80}}>
//               <Text style={{flexDirection: 'row', marginLeft:90,fontSize:25,color:'#000'}}> MENU ITEM 1 </Text>
//             </View>
//             <View style={{ width: '85%', height: 1, backgroundColor: '#e2e2e2',marginLeft:20,marginRight:20}} />
 
//             <View style={{flexDirection: 'row', alignItems: 'center', height:80}}>
//               <Text style={{flexDirection: 'row', marginLeft:90,fontSize:25,color:'#000'}}> MENU ITEM 2 </Text>
//             </View>
//             <View style={{ width: '85%', height: 1, backgroundColor: '#e2e2e2',marginLeft:20,marginRight:20}} />
 
//             <View style={{flexDirection: 'row', alignItems: 'center', height:80}}>
//               <Text style={{flexDirection: 'row', marginLeft:90,fontSize:25,color:'#000'}}> MENU ITEM 3 </Text>
//             </View>
//             <View style={{ width: '85%', height: 1, backgroundColor: '#e2e2e2',marginLeft:20,marginRight:20}} />
//             <View style={{flexDirection: 'row', alignItems: 'center', height:80}}>
 
//               <Text style={{flexDirection: 'row', marginLeft:90,fontSize:25,color:'#000'}}> MENU ITEM 4</Text>
//             </View>
//         </View>
//       </View>
//     );
//   }
// }
 
// class MainActivity extends Component {
//   constructor(){
//     super();
//     this.state={
  
//       name : '',
//       date : '',
//       amount : '',
 
//       getName : '',
//       getDate : '',
//       getAmount : '',

//       PickerValueHolder : ''
//     }
//   }
 
//   // setValueLocally=()=>{
//   //   AsyncStorage.setItem('Key_27', this.state.name);
//   //   AsyncStorage.setItem('Key_28', this.state.date);
//   //   AsyncStorage.setItem('Key_29', this.state.amount);
 
//   //   Alert.alert("Value Stored Successfully.")
//   //   this.props.navigation.navigate('Second');
//   // }
 
//   getValueLocally=()=>{
//     AsyncStorage.getItem('Key_27').then((value) => this.setState({ getName : value }))
//     AsyncStorage.getItem('Key_28').then((value) => this.setState({ getDate : value }))
//     AsyncStorage.getItem('Key_29').then((value) => this.setState({ getAmount : value }))
//   }
//   CheckValidation=()=>{
 
//     const { name }  = this.state ;
//     const { date }  = this.state ;
//     const { amount }  = this.state ;
 
//     if(name == '' || date == '' || amount == '')
//     {
//       Alert.alert("Please Enter All the Values.");
//     }
//     if(isNaN(this.state.amount))
//     {
//       Alert.alert("Amount must be a number");
//     } 
//     if(name != '' && date != '' && amount != ''  && isNaN(this.state.amount)==false)
//     {
//       this.props.navigation.navigate('Second');
//     }
//   }
//   GetSelectedPickerItem=()=>{
//     Alert.alert(this.state.PickerValueHolder);
//   }
  
//   render() {
//     return (
//     <View style={styles.MainContainer1}>
//       <Text>Mannu</Text>
//       <WebView
//         source={{uri: 'https://github.com/facebook/react-native'}}
//         style={{marginTop: 20}}
//       />
//       {/* <View style={{flexDirection: 'row', width:'80%',height:40,borderRadius:20,marginLeft: '10%',marginTop:20,backgroundColor:'gray'}}>
//         <View style={{width:'50%',height:40,borderRadius:20,backgroundColor:'blue',}}>
//           <TouchableOpacity onPress={this.getValueLocally} activeOpacity={0.7} >
//             <Text style={{fontSize:15,color:'#fff', textAlign:'center',marginTop:10}}> STEP1 </Text>
//           </TouchableOpacity>
//         </View>

//         <View style={{width:'50%',height:40,borderRadius:20,}}>
//           <TouchableOpacity onPress={this.getValueLocally} activeOpacity={0.7}>
//             <Text style={{fontSize:15,color:'#fff', textAlign:'center',marginTop:10}}> STEP2 </Text>
//           </TouchableOpacity>
//         </View> 
//       </View>

//       <Text style={{flexDirection: 'row', textAlign: 'center', fontSize:25, color: 'black',marginTop:40,}}>CREATE A DEAL</Text>
 
//       <Text style={{textAlign:'left',fontSize:20, color: 'black',marginTop:20}}>NAME *</Text>
//       <TextInput     
//         placeholder="Enter Name"
//         onChangeText={ data => this.setState({name : data}) }
//         underlineColorAndroid='transparent'
//         style={styles.TextInputStyle}
//       />
//       <Text style={{textAlign:'left',fontSize:20, color: 'black',marginTop:20}}>DATE *</Text>
//       <View style={{borderWidth: 1,height:40,borderRadius:10,borderColor:'gray',justifyContent:'center',marginTop:15}}>
//         <Picker
//           selectedValue={this.state.date}
//           onValueChange={(itemValue, itemIndex) => this.setState({date: itemValue})} >
//             <Picker.Item label="" value="" />
//             <Picker.Item label="01/01/2018" value="01/01/2018" />
//             <Picker.Item label="02/01/2018" value="02/01/2018" />
//             <Picker.Item label="03/01/2018" value="03/01/2018" />
//             <Picker.Item label="04/01/2018" value="04/01/2018" />
//             <Picker.Item label="05/01/2018" value="05/01/2018" />
//             <Picker.Item label="06/01/2018" value="06/01/2018" />
//             <Picker.Item label="07/01/2018" value="07/01/2018" />
//             <Picker.Item label="08/01/2018" value="08/01/2018" />
//             <Picker.Item label="09/01/2018" value="09/01/2018" />
//             <Picker.Item label="10/01/2018" value="10/01/2018" />
//             <Picker.Item label="1/01/2018" value="11/01/2018" />
//             <Picker.Item label="12/01/2018" value="12/01/2018" />
//         </Picker>
//       </View>

//       <Text style={{textAlign:'left',fontSize:20, color: 'black',marginTop:20}}>AMOUNT *</Text>
//       <TextInput
//         placeholder="Enter Amount"
//         onChangeText={ data => this.setState({amount : data}) }
//         underlineColorAndroid='transparent'
//         style={styles.TextInputStyle}
//         />
      
//       <TouchableOpacity onPress={this.CheckValidation} activeOpacity={0.7} style={styles.buttonNext} >
//         <Text style={styles.buttonTextNext}> Next </Text>
//       </TouchableOpacity> */}
//     </View>
//     );
//   }
// }

// class SecondActivity extends Component {
//   constructor(){
//     super();
//     this.state={
  
//       name : '',
//       date : '',
//       repaymentDate: '',
//       amount : '',
 
//       getName : '',
//       getDate : '',
//       getAmount : '',
//       getrepaymentDate: '',
//     }
//   }
 
//   getValueLocally=()=>{
//     AsyncStorage.getItem('Key_27').then((value) => this.setState({ getName : value }))
//     AsyncStorage.getItem('Key_28').then((value) => this.setState({ getDate : value }))
//     AsyncStorage.getItem('Key_29').then((value) => this.setState({ getAmount : value }))
//     AsyncStorage.getItem('Key_30').then((value) => this.setState({ getrepaymentDate : value }))
//     this.props.navigation.navigate('Third');
//   }
//   CheckValidation=()=>{
//     AsyncStorage.setItem('Key_27', this.state.name);
//     AsyncStorage.setItem('Key_28', this.state.date);
//     AsyncStorage.setItem('Key_29', this.state.amount);
//     AsyncStorage.setItem('Key_30', this.state.repaymentDate);
 
//     const { name }  = this.state ;
//     const { date }  = this.state ;
//     const { amount }  = this.state ;
//     const { repaymentDate }  = this.state ;
 
//     if(name == '' && date == '' && amount == '' && repaymentDate=='')
//     {
//       Alert.alert("Please Enter All the Values.");
//     }
//     if(isNaN(this.state.amount))
//     {
//       Alert.alert("Amount must be a number");
//     } 
//     if(name != '' && date != '' && amount != ''  && isNaN(this.state.amount)==false && repaymentDate!='')
//     {
//       //this.props.navigation.navigate('Second');
//       Alert.alert("Invoice Created Successfully");
//     }
//   }
//   render() {
//     return (
//       <View style={styles.MainContainer1}>
//         <View style={{flexDirection: 'row', width:'80%',height:40,borderRadius:20,marginLeft: '10%',marginTop:10,backgroundColor:'gray'}}>
//           <View style={{width:'50%',height:40,borderRadius:20,}}>
//             <TouchableOpacity onPress={this.getValueLocally} activeOpacity={0.7} >
//               <Text style={{fontSize:15,color:'#fff', textAlign:'center',marginTop:10}}> STEP1 </Text>
//             </TouchableOpacity>
//           </View>

//           <View style={{width:'50%',height:40,borderRadius:20,backgroundColor:'blue',}}>
//             <TouchableOpacity onPress={this.getValueLocally} activeOpacity={0.7}>
//               <Text style={{fontSize:15,color:'#fff', textAlign:'center',marginTop:10}}> STEP2 </Text>
//             </TouchableOpacity>
//           </View> 
//       </View>

//       <Text style={{flexDirection: 'row', textAlign: 'center', fontSize:20, color: 'black',marginTop:10}}>CREATE AN INVOICE</Text>
 
//       <Text style={{textAlign:'left',fontSize:15, color: 'black',marginTop:15,fontWeight:'600'}}>INVOICE NAME *</Text>
//       <TextInput
             
//              placeholder="Enter Invoice Name"
         
//              onChangeText={ data => this.setState({name : data}) }
 
//              underlineColorAndroid='transparent'
         
//              style={styles.TextInputStyle}
//            />
//       <Text style={{textAlign:'left',fontSize:15, color: 'black',marginTop:15,fontWeight:'600'}}>ISSUE DATE *</Text>
//         <View style={{borderWidth: 1,height:40,borderRadius:10,borderColor:'gray',justifyContent:'center',marginTop:15}}>
//            <Picker
//             selectedValue={this.state.date}
    
//             onValueChange={(itemValue, itemIndex) => this.setState({date: itemValue})} >
    
//             <Picker.Item label="" value="" />
//             <Picker.Item label="01/01/2018" value="01/01/2018" />
//             <Picker.Item label="02/01/2018" value="02/01/2018" />
//             <Picker.Item label="03/01/2018" value="03/01/2018" />
//             <Picker.Item label="04/01/2018" value="04/01/2018" />
//             <Picker.Item label="05/01/2018" value="05/01/2018" />
//             <Picker.Item label="06/01/2018" value="06/01/2018" />
//             <Picker.Item label="07/01/2018" value="07/01/2018" />
//             <Picker.Item label="08/01/2018" value="08/01/2018" />
//             <Picker.Item label="09/01/2018" value="09/01/2018" />
//             <Picker.Item label="10/01/2018" value="10/01/2018" />
//             <Picker.Item label="1/01/2018" value="11/01/2018" />
//             <Picker.Item label="12/01/2018" value="12/01/2018" />
 
//          </Picker>
//          </View>

//          <Text style={{textAlign:'left',fontSize:15, color: 'black',marginTop:15,fontWeight:'600'}}>REPAYMENT DATE *</Text>
//         <View style={{borderWidth: 1,height:40,borderRadius:10,borderColor:'gray',justifyContent:'center',marginTop:15}}>
//            <Picker
//             selectedValue={this.state.repaymentDate}
    
//             onValueChange={(itemValue, itemIndex) => this.setState({repaymentDate: itemValue})} >
    
//             <Picker.Item label="" value="" />
//             <Picker.Item label="01/01/2018" value="01/01/2018" />
//             <Picker.Item label="02/01/2018" value="02/01/2018" />
//             <Picker.Item label="03/01/2018" value="03/01/2018" />
//             <Picker.Item label="04/01/2018" value="04/01/2018" />
//             <Picker.Item label="05/01/2018" value="05/01/2018" />
//             <Picker.Item label="06/01/2018" value="06/01/2018" />
//             <Picker.Item label="07/01/2018" value="07/01/2018" />
//             <Picker.Item label="08/01/2018" value="08/01/2018" />
//             <Picker.Item label="09/01/2018" value="09/01/2018" />
//             <Picker.Item label="10/01/2018" value="10/01/2018" />
//             <Picker.Item label="1/01/2018" value="11/01/2018" />
//             <Picker.Item label="12/01/2018" value="12/01/2018" />
 
//          </Picker>
//          </View>
//         <Text style={{textAlign:'left',fontSize:15, color: 'black',marginTop:15,fontWeight:'600'}}>AMOUNT *</Text>
//          <TextInput  
//             placeholder="Enter Amount"
//             onChangeText={ data => this.setState({amount : data}) }
//             underlineColorAndroid='transparent'
//             style={styles.TextInputStyle}
//           />
      
//       <TouchableOpacity onPress={this.CheckValidation} activeOpacity={0.7} style={styles.buttonInvoice} >
//         <Text style={styles.buttonTextInvoice}> Submit </Text>
//       </TouchableOpacity>
 
//       <TouchableOpacity onPress={this.getValueLocally} activeOpacity={0.7} style={styles.buttonInvoice} >
//         <Text style={styles.buttonTextInvoice}> Previous </Text>
//       </TouchableOpacity>
 
//       <Text style={styles.text}> { this.state.getName } </Text>
//       <Text style={styles.text}> { this.state.getDate } </Text>
//       <Text style={styles.text}> { this.state.getAmount } </Text>
//       </View>
//     );
//   }
// }
 
// class ThirdActivity extends Component {
//   constructor(){
//     super();
//     this.state={
  
//       name : '',
//       date : '',
//       amount : '',
 
//       getName : '',
//       getDate : '',
//       getAmount : '',

//       PickerValueHolder : ''
//     }
//   }
 
//   getValueLocally=()=>{
//     AsyncStorage.getItem('Key_27').then((value) => this.setState({ getName : value }))
//     AsyncStorage.getItem('Key_28').then((value) => this.setState({ getDate : value }))
//     AsyncStorage.getItem('Key_29').then((value) => this.setState({ getAmount : value }))
//     AsyncStorage.getItem('Key_30').then((value) => this.setState({ getrepaymentDate : value }))
//   }
//   CheckValidation=()=>{
//     AsyncStorage.setItem('Key_27', this.state.name);
//     AsyncStorage.setItem('Key_28', this.state.date);
//     AsyncStorage.setItem('Key_29', this.state.amount);
//     AsyncStorage.setItem('Key_30', this.state.repaymentDate);
 
//     const { name }  = this.state ;
//     const { date }  = this.state ;
//     const { amount }  = this.state ;
 
//     if(name == '' || date == '' || amount == '')
//     {
//       Alert.alert("Please Enter All the Values.");
//     }
//     if(isNaN(this.state.amount))
//     {
//       Alert.alert("Amount must be a number");
//     } 
//     if(name != '' && date != '' && amount != ''  && isNaN(this.state.amount)==false)
//     {
//       this.props.navigation.navigate('Second');
//     }
//   }
//   GetSelectedPickerItem=()=>{
//     Alert.alert(this.state.PickerValueHolder);
//   }
 
//   render() {
//     return (
//     <ScrollView style={styles.MainContainer1}>
//       <View style={{flexDirection: 'row', width:'80%',height:40,borderRadius:20,marginLeft: '10%',marginTop:20,backgroundColor:'gray'}}>
        
//         <View style={{width:'50%',height:40,borderRadius:20,backgroundColor:'blue',}}>
//           <TouchableOpacity onPress={this.getValueLocally} activeOpacity={0.7} >
//             <Text style={{fontSize:15,color:'#fff', textAlign:'center',marginTop:10}}> STEP1 </Text>
//           </TouchableOpacity>
//         </View>

//         <View style={{width:'50%',height:40,borderRadius:20,}}>
//           <TouchableOpacity onPress={this.getValueLocally} activeOpacity={0.7}>
//             <Text style={{fontSize:15,color:'#fff', textAlign:'center',marginTop:10}}> STEP2 </Text>
//           </TouchableOpacity>
//         </View>
        
//       </View>
//       <TouchableOpacity onPress={this.getValueLocally} activeOpacity={0.7} style={styles.button} >
//          <Text style={styles.buttonText}> VALUES IN INVOICE FORM </Text>
//       </TouchableOpacity>
    
//       <Text style={styles.text}>ISSUE DATE: { this.state.getDate } </Text>
//       <Text style={styles.text}>REPAYMENT DATE { this.state.getrepaymentDate } </Text>
//       <Text style={styles.text}>AMOUNT: { this.state.getAmount } </Text>

//       <Text style={{flexDirection: 'row', textAlign: 'center', fontSize:25, color: 'black',marginTop:10,}}>CREATE A DEAL</Text>
 
//       <Text style={{textAlign:'left',fontSize:20, color: 'black',marginTop:20}}>NAME *</Text>
//       <TextInput 
//         placeholder="Enter Name"
//         onChangeText={ data => this.setState({name : data}) }
//         underlineColorAndroid='transparent'
//         style={styles.TextInputStyle}
//       />
//       <Text style={{textAlign:'left',fontSize:20, color: 'black',marginTop:20}}>DATE *</Text>
//       <View style={{borderWidth: 1,height:40,borderRadius:10,borderColor:'gray',justifyContent:'center',marginTop:15}}>
//         <Picker
//           selectedValue={this.state.date}
//           onValueChange={(itemValue, itemIndex) => this.setState({date: itemValue})} >
    
//           <Picker.Item label="" value="" />
//           <Picker.Item label="01/01/2018" value="01/01/2018" />
//           <Picker.Item label="02/01/2018" value="02/01/2018" />
//           <Picker.Item label="03/01/2018" value="03/01/2018" />
//           <Picker.Item label="04/01/2018" value="04/01/2018" />
//           <Picker.Item label="05/01/2018" value="05/01/2018" />
//           <Picker.Item label="06/01/2018" value="06/01/2018" />
//           <Picker.Item label="07/01/2018" value="07/01/2018" />
//           <Picker.Item label="08/01/2018" value="08/01/2018" />
//           <Picker.Item label="09/01/2018" value="09/01/2018" />
//           <Picker.Item label="10/01/2018" value="10/01/2018" />
//           <Picker.Item label="1/01/2018" value="11/01/2018" />
//           <Picker.Item label="12/01/2018" value="12/01/2018" />
 
//         </Picker>
//       </View>
//       <Text style={{textAlign:'left',fontSize:20, color: 'black',marginTop:20}}>AMOUNT *</Text>
//       <TextInput 
//         placeholder="Enter Amount"
//         onChangeText={ data => this.setState({amount : data}) }
//         underlineColorAndroid='transparent'
//         style={styles.TextInputStyle}
//       />
      
//       <TouchableOpacity onPress={this.CheckValidation} activeOpacity={0.7} style={styles.buttonNext} >
//         <Text style={styles.buttonTextNext}> Next </Text>
//       </TouchableOpacity>
//       </ScrollView>
//     );
//   }
// }
 
// const FirstActivity_StackNavigator = StackNavigator({
//   First: {
//     screen: MainActivity,
//     navigationOptions: ({ navigation }) => ({
//       title: 'KredX Deal Creation',
//       headerLeft: <HamburgerIcon navigationProps={navigation} />,
 
//       headerStyle: {
//         backgroundColor: '#0d7cdd'
//       },
//       headerTintColor: '#fff',
//     })
//   },
// });
 
// const SecondActivity_StackNavigator = StackNavigator({
//   Second: {
//     screen: SecondActivity,
//     navigationOptions: ({ navigation }) => ({
//       title: 'KredX Deal Creation',
//       headerLeft: <HamburgerIcon navigationProps={navigation} />,
 
//       headerStyle: {
//         backgroundColor: '#0d7cdd'
//       },
//       headerTintColor: '#fff',
//     })
//   },
// });
 
// const ThirdActivity_StackNavigator = StackNavigator({
//   Third: {
//     screen: ThirdActivity,
//     navigationOptions: ({ navigation }) => ({
//       title: 'KredX Deal Creation',
//       headerLeft: <HamburgerIcon navigationProps={navigation} />,
 
//       headerStyle: {
//         backgroundColor: 'blue'
//       },
//       headerTintColor: '#fff',
//     })
//   },
// });

// export default MyDrawerNavigator = DrawerNavigator({
//   MainStack: {
//     screen: FirstActivity_StackNavigator
//   },
 
//   SecondStack: {
//     screen: SecondActivity_StackNavigator
//   },
 
//   ThirdStack: {
//     screen: ThirdActivity_StackNavigator
//   }
// },
//   {
//     contentComponent: Custom_Side_Menu,
//     drawerWidth: Dimensions.get('window').width - 50,
//   });
 
 
// const styles = StyleSheet.create({
 
//   MainContainer: {
//     flex: 1,
//     paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   sideMenuContainer: {
//     width: '100%',
//     height: '100%',
//     backgroundColor: '#fff',
//   },
//   sideMenuProfileIcon:{
//     width: 60, 
//     height: 60, 
//     backgroundColor: '#fff',
//     borderRadius:30,
//     marginTop:20,
//     marginLeft:20
//   },
//   sideMenuIcon:{
//     resizeMode: 'center',
//     width: 28, 
//     height: 28, 
//     marginRight: 10,
//     marginLeft: 20
//   },
//   menuText:{
//     fontSize: 15,
//     color: '#222222', 
//   },
//   MainContainer1:{
//     flex:1,
//     margin: 10
//   },  
//   TextInputStyle:{
//     textAlign: 'center',
//     height: 40,
//     width: '100%',
//     borderWidth: 1, 
//     borderColor: 'gray',
//     borderRadius: 10,
//     marginTop: 10,
//   },
//   button: {    
//     width: '100%',
//     height: 40,
//     padding: 10,
//     backgroundColor: '#4CAF50',
//     borderRadius:7,
//     marginTop: 10
//   },
//   buttonNext: {   
//     width: '60%',
//     height: 45,
//     padding: 8,
//     backgroundColor: '#0d7cdd',
//     borderRadius:25,
//     marginTop: 50,
//     marginLeft:'20%'
//   },
//   buttonTextNext:{
//     color:'#fff',
//     textAlign:'center',
//     fontSize: 20,
//     fontWeight: '900',
//   },
//   buttonInvoice: {   
//     width: '60%',
//     height: 40,
//     padding: 5,
//     backgroundColor: '#0d7cdd',
//     borderRadius:25,
//     marginTop: 15,
//     marginLeft:'20%'
//   },
//   buttonPrevious: {      
//     width: '60%',
//     height: 40,
//     padding: 5,
//     backgroundColor: '#0d7cdd',
//     borderRadius:25,
//     marginTop: 20,
//     marginLeft:'20%'
//   },
//   buttonTextInvoice:{
//     color:'#fff',
//     textAlign:'center',
//     fontSize: 20,
//     fontWeight: '900',
//   },
//   buttonText:{
//     color:'#fff',
//     textAlign:'center',
//   },
//   text:{
//     fontSize: 20,
//     textAlign: 'center'
//   }


// });
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {WebView} from 'react-native-webview';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class onap extends Component {
  render() {
    return (
      // <View style={styles.container}>
      //   <Text style={styles.welcome}>Welcome to hello nitin!</Text>
      //   <Text style={styles.instructions}>To get started, edit App.js</Text>
      //   <Text style={styles.instructions}>{instructions}</Text>
        
     
      // </View>

<WebView
source={{uri: 'https://www.pioneercoders.com/'}}
style={{marginTop: 20}}
/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});