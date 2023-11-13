import * as yup from 'yup';

export const jobsValidationSchema = yup.object().shape({
  company_id: yup.string().nullable().required(),
});
