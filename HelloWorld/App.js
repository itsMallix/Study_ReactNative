import {View, Text} from 'react-native';

export default function App() {
  return (
    <View style={{flex: 1, backgroundColor: "skyblue", padding: 10}}>
      <View style={{height: 100, width: 100, backgroundColor: "powderblue"}}></View>
      <View style={{height: 100, width: 100, backgroundColor: "red"}}></View>
      <Text style={{fontSize: 30, color: "white"}}>Test</Text>
      <Text style={{fontSize: 30, color: "white"}}>Lorem ipsum</Text>
    </View>
  );
}