import { FormikValues } from 'formik';

export interface Props {
  email: string,
  remember?: boolean,
  password: string,
  onSubmit: (values: FormikValues) => void,
}
