import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const BeginScreen = ({navigation}) => {
  return (
    <SafeAreaView 
    style={{
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: "white"
    }}>
      <View>
        <Text style={{fontSize: 30, fontWeight: 'bold', color: "#20315f"}}>GAMEON</Text>
      </View>
      <View style={{flex: 0.8, justifyContent: 'center', alignItems: 'center'}}>
        <Image source={require('../../assets/gameon.png')} />
      </View>
      <TouchableOpacity onPress={()=> navigation.navigate('Login')}
      style={{backgroundColor: '#AD40AF', padding: 20, width:'90%', borderRadius:5, flexDirection:'row', justifyContent: 'space-between'}}>
        <Text style={{fontWeight:'bold', fontSize: 18, color:'#fff'}}>Let's Begin</Text>
        <AntDesign name="right" size={22} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
});

export default BeginScreen;
