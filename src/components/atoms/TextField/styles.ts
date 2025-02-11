import { Platform, StyleSheet } from 'react-native';
import useDimensions from '../../../hooks/useDimension';
import AppColors from '../../../theme/appColor';
import FontFamily from '../../../utils/FontFamily';


const style = ()=>{
   const { height, width, scale, fontScale } = useDimensions();

return StyleSheet.create({
    container:{
        width:'86%'
    },
    titleContainerStyle:{
        color: AppColors.textColor,
        fontSize: fontScale(16),
        fontFamily: FontFamily.QuicksandSemiBold,
        marginTop: height(1.65),
    },
    phoneNumberFieldBackground:{
        borderRadius: 14,
        backgroundColor:AppColors.white,
    },
    focusedInputContainer:{
        borderColor: AppColors.primaryBorder,
        borderWidth: Platform.OS === 'ios' ? 1.35 : 1.45
    },
    inputContainer: {
        height: height(5.7),
        marginTop: 15,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'center',
        borderRadius: scale(2.5),
        borderColor: AppColors.secondaryBorder,
        borderWidth: Platform.OS === 'ios' ? 1.35 : 1.45,
        backgroundColor:AppColors.white,
      },
      input: {
        flex: 1,
        fontFamily:FontFamily.QuicksandMedium,
        paddingLeft: width(3.5),
        fontSize: fontScale(18),
        borderRadius: scale(2.5),
      },
      phoneNumberStylying:{
        letterSpacing: 3,
      },
      eyeIconContainer: {
        padding: 10,
        paddingRight:15,
        justifyContent: 'center',
        alignItems: 'center',
      },
      countryPickerDownArrow:{
        height:'100%', 
        justifyContent:'center'
      },
      focusedTextField:{
        borderColor: AppColors.primaryBorder,
        borderWidth: 5,
      },

})};

export default style;
