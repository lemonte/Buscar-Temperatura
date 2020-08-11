import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native"
import { requestPermissionsAsync, getCurrentPositionAsync } from "expo-location"
import { MaterialIcons } from "@expo/vector-icons"
import api from "../services/api"
import key from '../../key'
function Main({ navigation }) {
	const [weather, setWeather] = useState(false)
	const [currentRegion, setCurrentRegion] = useState(null)

	useEffect(() => {
		async function loadInitialPosition() {
			const { granted } = await requestPermissionsAsync();
			if (granted) {
				const { coords } = await getCurrentPositionAsync({
					enableHighAccuracy: true,
				});
				const { latitude, longitude } = coords;
				get_Weather(latitude, longitude);
				setCurrentRegion({
					latitude,
					longitude,
					latitudeDelta: 0.04,
					longitudeDelta: 0.04,
				})

			}
		}
		loadInitialPosition();
	}, []);



	async function get_Weather(latitude, longitude) {
		const res = await api.get("/weather", {
			params: {
				lat: latitude,
				lon: longitude,
				appid: key,
				lang: 'pt',
				units: 'metric'
			}
		});
		setWeather(res.data)
	}

	if (!currentRegion) {
		return <View style={styles.container} >
			<Text style={styles.search}>Aguarde enquanto buscamos a posição ..... </Text>
		</View>;
	}


	if (!weather) {
		return <View style={styles.container} >
			<Text style={styles.search}>Aguarde enquanto buscamos os dados ..... </Text>
		</View>;
	}


	return (
		<View style={styles.container} >

			<Text style={styles.temp}>
				Temperatura máxima
				</Text>
			<Text style={styles.tempNow}>{weather['main']['temp']}°</Text>

			<Text style={styles.title}>{weather['weather'][0]['description'].toUpperCase()}</Text>

			<View style={styles.description}>
				<Text style={styles.item}> <Text style={styles.header}>MÍNIMA: </Text>{weather['main']['temp_min']}°</Text>
				<Text style={styles.item}> <Text style={styles.header}>UMIDADE: </Text>{weather['main']['humidity']}%</Text>
				<Text style={styles.item}> <Text style={styles.header}>PRESSÃO: </Text>{weather['main']['pressure']} hpa</Text>
				<Text style={styles.item}> <Text style={styles.header}>MÁXIMA: </Text>{weather['main']['temp_max']}°</Text>
			</View>
			<TouchableOpacity
				onPress={() => get_Weather(currentRegion.latitude, currentRegion.longitude)}
				style={styles.loadButton}
			>< MaterialIcons name="my-location" size={30} color="#FFF" />
			</TouchableOpacity>

		</View>
	)
}

const styles = StyleSheet.create({
	header: { fontWeight: 'bold' },
	description: {
		borderRadius: 25,
		position: "absolute",
		bottom: 40,
		left: 20,
		flexDirection: 'column'
	},
	item: {
		fontSize: 20
	},
	temp: {
		fontSize: 30, fontWeight: 'bold', textAlign: "center"
	},
	tempNow: { fontSize: 100, textAlign: 'center' },
	search: {
		textAlign: "center",
		fontSize: 25,
		fontWeight: 'bold',
		margin: 20
	},
	loadButton: {
		width: 50,
		height: 50,
		backgroundColor: "#8E4Dff",
		borderRadius: 25,
		justifyContent: "center",
		alignItems: "center",
		position: "absolute",
		bottom: 20,
		right: 20,
	},
	title: {
		marginTop: 20,
		fontSize: 25,
		textAlign: 'center'
	},

	searchForm: {
		position: "absolute",
		top: 20,
		left: 20,
		right: 20,
		zIndex: 5,
		flexDirection: "row",
	},
	container: {
		backgroundColor: 'white', flex: 1, padding: 20
	}
})

export default Main