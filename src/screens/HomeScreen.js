import React, { useState } from 'react'
import { View , Text, SafeAreaView, ScrollView, Image, TextInput, TouchableOpacity, FlatList, ImageBackground} from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 
import { freeGames, paidGames, sliderData } from '../model/data';
import BannerSlider from '../components/BannerSlider';
import { windowWidth } from '../utils/Dimensions';
import CustomSwitch from '../components/CustomSwitch';
import ListItem from '../components/ListItem';

export default function HomeScreen({navigation}){
  const [gamesTab, setGamesTab] = useState(1);

  const onSelectSwitch = (value) => {
    setGamesTab(value);
  }

  return (
    <SafeAreaView style={{flex:1, backgroundColor: '#fff'}}>
      <ScrollView  style={{padding:20}}>
        {/* header */}
        <View style={{flexDirectiorn: 'row', justifyContent: 'space-between', marginBottom: 20}}>
          <Text style={{fontWeight: 'bold', fontSize: 18}}>Hello John Doe</Text>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <ImageBackground 
            style={{width: 35, height: 35}} 
            source={require('../../assets/images/user-profile.jpg')}
            imageStyle={{borderRadius:25}} />
          </TouchableOpacity>
        </View>

         {/* sreach */}
        <View style={{
          flexDirection: 'row',
          borderColor: '#C6C6C6',
          borderWidth: 1,
          borderRadius: 8,
          paddingHorizontal: 10,
          paddingVertical: 8}}>
          <AntDesign name="search1" size={20} color="#C6C6C6" style={{marginLeft: 5}}/>
          <TextInput placeholder='Search'/>
        </View>
        {/* title */}
        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 15}}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>Upcoming Games</Text>
          <TouchableOpacity onPress={()=> {}}>
            <Text style={{color: '#0aada8', fontWeight: 'bold'}}>See all</Text>
          </TouchableOpacity>
        </View>

        <View style={{height: 120, width:"90%"}}>
          <Image style={{height: 120, width:"90%", alignItems: 'center'}} source={require('../../assets/images/homescreen/game-1.jpeg')} resizeMode={'contain'} />
        </View>

        <View style={{marginVertical:20}}>
          <CustomSwitch 
          selectionMode={1}
          option1 ='Free to play'
          option2 ='Paid games'
          onSelectSwitch={onSelectSwitch}
          />
        </View>

        {gamesTab == 1 && 
          freeGames.map(item => (
            <ListItem 
              key={item.id} 
              photo={item.poster} 
              title={item.title}
              subTitle={item.subtitle}
              isFree={item.isFree}
              onPress={() =>
                navigation.navigate('GameDetails', {
                  title: item.title,
                  id: item.id,
                })
              }
              />
          ))
        }
        {gamesTab == 2 && 
          paidGames.map(item => (
            <ListItem 
              key={item.id} 
              photo={item.poster} 
              title={item.title}
              subTitle={item.subtitle}
              isFree={item.isFree}
              price={item.price}
              onPress={() =>
                navigation.navigate('GameDetails', {
                  title: item.title,
                  id: item.id,
                })
              }
              />
          ))
        }
      </ScrollView>
    </SafeAreaView>
  )
}
