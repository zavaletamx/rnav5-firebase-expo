import React, { useEffect, useState } from 'react';

import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/private/Home';
import Login from './src/screens/public/Login';
import SignUp from './src/screens/public/SignUp';
import {
	ActivityIndicator,
	SafeAreaView,
} from 'react-native';
import { Root, View } from 'native-base';

const Stack = createStackNavigator();

export default function App() {
	[isReady, setReady] = useState(false);
	useEffect(() => {
		native_base();
	});

	const app = !isReady ? (
		<SafeAreaView
			style={{
				justifyContent: 'center',
				flex: 1,
			}}
		>
			<ActivityIndicator size='large' color='#000' />
		</SafeAreaView>
	) : (
		<Root>
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
		</Root>
	);
	return app;
}

async function native_base() {
	await Font.loadAsync({
		Roboto: require('native-base/Fonts/Roboto.ttf'),
		Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
		...Ionicons.font,
	}).then(() => {
		setReady(true);
	});
}
