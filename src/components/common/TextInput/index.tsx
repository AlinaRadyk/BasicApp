import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { TextInput, Text } from 'react-native-paper';

import { COLORS, MODES } from 'constants/index';

import { getMode } from 'modules/app/selectors';

import { Props } from 'components/common/TextInput/types';

import s from 'components/common/TextInput/style';

const Input: React.FC<Props> = ({
  icon,
  label,
  testID,
  errorTestId,
  values,
  handleBlur,
  handleChange,
  name,
  isPassword,
  keyboardType = 'default',
  errors,
  customStyles,
  placeholder,
  multiline,
  onEndEditing,
}) => {
  const mode = useSelector(state => getMode(state));
  const isDarkMode = mode === MODES.DARK;

  const borderColor = isDarkMode ? COLORS.border : COLORS.chatDarkBackground;

  useEffect(() => {
    if (isPassword) {
      setSecureTextEntry(true);
    }
  }, []);

  const [secureTextEntry, setSecureTextEntry] = useState(false);

  const isWithError = errors[name];

  const handleRenderRightIcon = () => (
    <TextInput.Icon
      style={s.icon}
      icon={secureTextEntry ? 'eye-off-outline' : 'eye-outline'}
      color={COLORS.brand}
      onPress={() => setSecureTextEntry(!secureTextEntry)}
    />
  );

  return (
    <View style={s.container}>
      {Boolean(label) && (
        <Text style={s.label}>{label}</Text>
      )}
      <TextInput
        left={icon ? <TextInput.Icon style={s.icon} icon={icon} color={COLORS.brand} /> : undefined}
        right={isPassword ? handleRenderRightIcon() : undefined}
        testID={testID}
        mode="outlined"
        autoCapitalize="none"
        multiline={multiline}
        numberOfLines={multiline ? 5 : undefined}
        placeholder={placeholder}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        value={values[name]}
        outlineColor={isWithError ? COLORS.errorText : COLORS.border}
        activeOutlineColor={isWithError ? COLORS.errorText : borderColor}
        style={[s.input, customStyles]}
        onBlur={handleBlur(name)}
        onChangeText={handleChange(name)}
        onEndEditing={onEndEditing}
      />
      <Text testID={errorTestId} style={[s.errorText, isWithError && { display: 'flex' }]}>{errors[name]}</Text>
    </View>
  );
};

export default Input;
