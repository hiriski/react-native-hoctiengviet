import * as Yup from 'yup';

export const phrasebookSchema = Yup.object().shape({
  id_ID: Yup.string().required('Kolom B. Indonesia harus di isi'),
  vi_VN: Yup.string().required('Kolom Tiếng Việt harus di isi'),
});
