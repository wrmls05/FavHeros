import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import AllHeros from './src/screen/AllHeros';
import { colors, TOP_INSET } from './src/theme';
import FavHeros from './src/screen/FavHeros';

export default function App() {
  const [tab, setTab] = useState('AllHeros')

  const [Fav, setFav] = useState([])

  const toggleLike = (id) => {
    setFav((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    )
  }
  return (
    <View style={styles.root}>
      <ExpoStatusBar style="light" />
      <View style={[styles.header, { paddingTop: 10 + TOP_INSET }]}>
        <Text style={styles.title}>{tab === 'AllHeros' ? 'All Heros' : 'Fav Heros'}</Text>
      </View>
      <View style={styles.body}>
        {
          tab === 'AllHeros' ?
            <AllHeros onToggleLike={toggleLike} Fav={Fav} />
            :
            <FavHeros onToggleLike={toggleLike} Fav={Fav} />
        }
      </View>
      <View style={styles.tabbar}>
        <Tabbutton label='All Heros' onPress={() => setTab('AllHeros')}
          active={tab === 'AllHeros'} />
        <Tabbutton label={'My Heros (' + Fav.length + ')'} onPress={() => setTab('FavHeros')}
          active={tab === 'FavHeros'} />
      </View>
    </View>
  )
}

const Tabbutton = ({ label, onPress, active }) => {
  return (
    <TouchableOpacity style={styles.tab} onPress={onPress}>
      <Text style={[styles.tabText, active && styles.tabActive]}>{label}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  header: {
    paddingHorizontal: 16, paddingVertical: 14, borderBottomWidth: 1, borderBottomColor: colors.border, backgroundColor: colors.surface,
  },
  title: {
    color: colors.cyan, fontSize: 22, fontWeight: '700',
  },
  body: {
    flex: 1,
  },
  tabbar: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: colors.border,
    backgroundColor: colors.surface,
  },
  tab: {
    flex: 1,
    paddingVertical: 14,
    alignItems: 'center',
  },
  tabText: {
    color: colors.muted,
    fontSize: 16,
    fontWeight: '600',
  },
  tabActive: {
    paddingBottom: 12,
    borderBottomWidth: 2,
    borderBottomColor: colors.cyan,
    color: colors.cyan,
  }
})