import styled from 'styled-components/native';
import {getStatusBarHeight} from 'react-native-status-bar-height';

export const Container = styled.View`
  width: 100%;
  height: 100%;

  background-color: #ffecef;
`;

export const Greetings = styled.View`
  width: 100%;

  align-items: center;
  justify-content: center;

  margin-top: ${getStatusBarHeight() + 20}px;
`;

export const Slogan = styled.View`
  flex-direction: row;
`;

export const Title = styled.Text`
  font-family: 'Ubuntu-Bold';
  font-size: 30px;

  color: #ff5f54;
`;

export const SubTitle = styled.Text`
  font-family: 'Ubuntu-Bold';
  font-size: 30px;

  color: #021e40;
`;

export const Description = styled.Text`
  font-family: 'Ubuntu-Light';
  font-size: 14px;

  text-align: center;

  color: #202020;
  margin-top: 10px;
`;

export const FoxContainer = styled.View`
  width: 100%;

  align-items: center;

  position: absolute;
  bottom: 0;

  z-index: 1;
`;

export const Content = styled.View`
  width: 100%;

  position: absolute;
  bottom: 50px;
  z-index: 2;
`;

export const SignInButtonWrapper = styled.View`
  width: 100%;

  align-items: center;
`;

export const SignInButton = styled.TouchableOpacity`
  width: 280px;
  height: 50px;

  align-items: center;
  justify-content: center;
  flex-direction: row;

  background-color: #ff5f54;
  border-radius: 16px;
`;

export const IconWrapper = styled.View`
  width: 20%;
  height: 100%;

  align-items: center;
  justify-content: center;

  background-color: #f2f4f5;
  border-top-left-radius: 16px;
  border-bottom-left-radius: 16px;
`;

export const SignInTextWrapper = styled.View`
  flex: 1;

  align-items: center;
  justify-content: center;
`;

export const SignInText = styled.Text`
  font-family: 'Ubuntu-Bold';
  font-size: 16px;

  color: #580600;
`;

export const SignUpButtonWrapper = styled.View`
  width: 100%;

  align-items: center;
  margin-top: 30px;
`;

export const SignUpButton = styled.TouchableOpacity``;

export const SignUpText = styled.Text`
  font-family: 'Ubuntu-Medium';
  font-size: 16px;

  color: #212330;
`;
