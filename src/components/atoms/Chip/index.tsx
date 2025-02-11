import React from 'react';
import { View, Text, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import useDimensions from '../../../hooks/useDimension';
import AppColors from '../../../theme/appColor';
import FontFamily from '../../../utils/FontFamily';

interface ChipProps {
  icon: React.ReactNode;
  title: string;
  containerStyle?: StyleProp<ViewStyle>;
}

const Chip: React.FC<ChipProps> = ({ icon, title, containerStyle={}}) => {
    const styles = style();
  return (
    <View style={[styles.chipContainer, containerStyle]}>
      <View>{icon}</View>
      <Text style={styles.claimStatusText}>{title}</Text>
    </View>
  );
};

const style = () => {
    const { height, width, fontScale, scale } = useDimensions();
    return StyleSheet.create({
    chipContainer:{
        width: '53%',
        gap: width(1.2),
        flexDirection:'row',
        alignItems:'center',
        borderRadius: scale(2.2),
        paddingHorizontal: width(1.8), 
        paddingVertical:height(0.4),
        backgroundColor: AppColors.pendingGray,
      },
        claimStatusText:{
        color: AppColors.white,
        fontFamily: FontFamily.QuicksandSemiBold,
        fontSize: fontScale(12),
      },
  })};
  

export default Chip;
