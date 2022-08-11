import React,{useCallback, useEffect, useState} from 'react'
import RootNavigator from './src/navigation'
import { useFonts } from 'expo-font';
import { QueryClient,QueryClientProvider } from '@tanstack/react-query'
import { RootSiblingParent } from 'react-native-root-siblings';


const queryClient = new QueryClient()
   
export default function App() {
	const [loaded] = useFonts({
	   	Abel: require("./assets/fonts/Abel-Regular.ttf"),
	    DMSans_regular: require("./assets/fonts/DMSans-Regular.ttf"),
		DMSans_medium: require("./assets/fonts/DMSans-Medium.ttf"),
		DMSans_bold: require("./assets/fonts/DMSans-Bold.ttf"),
	});
	
	if (!loaded) {
	   return null;
	}
  
  	return (
  		<QueryClientProvider client={queryClient}>
  			<RootSiblingParent>  
  				<RootNavigator />
  			</RootSiblingParent>
  		</QueryClientProvider>
  	
    
  	);
}
