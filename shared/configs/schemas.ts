import * as yup from 'yup';

const stringSchema = yup.string();

export const userPostScoreSchema = yup.object().shape({
  userName: stringSchema.required('UserName is required'),
});
