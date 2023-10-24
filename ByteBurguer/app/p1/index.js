import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Link } from 'expo-router';


const EscolhaScreen = ({ navigation }) => {
  return (
    
      <View style={styles.container}>
        {/* Área do Usuário */}
        <View style={styles.userArea}>
          <View style={styles.avatarContainer}>
            <Image
              source={require('../../images/avatar.png')} // Substitua pelo caminho da imagem do usuário
              style={styles.avatar}
            />
            <View style={styles.greetingContainer}>
              <Text style={styles.greetingText}>Olá, Daniel Farrulla</Text>
              <TouchableOpacity>
                <FontAwesome5 name="bell" size={24} color="white" style={styles.bell} />
              </TouchableOpacity>
            </View>
          </View>
          {/* Campo de Endereço */}
          <View style={styles.addressContainer}>
            <View style={styles.addressInputContainer}>
            <FontAwesome5 style={styles.apMarkerAlt} name="map-marker-alt" size={24} color="black" />
              <TextInput
                style={styles.addressInput}
                placeholder="Localização Atual"
                placeholderTextColor="black"
              />
              <FontAwesome5 name="search" size={24} color="white" style={styles.searchIcon} />
            </View>
          </View>
        </View>

        {/* Carrossel de Hambúrgueres  */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {/* Adicione aqui os componentes do carrossel */}

        <Link href="/p2">
          <View style={styles.carouselItemContainer}>

          <Image source={require('../../images/hamburguer.jpg')}style={styles.carouselItem}/>
          <Text>Hamburguer Especial</Text> 
          </View>
        </Link>
             <Image
            source={require('../../images/x-burguer.jpg')}
            style={styles.carouselItem}
          />
             <Image
            source={require('../../images/x-bacon.jpg')}
            style={styles.carouselItem}
          />
             <Image
            source={require('../../images/x-tudo.jpg')}
            style={styles.carouselItem}
          />
          {/* Adicione os demais itens do carrossel */}
        </ScrollView>

        {/* Carrossel de Bebidas */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {/* Adicione aqui os componentes do carrossel */}
          
          <Image
            source={require('../../images/coca-350.jpg')}
            style={styles.carouselItem2}
          />
             <Image
            source={require('../../images/coca-600.jpg')}
            style={styles.carouselItem2}
          />
                 <Image
            source={require('../../images/fanta-laranja.jpg')}
            style={styles.carouselItem2}
          />
                 <Image
            source={require('../../images/fanta-uva.jpg')}
            style={styles.carouselItem2}
          />
        </ScrollView>

        {/* Área de Ícones Inferiores */}
        <View style={styles.bottomIcons}>
          <TouchableOpacity>
            <FontAwesome5 name="home" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome5 name="shopping-cart" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome5 name="heart" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome5 name="user" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 30,
  },
  userArea: {
    backgroundColor: 'red',
    padding: 20,
  },
  avatarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  greetingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    
  },
  greetingText: {
    color: 'white',
    
  },
  bell: {
    marginLeft: 10,
  },
 
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    height: 60, // Ajuste a altura conforme necessário
  },
  
  addressInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    backgroundColor: 'white', // Adicionei um fundo branco para o TextInput
    borderRadius: 5,
    flex: 1,
    height: 40,
  },
  addressInput: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    color: 'white',
    paddingLeft: 5,
  },
  searchIcon: {
    marginLeft: 10,
    color: 'black',
    padding: 10,
  },
  carouselItem: {
    width: 250,
    height: 350,
    margin: 10,
    borderRadius: 10,
  },
  carouselItem2: {
    width: 150,
    height: 250,
    margin: 10,
    borderRadius: 10,
  },
  bottomIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'red',
    paddingVertical: 10,
  },
  apMarkerAlt:{
    color: 'black',
    padding: 10,

  },
});

export default EscolhaScreen;
