import React from "react";
import { Text, ButtonProps as RNButtonProps, ViewStyle, TextStyle, Pressable, } from "react-native";
import style from "./styles";

interface ButtonProps extends Partial<RNButtonProps> {
    title: string,
    onPress?: () => void;
    containerStyle?: ViewStyle,
    labelStyle?: TextStyle,
    disable?: boolean,
    Icon?: React.ReactElement;
}

const DefaultButton = ({ title, disable = false, onPress, containerStyle={}, labelStyle={}, Icon, ...restProps} : ButtonProps) => {
  const styles = style();
  return (
    <Pressable style={[ styles.buttonContainer, disable &&  styles.disableButton , containerStyle ]} onPress={onPress} disabled={disable} {...restProps}>
      <Text style={[styles.buttonTextStyle, labelStyle]}>
        {title}
      </Text>
      {Icon ? Icon : null}
    </Pressable>
  );
};

export default DefaultButton;
