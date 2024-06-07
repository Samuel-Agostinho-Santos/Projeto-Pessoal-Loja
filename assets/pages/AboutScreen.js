import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  Image,
  Pressable,
  TextInput
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Agendamento } from '../componentes/Agendamentos';

export default function AboutScreen() {
  const navigation = useNavigation();

  const route = useRoute();
  const name = route.params?.name;

  const handleHomeClick = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logotwo} source={require('../icons8-nike-50.png')} />

    
         <View style={styles.barradepesquisa}>
          
            <TextInput style={styles.barranome} placeholder='Pesquise aqui'
            placeholderTextColor= '#d1d1d1'
        
            autoCapitalize= 'none'
            keyboardType='email-address'/>
          </View>
       
   
      <Text style={styles.h1}></Text>
      <Text style={styles.h2}></Text>
      <Text style={styles.h2}></Text>

      <Pressable style={styles.itemum}>
        <Text>
          {' '}
          <Image style={styles.imgum} source={require('../OIP(2).jpg')} />
        </Text>
        <Text style={styles.tipo}>TRABALHO</Text>
      </Pressable>

      <Pressable style={styles.itemdois}>
        <Text>
          <Image style={styles.imgdois} source={require('../R(3).jpg')} />
        </Text>

        <Text style={styles.tipo}>SAIR</Text>
      </Pressable>

        <Pressable style={styles.itemtres}>
        <Text>
          <Image style={styles.imgtres} source={require('../roupa-de-academia-masculina(10).jpg')} />
        </Text>

        <Text style={styles.tipo}>ACADEMIA</Text>
      </Pressable>

       <Pressable style={styles.itemquatro}>
        <Text>
          <Image style={styles.imgquatro} source={require('../th.jpg')} />
        </Text>

        <Text style={styles.tipo}>PARA CASA</Text>
      </Pressable>


     <Pressable style={styles.itemcinco}>
        <Text>
          <Image style={styles.imgcinco} source={require('../th.jpg')} />
        </Text>

        <Text style={styles.tipo}>ACESSÓRIOS</Text>
      </Pressable>



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logotwo: {
    width: 70,
    height: 70,
    marginRight: 330,
    marginTop: -265,
  },

  itemum: {
    backgroundColor: 'white',
    width: 180,
    height: 250,
    marginRight: 290,
    marginLeft: 83,
    marginTop: 10,
  },

  itemdois: {
    backgroundColor: 'white',
    width: 180,
    height: 250,
    marginLeft: 200,
    marginTop: -250,
  },
  imgum: {
    backgroundColor: '',
    width: 180,
    height: 230,
    marginTop: -20,
  },
  imgdois: {
    width: 180,
    height: 230,
    marginTop: -3,
  },
   itemtres: {
    backgroundColor: 'white',
    width: 180,
    height: 250,
    marginLeft: 200,
    marginTop: 20,
  },
  imgtres: {
    width: 180,
    height: 230,
    marginTop: -3,
  },
  tipo:{
    fontWeight: 'bold'

  },
  barradepesquisa:{
    marginTop: -50,
  width: 320,
  height: 90,
  marginLeft: 65,
  },
  barranome:{
    height: 30,
  },
  itemquatro: {
    backgroundColor: 'white',
    width: 180,
    height: 250,
    marginLeft: -200,
    marginTop: -250,
  },
  imgquatro: {
    width: 180,
    height: 230,
    marginTop: -3,
  },
  itemcinco: {
    backgroundColor: 'white',
    width: 180,
    height: 250,
    marginLeft: -200,
    marginTop: -250,
  },
  
});
7