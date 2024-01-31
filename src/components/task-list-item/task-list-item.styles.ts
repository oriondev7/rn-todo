import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginBottom: 6,
    borderRadius: 8,
    paddingVertical: 6,
    paddingRight: 6,
  },

  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 8,
  },

  taskTitle: {
    color: '#162E48',
    fontSize: 14,
    fontWeight: '700',
    marginLeft: 8,
  },

  innerButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
