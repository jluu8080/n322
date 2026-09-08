// import { Image } from 'expo-image';
import {Image, View, Text, Platform, ScrollView, StyleSheet } from 'react-native';
import { SLOPE_FACTOR } from 'react-native-reanimated/lib/typescript/animation/decay/utils';

//View & 

// import { HelloWave } from '@/components/hello-wave';
// import ParallaxScrollView from '@/components/parallax-scroll-view';
// import { ThemedText } from '@/components/themed-text';
// import { ThemedView } from '@/components/themed-view';
// import { Link } from 'expo-router';

//Think of View as a Div to output.

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.cardName}>General Profile Card</Text>

        <Image
          style={styles.profileImage}
          source={require('../../images/generalProfilePc.jpg')}
        />

          <Text style={styles.name}>Jason Luu</Text>

          <Text style = {styles.bio}>
            Hi, my name is Jason Luu and I am a Junior at IU Indianapolis studying Computer Science with a main focus on Full-Stack Development. Here at IUI, I've been developing my skills deeply in HTML, CSS, and JavaScript. I enjoy the vast imagination and benefits that can be made with coding, which has led me to pursue a career in Full-Stack Development, working on making what people see on a webpage and what they don't see on the other side. I hope to one day put what I learned and skills gained during my time in college into my career. 
          </Text>

          <View style={styles.facts}>
            <Text>3 Facts about me:</Text>
            <Text style={styles.fact}>    • I love Anime</Text>
            <Text style={styles.fact}>    • I like Video Games</Text>
            <Text style={styles.fact}>{"    • I'm a Professional Procastinator \n      (I'm working to change this profession)"}</Text>
          </View>
      </View>


      <View style={styles.businessCard}>

        <Text style={styles.businessCardName}>Business Card</Text>

        <View style={styles.businessCardContent}>

          <Image
            style={styles.businessCardLogo}
            source={require('../../images/IULogo.jpg')}
          />

          <View style={styles.businessCardDesc}>
            <View style = {styles.businesProfileDesc}>
              <Text style={styles.businessProfileName}>Jason Luu</Text>
              <Text>UITS Consultant Supervisor</Text>
            </View>

            <View style={styles.businessCardLocationDesc}>
              <Text style = {styles.businessDept}>{"Student Support Center\nIn-Person Support"}</Text>
              <Text style = {styles.businessLocation}>INDIANA UNIVERSITY INDIANAPOLIS</Text>
            </View>

            <Text style={styles.businessCardContact}>{"jasoluu@iu.edu\njasonluu1291@gmail.com\n574-345-1891"}</Text>
          </View>
        </View>
      </View>

      <View style={styles.datingCard}>
        <Text style={styles.cardName}>Dating Profile Card</Text>

        <Image
          style={styles.datingProfileImage}
          source={require('../../images/datingProfilePic.jpg')}
        />

          <Text style={styles.name}>Jason Luu</Text>

          <Text style = {styles.bio}>
            {"Hi, my name is Jason Luu. I'm 21 and currently a CS junior, full-stack track. I build small tools to solve problems only I have. I love cooking. I'm not a stereotypical CS Major and I'm very clean except on test weeks. I'm also a massive gamer with my favorite genre being MMORPG and Shooters.\n\nP.S. I was forced to make this dating profile but I'm willing to date you if you'll have me!\n\n574-345-1891\n\n*For legal reasons this is a joke*"}
          </Text>
      </View>
    </ScrollView>


  );
}

//flex: 1 - Take up the entire area up
//In css anything with - is now a capital letter of the second word

const styles = StyleSheet.create({

  //Dating Card
  datingCard:
  {
    width: "90%",
    maxWidth:450,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius:15,
    alignItems:"center",
  },
  datingCardContact:
  {

  },
  datingProfileImage:
  {
    width:160,
    height:160,
    borderRadius: 15,
    marginBottom:15,
  },

  //Business Card
  businessCard:
  {
    width: "90%",
    maxWidth:450,

    backgroundColor: "#fff",
    padding: 20,
    borderRadius:15,
    alignItems:"flex-start",
  },
  businessCardContent:
  {
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
  },
  businessCardLogo:
  {
    width:80,
    height:80,
    marginTop:60,
  },
  businessCardDesc:
  {

  },
  businessCardName:
  {
    width:"100%",
    textAlign: "center",
    marginBottom:8,
  },

  businesProfileDesc:
  {
    paddingLeft:10,
    marginBottom:15,
  },
  
  businessProfileName:
  {
    fontSize: 18,
    fontWeight: "bold",
    margin:0,
  },

  businessCardLocationDesc:
  {
    marginTop: 20,
    borderLeftWidth: 1,
    borderLeftColor: "black",
  },
  businessDept:
  {
    fontWeight: 700,
    fontFamily: "Georgia",

    borderBottomWidth: 1,

    paddingBottom: 3,
    paddingLeft:10,
  },

  businessLocation:
  {
    paddingLeft: 10,
  },

  businessCardContact:
  {
    paddingLeft:10,
    marginTop:15,
  },

  //General Profile Card
  cardName:
  {
    marginBottom: 30,
  },

  bio:
  {
    fontSize: 16,
    textAlign: "justify",
    marginBottom: 15,
  },
  facts:
  {
    width: "100%",
    gap:5,
  },
  fact:
  {
    fontSize: 15,
  }, 
  name:
  {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom:10,
    color:"black",
  },
  container:
  {
    backgroundColor: "#eee",

    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingVertical: 40,
    gap: 40,

  },
  card:
  {
    width: "90%",
    maxWidth:450,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius:15,
    alignItems:"center",
  },


  profileImage:
  {
    width:120,
    height:120,
    borderRadius: 60,
    marginBottom:15,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
