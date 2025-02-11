import React from 'react';
import { View, Text, Pressable, StyleSheet, ViewStyle, TextStyle, Platform } from 'react-native';
import { BackArrow } from '../../../assets/images';
import useDimensions from '../../../hooks/useDimension';
import AppColors from '../../../theme/appColor';
import FontFamily from '../../../utils/FontFamily';
import useNavigation from '../../../navigation/use-navigation';
import UnAuthStackParams from '../../../navigation/UnAuthStackParams';
import AuthStackParams from '../../../navigation/AuthStackParams';

interface HeaderProps {
  title: string;
  onBackPress?: () => void;
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
  withBackground?: boolean;
}

const Header: React.FC<HeaderProps> = ({ title, onBackPress, containerStyle, textStyle, withBackground = false }) => {
  const styles = style();
  const navigation = useNavigation<UnAuthStackParams | AuthStackParams>();
  const handleOnBackPress = () => {
    if (onBackPress === undefined) navigation.goBack();
      else onBackPress();
  };
  return (
    <View style={[styles.headerContainer, containerStyle]}>
      <Pressable onPress={handleOnBackPress} style={[withBackground && styles.backArrowContainer]}>
        <BackArrow />
      </Pressable>
      <Text style={[styles.headerText, textStyle]}>{title}</Text>
    </View>
  );
};
const style = ()=>{
    const { height, width, fontScale, scale } = useDimensions();
    return StyleSheet.create({
        headerContainer:{
            gap: width(3.5),
            width: width(100),
            marginTop: Platform.OS === 'ios' ? height(7) : height(6),
            paddingHorizontal: width(6),
            flexDirection:'row',
            alignItems:'center',
        
          },
          backArrowContainer:{
            width: height(5),
            height: height(5),
            borderRadius: scale(10),
            paddingRight: width(1),
            alignItems:'center',
            justifyContent:'center',
            backgroundColor: AppColors.white,
            shadowColor: Platform.OS === 'ios' ? 'rgba(0, 0, 0, 0.15)' : 'rgba(0, 0, 0, 0.4)',
            shadowOffset: {
              width: 0,
              height: 0,
            },
            shadowOpacity: 1,
            shadowRadius: 2.5,
            elevation: 4,
          },
          headerText:{
            fontFamily: FontFamily.QuicksandBold,
            fontSize: fontScale(20),
            paddingBottom: Platform.OS === 'ios' ? 0 : height(0.4)
          }
})};
export default Header;


