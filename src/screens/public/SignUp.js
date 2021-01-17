import { Container, Content, Text } from 'native-base';
import React from 'react';
import AppHeader from '../../components/AppHeader';

const SignUp = (props) => {
	const navigation = props.navigation;
	return (
		<Container>
			<AppHeader
				titulo='Registrarse'
				back={() => navigation.goBack()}
			/>
			<Content>
				<Text>SignUp</Text>
			</Content>
		</Container>
	);
};

export default SignUp;
