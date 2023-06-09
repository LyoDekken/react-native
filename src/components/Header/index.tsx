import React from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'
import { theme } from '../../theme/theme'

export default function Header(props: any) {
  return <Text style={styles.header} {...props} />
}

const styles = StyleSheet.create({
  header: {
    fontSize: 21,
    fontWeight: 'bold',
    color: theme.colors.primary,
    paddingVertical: 12,
  },
})