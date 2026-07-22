import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList, Pressable } from 'react-native';
import { useState } from 'react';
import { colors } from './src/theme';
import { Hero } from './src/data';

export default function App() {
  const [likeID, setLikeID] = useState([])

  const toggleLike = (id) => {
    setLikeID((prev) =>
      prev.includes(id) ? prev.filter((st) => st !== id) : [...prev, id]
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
        renderItem={({ item }) => (

          <View style={styles.card}>
            <Image
              style={styles.image}
              source={{ uri: item.uri }}
            />


            <View style={styles.footer}>
              <Text style={styles.title}>
                {item.name}
              </Text>
              <Pressable onPress={() => toggleLike(item.id)}>
                <Text style={[styles.heart, likeID.includes(item.id) && styles.heartON]}>
                  {'\u2665\uFE0E'}
                </Text>
              </Pressable>
            </View>

          </View>
        )}
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
  list: { marginTop: 30, padding: 14 },
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
  heart: { fontSize: 24, color: colors.muted, },
  heartON: { color: colors.heart }
});
