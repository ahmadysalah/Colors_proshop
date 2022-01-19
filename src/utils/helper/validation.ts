import * as Yup from 'yup';

export interface IschemaValidationLogin {
  email: string;
  password: string;
  ischeckbox?: boolean;
}

export const schemaValidationLogin =
  (): Yup.SchemaOf<IschemaValidationLogin> => {
    return Yup.object().shape({
      email: Yup.string()
        .email('it should be correct email')
        .min(5, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required email'),
      password: Yup.string().min(4, 'Too Short!').required('Required'),
      ischeckbox: Yup.boolean().optional(),
    });
  };

export interface ISchemaValidationSuginup {
  email: string;
  name: string;
  password: string;
  passwordConfirmation: string;
}

export const schemaValidationSignUp =
  (): Yup.SchemaOf<ISchemaValidationSuginup> => {
    return Yup.object({
      email: Yup.string()
        .email('it should be correct email ')
        .min(5, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required email'),
      name: Yup.string()
        .required('Name is a required field')
        .min(3, 'Name must be at least 3 characters'),
      password: Yup.string()
        .min(4, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),

      passwordConfirmation: Yup.string()
        .required('Please confirm your password')
        .when('password', {
          is: (password: string) => !!(password && password.length > 0),
          then: Yup.string().oneOf(
            [Yup.ref('password')],
            "Password doesn't match",
          ),
        }),
    });
  };

export const updateProfileSchema = Yup.object({
  name: Yup.string().required('Please enter a name'),
  email: Yup.string()
    .email('Please enter a valid email')
    .required('Please enter an email'),
  password: Yup.string().min(6),
  passwordConfirmation: Yup.string()
    .min(6)
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

export type updateProfileSchemaType = Yup.InferType<typeof updateProfileSchema>;

export interface IShippingSchema {
  country: string;
  city: string;
  zip: number;
  address: string;
}
export const ShippingSchema = (): Yup.SchemaOf<IShippingSchema> => {
  return Yup.object().shape({
    country: Yup.string().required('Please enter country name'),
    city: Yup.string().required('Please enter city name'),
    zip: Yup.number().required('Please enter your address'),
    address: Yup.string().required('Please enter your address'),
  });
};
