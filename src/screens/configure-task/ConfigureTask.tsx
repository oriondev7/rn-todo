import React, {
  useCallback,
  useMemo,
  useRef,
  useState,
  useEffect,
} from 'react';
import {
  View,
  TextInput,
  Text,
  ActivityIndicator,
  Image,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { addTask, editTask } from '../../store/tasks/slice';
import { styles } from './configure-task.styles';
import { MainAcceptButton } from '../../components';
import { CTSType } from '../constants';
import {
  BottomSheetButton,
  BSBType,
  RectangleButton,
  RBType,
} from '../../components';
import { Checkbox } from '../../components/checkbox';
import GetLocation from 'react-native-get-location';
import BottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import ImagePicker from 'react-native-image-crop-picker';

/* eslint-disable */
export const ConfigureTask = ({ navigation, route }) => {
  const params = route.params;
  const [text, onChangeText] = useState(params.initialText);
  const [location, onChangeLocation] = useState(params.location);
  const [image, setImage] = useState(params.image);
  const [loading, setLoading] = useState(false);
  const [keyboardDidShow, setKeyboardDidShow] = useState(false);
  const dispatch = useDispatch();

  const dismissKeyboard = () => Keyboard.dismiss()

  const expandBottomSheet = () => {
    if (!keyboardDidShow) {
      bottomSheetRef.current?.expand();
    }
  }
  const closeBottomSheet = () => bottomSheetRef.current?.close();

  const openCamera = () => {
    closeBottomSheet();

    ImagePicker.openCamera({
      width: 300,
      height: 250,
      cropping: true,
    }).then(image => {
      setImage(image.path);
    });
  };

  const openCameraRoll = () => {
    closeBottomSheet();

    ImagePicker.openPicker({
      width: 300,
      height: 250,
      cropping: true,
    }).then(image => {
      setImage(image.path);
    });
  };

  // Bottom Sheet Setup
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['37%'], []);
  const renderBackdrop = useCallback(
    props => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={1}
      />
    ),
    [],
  );

  const onToggleAddLocation = () => {
    setLoading(true);

    if (!location) {
      GetLocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 6000,
      }).then(location => {
        onChangeLocation({
          longitude: location.longitude,
          latitude: location.latitude,
        });
        setLoading(false);
      });
    } else {
      onChangeLocation(undefined);
      setLoading(false);
    }
  };

  const onSave = () => {
    const trimmedText = text.trim();

    if (trimmedText.length !== 0) {
      if (route.params.screenType === CTSType.ADD_TASK_SCREEN) {
        dispatch(
          addTask({
            image: image,
            text: trimmedText,
            location: location,
          }),
        );
      } else {
        dispatch(editTask(
          route.params.id,
          image,
          trimmedText,
          location
        ));
      }

      navigation.goBack();
    }

    onChangeText('');
  };

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardDidShow(true);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardDidShow(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={dismissKeyboard}>
        <View style={styles.container}>
          {image ? (
            <Image style={styles.photo} source={{ uri: image }} />
          ) : (
            <View style={styles.photo}>
              <Text>No photo</Text>
            </View>
          )}

          <View style={styles.addTaskContainer}>
            <RectangleButton
              onPress={expandBottomSheet}
              type={RBType.ADD}
              title={'+ Add photo'}
              disabled={keyboardDidShow}
            />
          </View>

          <Text style={styles.title}>Task name</Text>

          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
          />
          
          <View style={styles.locationContainer}>
            {loading ? (
              <ActivityIndicator size={18} />
            ) : (
              <Checkbox
                isOn={location === undefined ? false : true}
                onToggle={onToggleAddLocation}
              />
            )}
            <Text style={styles.locationTitle}>Add location</Text>
          </View>

          <MainAcceptButton title={'Save'} onPress={onSave} />
          <View style={{ flex: 1 }} />
        </View>
      </TouchableWithoutFeedback>
      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        backdropComponent={renderBackdrop}
        backgroundStyle={{
          backgroundColor: '#F8FAFF',
        }}
      >
        <View style={styles.BSBContainer}>
          <BottomSheetButton
            onPress={openCamera}
            type={BSBType.ACTION}
            title={'Take Photo'}
          />
          <BottomSheetButton
            onPress={openCameraRoll}
            type={BSBType.ACTION}
            title={'Open Camera Roll'}
          />
          <BottomSheetButton
            onPress={closeBottomSheet}
            type={BSBType.CANCEL}
            title={'Cancel'}
          />
        </View>
      </BottomSheet>
    </KeyboardAvoidingView>
  );
};
