import { StyleSheet, Dimensions, StatusBar } from 'react-native';
import {Colors, Typography, Mixins} from '../../styles'

export const styles = StyleSheet.create({
	container:{
		flex:1, 
		marginLeft:20, 
		marginRight:20, 
		height:'100%'
	},
	welcomeTextContainer:{
		flexDirection:'row', 
		marginHorizantal:'5%', 
		marginVertical:'1%'
	},
	welcomeText:{
		color:Colors.PRIMARY_BLACK,
		fontFamily:Typography.FONT_FAMILY_ABEL, 
		fontSize:Typography.FONT_SIZE_32,
		marginVertical:10,
	},
	searchLabelText:{
		fontFamily:Typography.FONT_FAMILY_DMSANS_MEDIUM,
		fontWeight:Typography.FONT_WEIGHT_500,
		color:Colors.PRIMARY_BLACK, 
		opacity:0.5,
		fontSize:Typography.FONT_SIZE_16,
		// marginVertical:'1.5%',
		marginBottom:5,
		lineHight: Typography.LINE_HEIGHT_24
	},
	searchContainer:{
		marginBotton:10,
		marginRight:10,
		height:70,
		backgroundColor: '#FFF',
		alignItems:'center',
		flexDirection:'row', 
		marginHorizantal:'1%', 
		borderRadius:12
	},
	searchInput:{
		flex:1, 
		marginLeft:0, 
		paddingLeft:10,
		color:Colors.PRIMARY_BLACK,
		fontSize:Typography.FONT_SIZE_16,
		fontFamily: Typography.FONT_FAMILY_DMSANS_REGULAR,
		lineHight: Typography.LINE_HEIGHT_24
	},
	searchResultText:{
		fontFamily:Typography.FONT_FAMILY_ABEL, 
		color:Colors.PRIMARY_BLACK,
		fontSize:Typography.FONT_SIZE_20,
		marginVertical:10, 
		lineHight: Typography.LINE_HEIGHT_28
	},
	itemsCardContainer:{
		overFlow:'hidden', 
		backgroundColor:'white', 
		borderRadius:20, 
		marginTop:'5%', 
		paddingBottom:20, 
	},
	favCountContainer:{
		position:'absolute',
		flexDirection:'row',
		alignItems: 'center',
		justifyContent:'center',
		alignSelf:'flex-end',
		top:15,
		right:15
	},
	favCounterText:{
		color:'#FFFFFF',
		fontFamily:Typography.FONT_FAMILY_DMSANS_REGULAR,
		fontSize:Typography.FONT_SIZE_12,
		fontWeight:Typography.FONT_WEIGHT_700,
		lineHight:Typography.LINE_HEIGHT_16,
	},
	favIconPlaceHolder:{
		height: 40,
		width: 40,
		borderRadius:20,
		backgroundColor: "#FFF",
		alignItems: "center",
		justifyContent: "center",
		alignSelf: "flex-end"
	},
	addToCartPlaceHolder:{
		height: 50,
		width: 50,
		borderBottomRightRadius: 20,
		borderTopLeftRadius: 20,
		backgroundColor: Colors.PRIMARY_RED,
		alignItems: "center",
		justifyContent: "center",
		position: "absolute", //Here is the trick
		bottom:0,
		alignSelf: "flex-end"
	},
	itemTitleHolder:{
		flexDirection:'row', 
		justifyContent:'space-between', 
		alignItems:'center', 
		marginTop:'3%'
	},
	itemTitle:{
		fontFamily:Typography.FONT_FAMILY_DMSANS_BOLD,
		fontSize:Typography.FONT_SIZE_16, 
		fontWeight:Typography.FONT_WEIGHT_700, 
		color:Colors.PRIMARY_BLACK,
		lineHight:Typography.LINE_HEIGHT_24
	},
	paleoIconHolder:{
		marginRight:'5%',
		height: 35,
		width: 35,
		borderRadius:17.5,
		borderWidth:2,
		borderColor:Colors.MEDIUM_GREY,
		alignItems: "center",
		justifyContent: "center",
	},
	dietryInfoHolder:{
		flexDirection:'row', 
		justifyContent:'flex-start', 
		alignItems:'center', 
		marginTop:'1%'
	},
	dietryInfoText:{
		fontFamily:Typography.FONT_FAMILY_DMSANS_MEDIUM,
		opacity:0.5,
		fontSize:Typography.FONT_SIZE_12, 
		fontWeight:Typography.FONT_WEIGHT_500, 
		color:Colors.PRIMARY_BLACK
	},
	itemDescription:{
		fontFamily:Typography.FONT_FAMILY_DMSANS_MEDIUM,
		fontSize:Typography.FONT_SIZE_16, 
		fontWeight:Typography.FONT_WEIGHT_500, 
		color:Colors.PRIMARY_BLACK,
		lineHight:Typography.LINE_HEIGHT_16
	},
	itemPrice:{
		fontFamily:Typography.FONT_FAMILY_DMSANS_BOLD,
		fontSize:Typography.FONT_SIZE_14, 
		fontWeight:Typography.FONT_WEIGHT_700, 
		color:Colors.PRIMARY_BLACK,
		lineHight:Typography.LINE_HEIGHT_24
	}
	

})
