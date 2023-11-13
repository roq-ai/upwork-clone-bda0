import * as yup from 'yup';

export const applicationsValidationSchema = yup.object().shape({
  user_id: yup.string().nullable().required(),
});
