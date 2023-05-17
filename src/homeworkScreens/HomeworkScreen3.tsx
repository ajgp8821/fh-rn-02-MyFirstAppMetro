import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const HomeworkScreen3 = () => {
	return (
		<View style={styles.container}>
			<View style={styles.purpleBox} />
			<View style={styles.orangeBox} />
			<View style={styles.blueBox} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#28425B',
		justifyContent: 'center'
	},
	purpleBox: {
		width: 100,
		height: 100,
		borderWidth: 10,
		borderColor: 'white',
		backgroundColor: '#5856D6',
		alignSelf: 'flex-end',
	},
	orangeBox: {
		width: 100,
		height: 100,
		borderWidth: 10,
		borderColor: 'white',
		backgroundColor: '#F0A23B',
		alignSelf: 'flex-start',
	},
	blueBox: {
		width: 100,
		height: 100,
		borderWidth: 10,
		borderColor: 'white',
		backgroundColor: '#28C4D9',
		alignSelf: 'center',
	}
})
