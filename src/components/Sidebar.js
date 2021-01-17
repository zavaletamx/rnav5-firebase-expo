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
	Title,
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
									'https://lh3.googleusercontent.com/fife/ABSRlIq3k2ZggKwT4bfh8FPWO0K2PVLCNffjqbz_AHH6DAMjqq8syt0DmoZ1nADhxsGMw8rJIowefHhV70nJ5ckyFQi51RXEvaW8bPYMp5cqbWDYfQNSbVwQ5nC3CVgcx98XwwAaO0Z50bstqHrT2RH-8a-gnfWR0lOWgXWa5SQpEUCTqflf3SCmb4s5K3jfK9mRZ0YaN23blGFkPiq4yR3accCtQaGSyjp5sYOd3BdO8cF8qqT2DqRqdeJr4u9aXjaz2rw-QSYcR409W8n_J9ZEiahH4CQlVWO_1EkXom3Li8pDxzjazNmCKpDTjrIRrtefwOL_It3D7fPJm0an7bCvzDr85uEWBBMlXAJRTcWb79OeicvKFzD_WJNM5yZtyll3XHoUX7mm-ZqMA88SyWFfTaW6gLZHT7SdwY4Hl8grTq5y6UOe6KQTli10POijFJwTytrlNieTk4sNK8_FHJNCNDx16-bhwEXAyEJ_1kbPnLUCAHId0Mck-QFjJhtWG6S1KZy0K-O3i6MLYKN0eZTZnymiYBtGlS5ayHJen6oqfmYbqDvrkkpkuC1H-5e15vnS-lG34Ftc376EfUhRgG-NfZYZLrDih63gfFv6qw50NyCHm55zyknq6WJNdKG1JlDgyVt9rtXtCVRxkOZ2MigbBvRAhyShcgUxWsFRRTGHVDzD5ehbuFoB3CCJGH0fkkZufwzEtg9qyKl7jTYQiZ9ACYaQAHMaxNffFy373JIdTjfgOWo=s83-c',
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
			</DrawerContentScrollView>
		</Container>
	);
};

export default Sidebar;
