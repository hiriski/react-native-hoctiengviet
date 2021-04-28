import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, Input, Text} from '@ui-kitten/components';
import {Formik} from 'formik';
import {phrasebookSchema} from '../../../config/validations';
import {MARGIN, PADDING} from '../../../components/config/spacing';
import FormInput from '../../../components/partials/FormInput';
import InputHelper from '../../../components/partials/InputHelper';
import {createPhrase} from '../../../modules/phrasebook/actions';
import {useDispatch, useSelector} from 'react-redux';

const CreatePhraseForm = () => {
  const dispatch = useDispatch();

  /**
   * Form initial values
   */
  const initialValues = {
    category_id: '1',
    id_ID: '',
    vi_VN: '',
    en_US: '',
    notes: '',
  };

  const handleFormSubmit = (values) => {
    dispatch(createPhrase(values));
  };

  return (
    <View style={styles.root}>
      <Formik
        initialValues={initialValues}
        validationSchema={phrasebookSchema}
        onSubmit={(values) => handleFormSubmit(values)}>
        {({handleChange, handleBlur, handleSubmit, errors, values}) => (
          <View style={styles.formContainer}>
            <FormInput
              placeholder="Category id"
              name="category_id"
              onChangeText={handleChange('category_id')}
              onBlur={handleBlur('category_id')}
              value={values.category_id}
            />
            {errors.category_id && <InputHelper text={errors.category_id} />}
            <FormInput
              placeholder="B. Indonesia.."
              name="id_ID"
              onChangeText={handleChange('id_ID')}
              onBlur={handleBlur('id_ID')}
              value={values.id_ID}
            />
            {errors.id_ID && <InputHelper text={errors.id_ID} />}
            <FormInput
              placeholder="Tiếng Việt.."
              name="vi_VN"
              onChangeText={handleChange('vi_VN')}
              onBlur={handleBlur('vi_VN')}
              value={values.vi_VN}
            />
            {errors.vi_VN && <InputHelper text={errors.vi_VN} />}
            <FormInput
              placeholder="English.."
              name="en_US"
              onChangeText={handleChange('en_US')}
              onBlur={handleBlur('en_US')}
              value={values.en_US}
            />
            {errors.en_US && <InputHelper text={errors.en_US} />}
            <FormInput
              placeholder="Notes..."
              name="notes"
              onChangeText={handleChange('notes')}
              onBlur={handleBlur('notes')}
              value={values.notes}
              multiline={true}
              textStyle={{minHeight: 100}}
              textAlignVertical="top"
            />
            {errors.notes && <InputHelper text={errors.notes} />}
            <Button onPress={handleSubmit}>Submit</Button>
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    marginVertical: MARGIN.LARGE,
  },
  formContainer: {
    paddingHorizontal: PADDING.LARGE,
  },
});

export default CreatePhraseForm;
