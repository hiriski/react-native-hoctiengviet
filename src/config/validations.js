import * as Yup from 'yup';

/**
 * Validation schema for create phrase.
 */
export const phrasebookSchema = Yup.object().shape({
  id_ID: Yup.string().required('Kolom B. Indonesia harus di isi'),
  vi_VN: Yup.string().required('Kolom Tiếng Việt harus di isi'),
});

/**
 * Login validation.
 */
export const loginSchema = Yup.object().shape({
  password: Yup.string().required('Kolom Password harus di isi'),
});
