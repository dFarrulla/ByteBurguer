import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Link } from 'expo-router';




const DetalhesScreen = ({ navigation }) => {
  const [quantidade, setQuantidade] = useState(1);

  const incrementarQuantidade = () => {
    setQuantidade(quantidade + 1);
  };

  const decrementarQuantidade = () => {
    if (quantidade > 1) {
      setQuantidade(quantidade - 1);
    }
  };

  const bebidas = [
    { id: '1', nome: 'Coca-Cola 350ml', preco: 'R$ 5,00' },
    { id: '2', nome: 'Coca-Cola 600ml', preco: 'R$ 7,00' },
    { id: '3', nome: 'Fanta Laranja', preco: 'R$ 5,00' },
    { id: '4', nome: 'Fanta Uva', preco: 'R$ 5,00' },
  ];

  const confirmarPedido = () => {
    // Lógica para confirmar o pedido
    // Pode ser implementada de acordo com as necessidades do seu aplicativo
  };

  return (
    <View style={styles.container}>
      {/* Barra Superior */}
      <View style={styles.header}>
      <Link href="/p1">
          <FontAwesome5 name="arrow-left" size={24} color="black" />
      </Link>
        <Text style={styles.headerText}>Detalhes</Text>
        <FontAwesome5 name="star" size={24} color="black" />
      </View>

      {/* Foto do Hambúrguer */}
      <Image
        source={require('../../images/hamburguer.jpg')}
        style={styles.hamburguerImage}
      />

      {/* Detalhes do Hambúrguer */}
      <View style={styles.hamburguerDetails}>
        <Text style={styles.hamburguerName}>Hambúrguer Especial</Text>
        <Text style={styles.hamburguerPrice}>R$50,00</Text>

        {/* Controle de Quantidade */}
        <View style={styles.quantityControl}>
          <TouchableOpacity onPress={decrementarQuantidade}>
            <Text style={styles.quantityButton}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityText}>{quantidade}</Text>
          <TouchableOpacity onPress={incrementarQuantidade}>
            <Text style={styles.quantityButton}>+</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.hamburguerDescription}>
          Um delicioso hambúrguer preparado com ingredientes frescos e saborosos.
        </Text>
      </View>

      {/* Lista de Bebidas */}
      <FlatList
        data={bebidas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.bebidaItem}>
            <Text style={styles.bebidaNome}>{item.nome}</Text>
            <Text style={styles.bebidaPreco}>{item.preco}</Text>
          </View>
        )}
      />

      {/* Botão Confirmar Pedido */}
      <TouchableOpacity style={styles.confirmButton} onPress={confirmarPedido}>
        <Text style={styles.confirmButtonText}>Confirmar Pedido</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 30,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  hamburguerImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  hamburguerDetails: {
    padding: 20,
  },
  hamburguerName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  hamburguerPrice: {
    fontSize: 18,
    color: 'green',
    marginBottom: 10,
  },
  quantityControl: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  quantityButton: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'black',
  },
  quantityText: {
    fontSize: 18,
    marginHorizontal: 10,
  },
  hamburguerDescription: {
    fontSize: 16,
    marginBottom: 20,
  },
  bebidaItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    paddingVertical: 10,
  },
  bebidaNome: {
    fontSize: 16,
  },
  bebidaPreco: {
    fontSize: 16,
    color: 'green',
  },
  confirmButton: {
    backgroundColor: 'red',
    alignItems: 'center',
    padding: 15,
  },
  confirmButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default DetalhesScreen;
