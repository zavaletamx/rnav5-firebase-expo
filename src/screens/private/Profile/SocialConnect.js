import { Container, Content, Text } from 'native-base';
import React from 'react';
import AppHeader from '../../../components/AppHeader';

const SocialConnect = (props) => {
	const navigation = props.navigation;
	return (
		<Container>
			<AppHeader
				titulo='Redes sociales'
				drawer={() => navigation.toggleDrawer()}
			/>
			<Content padder>
				<Text>Social Connect</Text>
			</Content>
		</Container>
	);
};

export default SocialConnect;
