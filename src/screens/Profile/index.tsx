import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';

export default function ProfileScreen() {
  return (
    <Container>
      <Title>This is Profile Screen</Title>
      <StatusBar style="auto" />
    </Container>
  );
}

const Container = styled.View`
	flex: 1;
	background-color: papayawhip;
	justify-content: center;
	align-items: center;
	padding: 1rem;
`;

const Title = styled.Text`
	font-size: 40px;
	font-weight: 500;
	color: palevioletred;
`;
