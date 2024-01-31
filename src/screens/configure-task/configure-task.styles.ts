import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 15,
    backgroundColor: '#F8FAFF',
  },

  photo: {
    height: 250,
    width: '100%',
    borderWidth: 1,
    borderColor: '#DADBDD',
    borderRadius: 12,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },

  addTaskContainer: {
    alignItems: 'center',
    marginTop: -19,
  },

  title: {
    color: '#5E6178',
    fontSize: 14,
    fontWeight: '400',
    paddingTop: 12,
    paddingBottom: 12,
  },

  input: {
    borderWidth: 1,
    borderRadius: 12,
    borderColor: '#DADBDD',
    backgroundColor: 'white',
    paddingVertical: 16,
    paddingHorizontal: 12,
    color: '#262B4F',
    fontSize: 14,
    fontWeight: '400',
  },

  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 24,
  },

  locationTitle: {
    color: '#162E48',
    fontSize: 14,
    fontWeight: '700',
    marginLeft: 8,
  },

  BSBContainer: {
    backgroundColor: '#F8FAFF',
    paddingHorizontal: 15,
  },
});
