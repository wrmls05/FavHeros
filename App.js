import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import AllHeros from './src/screen/AllHeros';
import { colors, TOP_INSET } from './src/theme';

export default function App() {
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
        <Text style={styles.title}>แกลเลอรี่</Text>
      </View>
      <View style={styles.body}>
        <AllHeros onToggleLike={toggleLike} Fav={Fav} />
      </View>
      <View style={styles.tabbar}>
        <Tabbutton label='AllHeros'/>
        <Tabbutton label={'MyHeros (' + Fav.length + ')'} />
      </View>
    </View>
  )
}

const Tabbutton = ({ label }) => {
  return (
    <TouchableOpacity style={styles.tab}>
      <Text style={styles.tabText}>{label}</Text>
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
  }
})