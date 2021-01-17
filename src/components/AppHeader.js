import {
	Body,
	Button,
	Header,
	Left,
	Right,
	Text,
	Title,
} from 'native-base';
import React from 'react';
import { AntDesign, FontAwesome } from '@expo/vector-icons';

const AppHeader = (props) => {
	return (
		<Header
			style={{ backgroundColor: '#000' }}
			iosBarStyle='light-content'
		>
			<Left>
				{props.back ? (
					<Button
						transparent
						onPress={props.back}
						style={{ marginLeft: 10 }}
					>
						<AntDesign
							name='arrowleft'
							size={18}
							color='#fff'
						/>
					</Button>
				) : null}

				{props.drawer ? (
					<Button
						transparent
						onPress={props.drawer}
						style={{
							marginLeft: 10,
						}}
					>
						<FontAwesome
							name='navicon'
							size={18}
							color='#fff'
						/>
					</Button>
				) : null}
			</Left>
			<Body>
				<Title
					style={{
						fontSize: 18,
						fontWeight: 'normal',
						color: '#fff',
					}}
				>
					{props.titulo}
				</Title>
			</Body>
			<Right />
		</Header>
	);
};

export default AppHeader;
