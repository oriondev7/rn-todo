import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: '#F8FAFF',
  },

  itemContainer: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 6,
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },

  itemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 8,
  },

  photo: {
    height: undefined,
    width: '100%',
    borderWidth: 1,
    borderColor: '#DADBDD',
    borderRadius: 12,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
    aspectRatio: 1,
    resizeMode: 'contain',
  },
});
