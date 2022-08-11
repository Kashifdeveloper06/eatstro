import React, {useState, useEffect} from 'react'
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity,TouchableWithoutFeedback,ScrollView,FlatList,StyleSheet, Text, View, SafeAreaView, Dimensions,TextInput, ImageBackground,Keyboard,Image } from 'react-native';
import {Colors, Typography, Mixins} from '../../styles'
import Ionicons from '@expo/vector-icons/Ionicons'
import HeartActive from '../../components/svg/heart-active'
import PaleoSvgComponent from '../../components/svg/paleo'
import CalFireSvgComponent from '../../components/svg/cal-fire'
import PepperInactiveSvgComponent from '../../components/svg/pepper-inactive'
import PepperActiveSvgComponent from '../../components/svg/pepper-active'
import {usePosts} from '../../hooks/use-request'
import useStore from '../../store'
import Toast from 'react-native-root-toast';
import {styles} from './styles'
import ExpoFastImage from 'expo-fast-image'

const{width, height} = Dimensions.get('window')



const HomeScreen = ({ navigation }) =>  {


	const [searchEventText, setSearcheventText] = useState("")
	const [searchInFocus, setSearchInFocus] = useState(false)
	const [showSearchTerm, setShowSearchTerm] = useState(false)
	const [items, setItems] = useState([])
	const localItems = useStore(state => state.localItems)
	const updateItem = useStore(state => state.updateItem)
	const [counter, setCounter] = useState(1)
	const{data,isLoading,isFetching,status, isSucces, error} = usePosts()

	
	useEffect(()=>{
		setItems(data?.items)
	},[data?.items])

	const handleSearchEvent = value => {
		setSearcheventText(value)
		if (value.length >= 1) {
			setSearchInFocus(true)
		}else{
			setSearchInFocus(false)
			setShowSearchTerm(false)
		}
	}

	const onSubmitHandler = event => {
		let searchArray = searchEventText.trim().split(" ");
		let re = new RegExp(searchArray.join("|"), "i");
		let resultsObj = items.filter(item =>
		    re.test(item.desc) ||
		    re.test(item.dietaryChoice) ||
		    re.test(item.price)
		);
		setItems(resultsObj)
		setShowSearchTerm(true)


	}
	const _removeSearch = () =>{
		setSearcheventText("")
		Keyboard.dismiss()
		setSearchInFocus(false)
		setShowSearchTerm(false)
		setItems(data?.items)
	}

	const onUpdateItem = (item, index) => {
		
		let _items = [...items]
		let _item = {..._items[index]}
		_item.favoriteCount = _item.favoriteCount + 1

		_items[index] = _item
		setItems(_items)
	}
	const _onAddToCart = () =>{
		let toast = Toast.show('Added to Cart.', {
		  duration: Toast.durations.LONG,
		  shadow:true,
		  backgroundColor:Colors.PRIMARY_RED,
		  position:0
		});
	}

	const _renderItem = ((item, index) => {
		
		let _item = item.item
		let _index = item.index

		return(
			<View style={styles.itemsCardContainer}>
				<View style={{shadowColor: '#202020',shadowOffset: {width: 0, height: 0},shadowRadius: 5,}}>
				<ExpoFastImage
					source={{uri:_item.photo}}
					resizeMode='cover'
					style={{width:'100%', height:Mixins.scaleHeight(135), borderRadius:20}}
				/>
					<View style={styles.favCountContainer}>
			  	
				  	<View style={{justifyContent:'center', alignItems:'center', marginRight:5}}>
				  		<Text style={styles.favCounterText}>{_item.favoriteCount}</Text>
				  	</View>
				  	<TouchableOpacity
				  		onPress={()=>onUpdateItem(_item,_index)}
				  	>
				  	<View
			          style={styles.favIconPlaceHolder}
			         >
			          <HeartActive />
			        </View>
			        </TouchableOpacity>
		        </View>

			  	<TouchableOpacity onPress={_onAddToCart}>
			  	<View
		          style={styles.addToCartPlaceHolder}
		         >
		          <Ionicons name="add-outline" size="35" color="#FFF" />
		        </View>
		        </TouchableOpacity>

		        </View>
		        <View style={styles.itemTitleHolder}>
		  		<View style={{marginLeft:'5%'}}><Text style={styles.itemTitle}>{_item.desc}</Text></View>
		  		<View style={styles.paleoIconHolder}>
		  			<PaleoSvgComponent />
		  		</View>
		  		
		  	</View>
		  	<View style={styles.dietryInfoHolder}>
		  		<View style={{marginLeft:'5%'}}>
		  			<CalFireSvgComponent />
		  		</View>
		  		<View style={{marginLeft:'1%'}}><Text style={styles.dietryInfoText}>749 Kcal</Text></View>
		  		
		  	</View>

		  	<View style={{
		  		marginTop:'2%',
		  		marginLeft:'5%'
		  	}}>
		  		<Text style={styles.itemDescription}>Homemade beef cutlet with signature sauce with parmesan and mustard will not leave you indifferent...
		  		</Text>
		  		
		  	</View>
		  	<View style={styles.itemTitleHolder}>
		  		<View style={{marginLeft:'5%'}}><Text style={styles.itemPrice}>$14</Text></View>
		  		<View style={{marginRight:'5%',flexDirection:'row'}}>
		  			<PepperActiveSvgComponent />
		  			<PepperInactiveSvgComponent />
		  			<PepperInactiveSvgComponent />
		  		</View>
		  		
		  	</View>

			</View>
		)
	})

  	return(
	  <SafeAreaView style={styles.container}>
		  <StatusBar style="auto" />
		  <View style={styles.welcomeTextContainer}>
		  		<Text style={styles.welcomeText}>Hi, User!</Text>
		  	
		  </View>

		  <View style={{flexDirection:'row'}}>
		  		<Text style={styles.searchLabelText}>
		  			What would you like to eat today?
		  		</Text>
		  	
		  </View>

		  <View style={styles.searchContainer}>
		  	
		  	<Ionicons
		  		style={{opacity:0.5, marginLeft:'5%'}}
		  		name={"ios-search-outline"}
		  		size="25"
		  		color='#222B32'
		  	/>

		  	<TextInput 
		  		value={searchEventText}
		  		onChangeText={value => handleSearchEvent(value)}
		  		placeholder="Search something..."
		  		placeholderTextColor="#D1D1D1"
		  		style={styles.searchInput}
		  		keyboardType="default"
		  		textStyle={{fontSize:Typography.FONT_SIZE_24,color:'red'}}
		  		size='small'
		  		returnKeyType="search"
		  		autoCapitalize="none"
		  		onSubmitEditing={(event) => onSubmitHandler(event)}
		  	/>
		  	{searchInFocus && <TouchableOpacity onPress={_removeSearch}><Ionicons
		  		style={{opacity:0.5, marginRight:'1.5%'}}
		  		name={"close"}
		  		size="30"
		  		color='#222B32'
		  	/></TouchableOpacity>}
		  </View>

		  <View style={{flexDirection:'row', marginHorizantal:'5%', marginVertical:'2%'}}>
		  	{showSearchTerm && 
		  		<Text style={styles.searchResultText}>Search results for: {searchEventText} </Text>
		  	
		  	}
		  </View>
		  
		  {isLoading  && <View><Text>Loading....</Text></View> }
		  	
		  	{items && <View style={{flex:1}}>
					<FlatList
					  	style={{felx:1}}
				        data={items}
				        contentContainerStyle={{ paddingBottom: 90}}
				        showsVerticalScrollIndicator={false}
				        renderItem={(item, index) => _renderItem(item,index)}
				        keyExtractor={item => item.id.toString()}
				        
				      />
				</View>
		  	}



	  </SafeAreaView>
  )
}

export default HomeScreen
