import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';

export default function App() {
  return (
    <Container>
      <Title>🦄 We are excited to see what you build!</Title>
      <StatusBar style="auto" />
    </Container>
  );
}

const Layout = styled.View`
  display: flex;
  height: 100vh;
  width: 100%;
  flex: 1;
  background-color: #fff;
  align-items: 'center';
  justify-content: 'center';
`

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
