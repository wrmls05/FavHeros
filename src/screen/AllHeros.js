import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import { colors } from '../theme';
import { Hero } from '../data';
import HeroCard from '../components/HeroCard';

export default function AllHeros({ onToggleLike, Fav }) {

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
            <HeroCard Hero={item} isFav={isFav} onToggleLike={onToggleLike} />
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
    backgroundColor: colors.bg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: { marginTop: 10, padding: 10 },
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
