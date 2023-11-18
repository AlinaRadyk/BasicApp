import React from 'react';
import { Formik } from 'formik';
import { TouchableWithoutFeedback, Keyboard, View } from 'react-native';

import styles from 'components/common/Form/style';
import { Props } from 'components/common/Form/types';

const Form: React.FC<Props> = ({
  innerRef,
  onSubmit,
  initialValues,
  validationSchema,
  children,
  formStyle,
}) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <View style={[styles.wrapper, formStyle]}>
      <Formik
        innerRef={innerRef}
        enableReinitialize
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {children}
      </Formik>
    </View>
  </TouchableWithoutFeedback>
);

export default Form;
