import { Container, Content, Text } from 'native-base';
import React from 'react';
import AppHeader from '../../../components/AppHeader';

const ReadTerms = (props) => {
	const navigation = props.navigation;
	return (
		<Container>
			<AppHeader
				titulo='Términso y condiciones'
				drawer={() => navigation.toggleDrawer()}
			/>
			<Content padder>
				<Text>Social Connect</Text>
			</Content>
		</Container>
	);
};

export default ReadTerms;
