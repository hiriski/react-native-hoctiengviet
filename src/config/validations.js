import * as Yup from 'yup';

/**
 * schema for create phrase.
 */
export const phrasebookSchema = Yup.object().shape({
  id_ID: Yup.string().required('Kolom B. Indonesia harus di isi'),
  vi_VN: Yup.string().required('Kolom Tiếng Việt harus di isi'),
});

/**
 * Login schema.
 */
export const loginSchema = Yup.object().shape({
  username: Yup.string().required('Username/Email harus di isi.'),
  password: Yup.string().required('Password harus di isi.'),
});

/**
 * Register schema.
 */
export const registerSchema = Yup.object().shape({
  name: Yup.string().required('Nama harus di isi.'),
  email: Yup.string()
    .email('Opss.. sepertinya email yang kamu masukan salah.')
    .required('Email harus di isi.'),
  password: Yup.string().required('Password harus diisi.'),
  password_confirmation: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Password konfirmasi harus sama',
  ),
});
