import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import AppColors from "../../../theme/appColor";

interface LoaderWithOverlayProps {
  variant?: 'primary' | 'secondary';
  testID?: string;
  message?: string;
}
export default function LoaderWithOverlay({
  message = '',
  variant = 'primary',
  testID,
}: LoaderWithOverlayProps) {
  return (
    <View testID={`LoaderWithOverlay-${testID}`} style={styles.containerStyle}>
      <View style={styles.contentContainerStyle} />
      <ActivityIndicator size={'large'} style={styles.animation} color={VARIANTS[variant].color}/>
      {message ? (
        <View style={styles.messageContainerStyle}>
          <Text style={[styles.messageStyle, {color: VARIANTS[variant].color}]}>
            {message}
          </Text>
        </View>
      ) : null}
    </View>
  );
}
const VARIANTS = {
  primary: { color: AppColors.primary },
  secondary: { color: AppColors.white },
} as const;

const styles = StyleSheet.create({
    containerStyle:{
        ...StyleSheet.absoluteFillObject,
        justifyContent:'center',
        alignItems:'center',
        gap:10,
    },
    contentContainerStyle:{
        backgroundColor: AppColors.black6,
        ...StyleSheet.absoluteFillObject,
    },
    messageContainerStyle:{
        paddingHorizontal:32,
    },
    messageStyle:{
        textAlign:'center',
    },
    animation: {
        width: 150,
        height: 150,
    },
});
