import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import { colors } from '../theme';
import { Hero } from '../data';
import HeroCard from '../components/HeroCard';

export default function FavHeros({ onToggleLike, Fav }) {
    const favHeros = Hero.filter((item) => Fav.includes(item.id))

    if (favHeros.length === 0) {
        return (
            <View style={styles.empty}>
                <Text style={styles.emptyText}>No favorite heroes yet!</Text>
                <Text style={styles.emptyHint}>Tap the heart icon on any hero to add them to your favorites.</Text>
            </View>
        )
    }
  return (
    <View style={styles.container}>

      <FlatList
        data={favHeros}
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
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  list: { marginTop: 10, padding: 10, width: '100%' },
  row: { justifyContent: 'space-between' },
  empty: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: colors.text,
    fontWeight: '700',
  },
  emptyHint: {
    fontSize: 15,
    color: colors.muted,
    marginTop: 6,
  }
});
