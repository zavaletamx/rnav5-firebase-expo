import React from 'react';

import {
	DrawerContentScrollView,
	DrawerItem,
} from '@react-navigation/drawer';

import {
	Body,
	Card,
	CardItem,
	Container,
	Left,
	Text,
	Thumbnail,
} from 'native-base';
import { AntDesign } from '@expo/vector-icons';
import { Platform } from 'react-native';

const Sidebar = (props) => {
	const navigation = props.navigation;

	return (
		<Container>
			<Card
				transparent
				style={{
					marginTop:
						Platform.OS === 'ios' ? 30 : 0,
					marginBottom: 0,
					paddingBottom: 0,
				}}
			>
				<CardItem
					bordered
					style={{ marginBottom: 0 }}
				>
					<Left
						style={{
							justifyContent: 'center',
						}}
					>
						<Thumbnail
							large
							circular
							source={{
								uri:
									'https://firebasestorage.googleapis.com/v0/b/expo-firebase-f29b9.appspot.com/o/images%2FChewSq.jpg?alt=media&token=fcc2aa12-a2be-4c31-bfbd-3cafa1335e2b',
							}}
						/>
					</Left>

					<Body
						style={{
							padding: 10,
							justifyContent: 'center',
						}}
					>
						<Text style={{ fontSize: 13 }}>
							Raúl Zavaleta
						</Text>
						<Text
							style={{
								fontSize: 13,
								marginTop: 5,
							}}
						>
							(442) 204 8329
						</Text>
					</Body>
				</CardItem>
			</Card>

			<DrawerContentScrollView {...props}>
				<Text
					style={{
						marginHorizontal: 20,
						marginBottom: 20,
						fontWeight: 'bold',
						marginTop:
							Platform.OS === 'android'
								? 20
								: 0,
					}}
				>
					Menú de mi app
				</Text>
				<DrawerItem
					icon={({ color, size }) => (
						<AntDesign
							name='home'
							color={color}
							size={size}
						/>
					)}
					label='Inicio'
					onPress={() => {
						navigation.navigate('Inicio');
					}}
				/>

				<DrawerItem
					icon={({ color, size }) => (
						<AntDesign
							name='user'
							color={color}
							size={size}
						/>
					)}
					label='Mi perfíl'
					onPress={() => {
						navigation.navigate('Perfil');
					}}
				/>

				<DrawerItem
					style={{
						borderTopColor: '#000',
						borderTopWidth: 1,
						paddingTop: 10,
						marginTop: 40,
					}}
					icon={({ color, size }) => (
						<AntDesign
							name='poweroff'
							color={color}
							size={size}
						/>
					)}
					label='Cerrar Sesión'
					onPress={() => {
						navigation.navigate('Login');
					}}
				/>
			</DrawerContentScrollView>
		</Container>
	);
};

export default Sidebar;
