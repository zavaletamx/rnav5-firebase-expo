import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PersonalInfo from './PersonalInfo';
import SocialConnect from './SocialConnect';
import { Feather, Entypo } from '@expo/vector-icons';
import ReadTerms from './ReadTerms';
const Tab = createBottomTabNavigator();

const Profile = (props) => {
	return (
		<Tab.Navigator
			initialRouteName='PersonalInfo'
			tabBarOptions={{
				showLabel: false,
				activeBackgroundColor: '#282828',
				style: { backgroundColor: '#000' },
			}}
		>
			<Tab.Screen
				name='PersonalInfo'
				component={PersonalInfo}
				options={{
					tabBarIcon: ({ color }) => (
						<Feather
							name='user-check'
							size={30}
							color='#fff'
						/>
					),
				}}
			/>
			<Tab.Screen
				name='SocialConnect'
				component={SocialConnect}
				options={{
					tabBarIcon: ({ color }) => (
						<Feather
							name='link-2'
							size={30}
							color='#fff'
						/>
					),
				}}
			/>
			<Tab.Screen
				name='ReadTerms'
				component={ReadTerms}
				options={{
					tabBarIcon: ({ color }) => (
						<Entypo
							name='text'
							size={30}
							color='#fff'
						/>
					),
				}}
			/>
		</Tab.Navigator>
	);
};

export default Profile;
