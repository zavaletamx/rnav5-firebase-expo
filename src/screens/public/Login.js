import {
	Button,
	Container,
	Content,
	Text,
} from 'native-base';
import React from 'react';
import AppHeader from '../../components/AppHeader';

const Login = (props) => {
	const navigation = props.navigation;
	return (
		<Container>
			<AppHeader titulo='Login' back={false} />
			<Content padder>
				<Button
					block
					primary
					onPress={() => {
						navigation.navigate('Home');
					}}
				>
					<Text>Login</Text>
				</Button>
				<Button
					block
					dark
					onPress={() => {
						navigation.navigate('SignUp');
					}}
				>
					<Text>Registro</Text>
				</Button>
			</Content>
		</Container>
	);
};

export default Login;
