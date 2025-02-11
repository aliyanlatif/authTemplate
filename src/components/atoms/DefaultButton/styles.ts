import { StyleSheet } from 'react-native';
import useDimensions from '../../../hooks/useDimension';
import AppColors from '../../../theme/appColor';

const style = () => {
   const { height, width, scale, fontScale } = useDimensions();

    return StyleSheet.create({
        buttonContainer: {
            gap: width(2.2),
            width: "85%",
            flexDirection:'row',
            alignSelf:'center',
            alignItems: "center",
            justifyContent: "center",
            paddingVertical: height(1.65),
            borderRadius: scale(2.5),
            backgroundColor: AppColors.primary, 
        },
        buttonTextStyle: {
            color: AppColors.white,
            fontSize: fontScale(16),
            fontWeight: '600',
        },
        disableButton:{
            opacity: 0.8
        }
})};
export default style;
