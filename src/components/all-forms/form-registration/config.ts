import * as Yup from 'yup';

export interface IValuesProps {
  phone: string;
  email: string;
  password: string;
  lastName: string;
  firstName: string;
  subPassword: string;
}

export const initialValues: IValuesProps = {
  phone: '',
  email: '',
  password: '',
  lastName: '',
  firstName: '',
  subPassword: '',
};
//TODO  validation sub-password
export const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .matches(
      /^\p{Lu}\p{Ll}*$/u,
      'the first letter must be a capital letter or an invalid character'
    )
    .min(4, 'min 4 symbols')
    .max(16, 'max 16 symbols')
    .required("the field can't be empty."),
  lastName: Yup.string()
    .matches(
      /^\p{Lu}\p{Ll}*$/u,
      'the first letter must be a capital letter or an invalid character'
    )
    .min(4, 'min 4 symbols')
    .max(16, 'max 16 symbols')
    .required("the field can't be empty."),
  email: Yup.string()
    .matches(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'error')
    .min(4, 'min 10 symbols')
    .max(16, 'max 150 symbols')
    .required("the field can't be empty."),
  phone: Yup.string()
    .matches(/^\+\d{2}\(\d{3}\)\d{3} \d{2} \d{2}$/, {
      message: 'The phone number must be in the format +1234567890',
      // excludeEmptyString: false,
    })
    .required('Required Phone'),
});
