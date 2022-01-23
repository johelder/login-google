import React, {useCallback} from 'react';
import {View, Text, Button} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../routes/stack.routes';

import {Google} from '../../services/google';

import {useDispatch, useSelector} from 'react-redux';
import {GoogleLogOut} from '../../store/modules/user/actions';
import {IUserState, IUser} from '../../store/modules/user/types';

export type StackRoutesProps = NativeStackNavigationProp<
  RootStackParamList,
  'Login'
>;

export const Home = () => {
  const navigation = useNavigation<StackRoutesProps>();

  const user = useSelector<IUserState, IUser>(state => state.user);
  const dispatch = useDispatch();

  const handleSignOut = useCallback(() => {
    Google.signOut();
    dispatch(GoogleLogOut());

    navigation.navigate('Login');
  }, [dispatch, navigation]);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>Welcome, {user.name}</Text>

      <Button title="Sign Out" onPress={handleSignOut} />
    </View>
  );
};
