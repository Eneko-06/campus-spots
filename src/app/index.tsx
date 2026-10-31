import { Image, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      {/* Elementos superiores */}
      <Image source={require("../../assets/images/icon.png")} style={styles.logo} />
      <Text style={styles.title}>Campus Spots</Text>
      <Text style={styles.subtitle}>Task 1 of Lab 1 :)</Text>

      {/* Tarjeta de usuario (Task 2) */}
      <View style={stylesPersonal.card}>
        <Text style={stylesPersonal.name}>Name: Eneko</Text>
        <Text>I came from Spain and I am studying computer science at Politechinka Krakowska here in Kraków</Text>
        <Text>My favourite place in my city is the gym, where I spend a lot of time training.</Text>
      </View>

      {/* --- TASK 3: Flexbox Playground --- */}
      <View style={stylesSquares.squaresContainer}>
        <View style={[stylesSquares.square, { backgroundColor: '#e74c3c' }]} />
        <View style={[stylesSquares.square, stylesSquares.middleSquare, { backgroundColor: '#3498db' }]} />
        <View style={[stylesSquares.square, { backgroundColor: '#2ecc71' }]} />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f6f6f4",
  },
  logo: {
    width: 96,
    height: 96,
    marginBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
  },
  subtitle: {
    marginTop: 4,
    fontSize: 16,
    color: "#666",
  },
});


const stylesPersonal = StyleSheet.create({
  card: {
    backgroundColor: '#43b0d4', // Fondo 
    borderRadius: 20,           // Esquinas redondeadas
    padding: 15,                // Espacio por dentro para que el texto no pegue al borde
    marginTop: 40,              // Espacio de separación con el elemento de arriba
  },
  name: {
    fontWeight: 'bold',         // Para poner tu nombre en negrita como pide el enunciado
  },
});

const stylesSquares = StyleSheet.create({
 squaresContainer: {
   // flexDirection: 'row', // 1. Pone los elementos en fila (horizontal)
    marginTop: 20,
    width: '80%',         // Un ancho para que se vea bien en pantalla
    justifyContent: 'space-between', //Task 2: Pone espacio entre los cuadrados para que no se vean pegados
    gap: 8, // Deja un espacio automático de 8px entre los cuadrados
  },
  square: {
    width: 50,
    height: 50,
  },
  middleSquare: {
    flex: 1,    // Obliga al cuadrado azul a expandirse y ocupar todo el hueco libre
  },  
});
