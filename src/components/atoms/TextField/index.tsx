import React, { useState } from "react";
import {
  TextInput,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  ViewStyle,
  ReturnKeyTypeOptions,
  TouchableOpacity,
  Text,
} from "react-native";
import AppColors from "../../../theme/appColor";
import { EyeOffIcon, EyeOnIcon } from "../../../assets/images";
import style from "./styles";

interface TextFieldProps {
  title?:string,
  value: string;
  textFieldstyle?: ViewStyle;
  maxLength?: number;
  placeholder?: string;
  autoFocus?: boolean,
  isDisabled?: boolean;
  isEditable?: boolean;
  secureTextEntry?: boolean;
  containerStyle?: ViewStyle;
  returnKeyType?: ReturnKeyTypeOptions;
  keyboardType?: 'default' | 'email-address' | 'numeric';
  onChangeText: (text: string) => void;
}

const TextField = ({
  value,
  title='',
  textFieldstyle = {},
  maxLength,
  autoFocus = false,
  isDisabled = false,
  isEditable = true,
  placeholder = '',
  containerStyle = {},
  keyboardType = "default",
  secureTextEntry = false,
  returnKeyType = 'default',
  onChangeText,
  ...restProps
}: TextFieldProps) => {
  const styles = style();
  const [isFocused, setIsFocused] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const handleOnEyeIconPress = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={[styles.container, containerStyle]}>
        <Text style={styles.titleContainerStyle}>{title}</Text>
        <View style={[styles.inputContainer, isFocused && styles.focusedInputContainer]}>
          <TextInput
            {...restProps}
            style={[
              styles.input,
              textFieldstyle,
            ]}
            placeholderTextColor={AppColors.placeHolderGray}
            placeholder={value !== "" || isFocused ? "" : placeholder}
            value={value}
            editable={isEditable}
            autoFocus={autoFocus}
            onChangeText={onChangeText}
            keyboardType={keyboardType}
            autoCapitalize="none"
            maxLength={maxLength}
            secureTextEntry={secureTextEntry && !isPasswordVisible}
            onFocus={handleFocus}
            onBlur={handleBlur}
            returnKeyType={returnKeyType}
          />
          {secureTextEntry && (
            <TouchableOpacity onPress={handleOnEyeIconPress} style={styles.eyeIconContainer}>
              {isPasswordVisible ? <EyeOnIcon /> : <EyeOffIcon />}
            </TouchableOpacity>
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default TextField;
