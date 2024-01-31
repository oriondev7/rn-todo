import { StyleSheet } from 'react-native';

// TODO: how to unite differences 1 and 2 into a single entities

export const styles = StyleSheet.create({
  addButtonBackground: {
    backgroundColor: '#F8D94F', // 1
    alignItems: 'center',
    borderRadius: 8,
    alignSelf: 'baseline',
  },

  filterButtonBackground: {
    backgroundColor: '#6871EE', // 1
    alignItems: 'center',
    borderRadius: 8,
    alignSelf: 'baseline',
  },

  addButtonTitle: {
    color: '#262B4F', // 2
    fontSize: 12,
    fontWeight: '700',
    paddingVertical: 11,
    paddingHorizontal: 18,
  },

  filterButtonTitle: {
    color: 'white', // 2
    fontSize: 12,
    fontWeight: '700',
    paddingVertical: 11,
    paddingHorizontal: 18,
  },
});
