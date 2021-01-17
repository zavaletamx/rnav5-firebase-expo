import React, { useEffect, useState } from 'react';
import AppLoading from 'expo-app-loading';

import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/private/Home';
import Login from './src/screens/public/Login';
import SignUp from './src/screens/public/SignUp';

const Stack = createStackNavigator();

export default function App() {
	[isReady, setReady] = useState(false);
	useEffect(() => {
		native_base();
		setReady(true);
	});

	const app = !isReady ? (
		<AppLoading />
	) : (
		<NavigationContainer>
			<Stack.Navigator
				headerMode='none'
				initialRouteName='Login'
			>
				<Stack.Screen
					name='Login'
					component={Login}
				/>
				<Stack.Screen
					name='SignUp'
					component={SignUp}
				/>
				<Stack.Screen
					name='Home'
					component={Home}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
	return app;
}

async function native_base() {
	await Font.loadAsync({
		Roboto: require('native-base/Fonts/Roboto.ttf'),
		Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
		...Ionicons.font,
	});
}
