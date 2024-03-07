import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, ScrollView, Modal, Button, TouchableHighlight} from 'react-native';

const App = () => {
  const [planetas, setPlanetas] = useState([
    { nombre: 'Mercurio', descripcion: 'El planeta que se encoge. Tamaño: Diámetro de aproximadamente 4,880 kilómetros. Masa: Cerca de 0.055 veces la masa de la Tierra. Distancia al Sol: Aproximadamente 57.9 millones de kilómetros. Características Únicas: Temperaturas extremas, sin atmósfera significativa, superficie cubierta de cráteres.', imagen: require('./src/img/mercurio.jpg') },
    { nombre: 'Venus', descripcion: 'Un volvan activo en Venus. Tamaño: Diámetro de aproximadamente 12,104 kilómetros. Masa: Cerca de 0.815 veces la masa de la Tierra. Distancia al Sol: Aproximadamente 108.2 millones de kilómetros. Características Únicas: Atmósfera densa de dióxido de carbono, efecto invernadero intenso, rotación retrógrada.', imagen: require('./src/img/venus.jpg') },
    { nombre: 'Tierra', descripcion: 'Unico planeta cque alberga vida. Tamaño: Diámetro de aproximadamente 12,742 kilómetros. Masa: Masa de la Tierra es 1. Distancia al Sol: Aproximadamente 149.6 millones de kilómetros. Características Únicas: Único en el sistema solar con agua en estado líquido, atmósfera rica en oxígeno, diversidad biológica.', imagen: require('./src/img/tierra.jpg') },
    { nombre: 'Marte', descripcion: 'Planeta que ha sido explorado por robots. Tamaño: Diámetro de aproximadamente 6,779 kilómetros. Masa: Cerca de 0.107 veces la masa de la Tierra. Distancia al Sol: Aproximadamente 227.9 millones de kilómetros. Características Únicas: Superficie rocosa, atmósfera delgada, montañas y valles marcianos.', imagen: require('./src/img/marte.jpg') },
    { nombre: 'Júpiter', descripcion: 'El planeta mas grande del sistema solar. Tamaño: Diámetro de aproximadamente 139,820 kilómetros. Masa: Cerca de 318 veces la masa de la Tierra. Distancia al Sol: Aproximadamente 778.5 millones de kilómetros. Características Únicas: Gigante gaseoso, Gran Mancha Roja, sistema de anillos y numerosas lunas.', imagen: require('./src/img/jupiter.jpg') },
    { nombre: 'Saturno', descripcion: 'Los espectaculares anillos de Saturno. Tamaño: Diámetro de aproximadamente 116,460 kilómetros. Masa: Cerca de 95 veces la masa de la Tierra. Distancia al Sol: Aproximadamente 1,429 millones de kilómetros. Características Únicas: Espectaculares anillos, gran número de lunas, incluyendo Titán.', imagen: require('./src/img/saturno.png') },
    { nombre: 'Urano', descripcion: 'El extremo clima de urano. Tamaño: Diámetro de aproximadamente 50,724 kilómetros. Masa: Cerca de 14 veces la masa de la Tierra. Distancia al Sol: Aproximadamente 2,871 millones de kilómetros. Características Únicas: Inclinación axial extrema, rotación retrógrada. ', imagen: require('./src/img/urano.webp') },
    { nombre: 'Neptuno', descripcion: 'Un año en Neptuno equivale 165 años terrestres. Tamaño: Diámetro de aproximadamente 49,244 kilómetros. Masa: Cerca de 17 veces la masa de la Tierra. Distancia al Sol: Aproximadamente 4,498 millones de kilómetros. Características Únicas: Gran Mancha Oscura, vientos extremadamente rápidos, campos magnéticos inclinados.', imagen: require('./src/img/neptuno.jpg') },
  ]);

  const [modalVisible, setModalVisible] = useState(false);
  const [planetaSeleccionado, setPlanetaSeleccionado] = useState(null);

  const abrirModal = (planeta) => {
    setPlanetaSeleccionado(planeta);
    setModalVisible(true);
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.tituloContainer}>
        <Text style={styles.titulo}>El Sistema Solar</Text>
      </View>

      <ScrollView contentContainerStyle={styles.listaPlanetas}>
        {planetas.map((planeta, index) => (
          <View key={index} style={styles.planetaContainer}>
            <View style={styles.planetaItem}>
              <View style={styles.planetaContenido}>
                <Image style={styles.planetaImagen} source={planeta.imagen} />
                <View style={styles.planetaTexto}>
                  <Text style={styles.planetaNombre}>{planeta.nombre}</Text>
                  <Text style={styles.planetaDescripcion} numberOfLines={3}>
                    {planeta.descripcion}
                  </Text>
                </View>
              </View>
              <Button title="Ver detalle" onPress={() => abrirModal(planeta)} />
            </View>
          </View>
        ))}
      </ScrollView>

      <Modal transparent={true} animationType="slide" visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
        <View style={styles.vistaModal}>
        <ScrollView>
          <View style={styles.Modal}>
            <Image style={styles.planetaDetalleImagen} source={planetaSeleccionado?.imagen} />
            <Text style={styles.planetaDetalleNombre}>{planetaSeleccionado?.nombre}</Text>
            <Text style={styles.planetaDetalleDescripcion}>{planetaSeleccionado?.descripcion}</Text>
            <Button title="Regresar" onPress={() => setModalVisible(false)} />
          </View>
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: '#7B68EE',
    flex: 1,
  },
  tituloContainer: {
    backgroundColor: '#7B68EE',
    paddingTop: 100,
    paddingBottom: 30,
    alignItems: 'center',
  },
  titulo: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
  },
  listaPlanetas: {
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  planetaContainer: {
    width: '100%',
    marginBottom: 20,
  },
  planetaItem: {
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
  },
  planetaContenido: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  planetaImagen: {
    width: '50%',
    height: 150,
  },
  planetaTexto: {
    padding: 10,
    flex: 1,
  },
  planetaNombre: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10,
  },
  vistaModal: {
    flex: 1,
    backgroundColor: '#000000aa',
  },
  Modal: {
    backgroundColor: '#fff',
    margin: 50,
    padding: 20,
    borderRadius: 20,
    flex: 1,
  },
  planetaDetalleImagen: {
    width: '100%',
    height: 250,
    borderRadius: 20,
  },
  planetaDetalleNombre: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  planetaDetalleDescripcion: {
    fontSize: 16,
    marginTop: 10,
  },
  planetaDescripcion: {
    fontSize: 20,
    marginTop: 5,
    width: '100%',
  },
});

export default App;