import { StatusBar } from "expo-status-bar";
import React,{useState,useRef} from "react";
import { StyleSheet,Text,View,SafeAreaView ,Image,TouchableOpacity,Animated,ScrollView} from "react-native";
import profile from './assets/profile1.jpg';
import { Video, AVPlaybackStatus } from 'expo-av';
//Tab Icons...
import home from './assets/home.png';
import search from './assets/search.png';
import notificatios from './assets/bell.png';
import settings from './assets/settings.png';
import logout from './assets/logout.png';
//Menu
import menu from './assets/menu.png';
import close from './assets/close.png';
//Photo
import photo from './assets/photo1.jpg';
//icon
import wa from './assets/whatsapp.png';
import ln from './assets/linkedin.png';
import gmail from './assets/gmail.png';
//video
import tes from './assets/tes.mp4';

export default function App(){
  const [currentTab, setCurrentTab] = useState("Home");
  const [showMenu,setShowMenu] = useState(false);


  const offsetValue = useRef(new Animated.Value(0)).current;

  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;
  return(
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" backgroundColor="black"/>
      <View style={{justifyContent:'flex-start',padding:15}}>
        <View style={{marginTop:50}}></View>
        <Image source={profile} style={{
          width:60,
          height:60,
          borderRadius:10,
          marginTop:8
        }}></Image>
        <Text style={{
          fontSize:16,
          fontWeight:'bold',
          color:'white',
          marginTop: 20,
        }}>Rizky Ramdhan Nugraha</Text>
        <TouchableOpacity>
          <Text style={{
            marginTop:6,
            color:'white'
          }}>View Profile</Text>
        </TouchableOpacity>

        <View style={{flexGrow:1,marginTop:50}}>
          {TabButton(currentTab,setCurrentTab,"Home",home)}
          {TabButton(currentTab,setCurrentTab,"Search",search)}
          {TabButton(currentTab,setCurrentTab,"Notification",notificatios)}
          {TabButton(currentTab,setCurrentTab,"Settings",settings)}
        </View>

        <View>
          {TabButton(currentTab,setCurrentTab,"LogOut",logout)}
        </View>

      </View>
      <Animated.View style={{
        flexGrow:1,
        backgroundColor:'white',
        position:'absolute',
        top:0,
        bottom:0,
        right:0,
        left:0,
        paddingHorizontal:15,
        paddingVertical:20,
        borderRadius: showMenu ?  15: 0,
        transform: [
          {scale: scaleValue},
          {translateX : offsetValue}
        ]
      }}>
      <Animated.View style={{
        transform: [{
          translateY:closeButtonOffset
        }]}}>
      <ScrollView>
        <TouchableOpacity onPress={() =>{
        //Do action
        Animated.timing(scaleValue, {
          toValue:showMenu ? 1 : 0.88,
          duration:300,
          useNativeDriver:true
        })
        .start()
        Animated.timing(offsetValue, {
          toValue:showMenu ? 0 : 230,
          duration:300,
          useNativeDriver:true
        })
        .start()
        Animated.timing(closeButtonOffset, {
          toValue:!showMenu ? -30 : 0,
          duration:300,
          useNativeDriver:true
        })
        .start()       
        setShowMenu(!showMenu);
      }}>
         <Image source={showMenu ? close : menu} style={{           
           width:20,
           height:20,
           tintColor:'black',
           marginTop:40,
           
          }}></Image>
         
      </TouchableOpacity>
          <Text style={{
            fontSize:30,
            fontWeight:'bold',
            color:'black',
            paddingTop:20
          }}>{currentTab}</Text>
          <View style={{position:'relative',}}>
            <Image source={photo} style={{
              width:'100%',
              height: 300,
              borderRadius:20,
              marginTop:20
            }}></Image>
            <Text style={{
              fontSize:20,
              fontWeight:'bold',
              paddingTop: 15,
              color:'white',
              position:'absolute',
              bottom:10,
              left:5
              
            }}> Rizky Ramdhan Nugraha</Text>        
          </View>
            <Text style={{marginTop:10,fontSize:18}}>Graphic Designer,React Native Developer</Text>
            <View style={{paddingVertical:10}}>
              <Text style={{}}>
                Bio:
              </Text>
              <Text>
                Seorang Manusia yang sedang menjalani perkuliahan di Bandung.
              </Text>       
            </View>
              <View style={{
                borderWidth:2,
                borderRadius:10
              }}>
                <Text style={{
                  fontSize:25,
                  fontWeight:'bold',
                  marginLeft:10
                  
                }}>Kontak</Text>
                {sosmed(wa,"085720575677")}
                {sosmed(ln,"Rizky Ramdhan Nugraha")}
                {sosmed(gmail,"RizkyRamdhan.117h@gmail.com")}
              </View>
              
      </ScrollView>
      

      </Animated.View>

      </Animated.View>
    </SafeAreaView>
  ) 
}

const TabButton = (currentTab,setCurrentTab,title,image) =>{
  return(
         <TouchableOpacity onPress={()=>{
            if (title == "LogOut"){
              alert("Apakah anda ingin keluar?")
            }else{
              setCurrentTab(title);
            }
         }}>
          <View style={{
            flexDirection:'row',
            alignItems:'center',
            paddingVertical:8,
            backgroundColor: currentTab == title ? 'white' : 'transparent',
            borderRadius:8,
            paddingLeft:13,
            paddingRight:35,
            marginTop:15
          }}>

          <Image source={image} style={{
            width:25,
            height:25,
            tintColor: currentTab == title ? "#0E185F" : "white"
          }}></Image>
          <Text style={{
            fontSize:15,
            fontWeight:'bold',
            paddingLeft:15,
            color: currentTab == title ? "#0E185F" : "white"
          }}>{title}</Text>
          </View>           
          </TouchableOpacity>   
  )
}

const sosmed = (image,title) =>{
  return(
    <View style={{
      flexDirection:'row',
      alignItems:'center',
      paddingVertical:8
    }}>
      <Image
        source={image} style={{
          width:40,
          height:40,
          marginLeft:10
        }}
      />
      <Text style={{
          fontSize:15,
          marginLeft:10
      }}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#0E185F',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  }

})