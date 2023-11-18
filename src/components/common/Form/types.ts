import { StyleProp, ViewStyle } from 'react-native';
import { FormikValues } from 'formik';

export interface Values {
  email?: string;
  notes?: string;
  remember?: boolean;
  visible?: boolean | null | string;
  password?: string;
  job?: object | null;
  task?: object | null;
  employee?: object | null;
  date?: Date | null;
  timeFrom?: Date | null;
  timeTo?: Date | null;
  mode?: string | null;
  selectedInput?: string;
  isBillable?: boolean;
}

export interface Props {
  onSubmit: (values: FormikValues) => void;
  initialValues: Values;
  validationSchema: any;
  formStyle?: StyleProp<ViewStyle>;
  children?: any;
  innerRef?: any;
}
