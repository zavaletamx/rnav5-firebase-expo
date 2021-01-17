import { Container, Content, Text } from 'native-base';
import React from 'react';
import AppHeader from '../../../components/AppHeader';

const PersonalInfo = (props) => {
	const navigation = props.navigation;
	return (
		<Container>
			<AppHeader
				titulo='Info. Personal'
				drawer={() => navigation.toggleDrawer()}
			/>
			<Content padder>
				<Text>Información persoanl</Text>
			</Content>
		</Container>
	);
};

export default PersonalInfo;
