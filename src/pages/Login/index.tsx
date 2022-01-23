import React, {useCallback} from 'react';
import {Alert} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../routes/stack.routes';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {useDispatch} from 'react-redux';
import {GoogleLogin} from '../../store/modules/user/actions';
import {IUser} from '../../store/modules/user/types';

import {Google} from '../../services/google';

import FoxSvg from '../../assets/fox.svg';
import GoogleIcon from '../../assets/google-icon.svg';

import * as S from './styles';

export type StackRoutesProps = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

export const Login = () => {
  const navigation = useNavigation<StackRoutesProps>();
  const dispatch = useDispatch();

  const handleSignIn = useCallback(async () => {
    const response = await Google.signIn();

    if (!response.ok) {
      return;
    }

    const user = response.data as IUser;

    dispatch(GoogleLogin(user));
    navigation.navigate('Home');
  }, [dispatch, navigation]);

  return (
    <S.Container>
      <S.Greetings>
        <S.Slogan>
          <S.Title>Fox</S.Title>
          <S.SubTitle>learn</S.SubTitle>
        </S.Slogan>

        <S.Description>
          Welcome to new platform of {'\n'} e-learning. Let’s learn.
        </S.Description>
      </S.Greetings>

      <S.FoxContainer>
        <FoxSvg />
      </S.FoxContainer>

      <S.Content>
        <S.SignInButtonWrapper>
          <S.SignInButton onPress={handleSignIn}>
            <S.IconWrapper>
              <GoogleIcon width={35} />
            </S.IconWrapper>

            <S.SignInTextWrapper>
              <S.SignInText>Sign in with Google</S.SignInText>
            </S.SignInTextWrapper>
          </S.SignInButton>
        </S.SignInButtonWrapper>

        <S.SignUpButtonWrapper>
          <S.SignUpButton
            onPress={() => Alert.alert('Ops!', 'Still under construction...')}>
            <S.SignUpText>Create an account</S.SignUpText>
          </S.SignUpButton>
        </S.SignUpButtonWrapper>
      </S.Content>
    </S.Container>
  );
};
