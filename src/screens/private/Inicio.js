import { Container, Content, Text } from 'native-base';
import React from 'react';
import AppHeader from '../../components/AppHeader';

const Inicio = (props) => {
	const navigation = props.navigation;
	return (
		<Container>
			<AppHeader
				titulo='Inicio'
				drawer={() => navigation.toggleDrawer()}
			/>
			<Content padder>
				<Text>Inicio</Text>
			</Content>
		</Container>
	);
};

export default Inicio;
