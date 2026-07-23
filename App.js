import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { colors } from './src/theme';
import { Hero } from './src/data';

export default function App() {
  const [Fav, setFav] = useState([])

  const toggleLike = (id) => {
    setFav((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    )
  }

  return (
    <View style={styles.container}>

      <FlatList
        data={Hero}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        numColumns={2}
        columnWrapperStyle={styles.row}
        renderItem={({ item }) => {
          const isFav = Fav.includes(item.id)

          return (
            <View style={styles.card}>
              <Image
                style={styles.image}
                source={{ uri: item.uri }}
              />
              <View style={styles.footer}>
                <Text style={styles.title}>
                  {item.name}
                </Text>
                <TouchableOpacity onPress={() => toggleLike(item.id)}>
                  <Text style={[styles.heart, isFav && styles.heartON]}>
                    {'\u2665'}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )
        }}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: { marginTop: 60, padding: 10 },
  row: { justifyContent: 'space-between' },
  card: {
    width: '48%',
    marginBottom: 14,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
    overflow: 'hidden',
  },
  image: { width: '100%', aspectRatio: 1, },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 14,
    paddingHorizontal: 8,
  },
  title: {
    flex: 1,
    color: colors.text,
    fontSize: 18,
    marginRight: 8,
  },
  heart: { fontSize: 30, color: colors.muted, opacity: 0.35 },
  heartON: { color: colors.heart, opacity: 1 }
});
