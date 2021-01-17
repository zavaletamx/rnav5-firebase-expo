import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Inicio from './Inicio';
import Sidebar from '../../components/Sidebar';
import Profile from './Profile/Profile';

const Drawer = createDrawerNavigator();

const Home = (props) => {
	return (
		<Drawer.Navigator
			initialRouteName='Inicio'
			drawerContent={(props) => (
				<Sidebar {...props} />
			)}
		>
			<Drawer.Screen
				name='Inicio'
				component={Inicio}
			/>
			<Drawer.Screen
				name='Perfil'
				component={Profile}
			/>
		</Drawer.Navigator>
	);
};

export default Home;
