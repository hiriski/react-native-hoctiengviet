import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, Input, Text} from '@ui-kitten/components';
import {phrasebookSchema} from '../../../config/validations';
import {MARGIN, PADDING, SPACING_BASE, SPACING_BIG} from '../../../components/config/spacing';
import InputHelper from '../../../components/partials/InputHelper';
import {createPhrase} from '../../../modules/phrasebook/actions';
import {useDispatch, useSelector} from 'react-redux';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import InputBorderBottom from '../../../components/partials/InputBorderBottom';
import RadioCategory from './RadioCategory';

const CreatePhraseForm = () => {
  const dispatch = useDispatch();

  const [categoryId, setCategoryId] = React.useState(1);

  const {
    register,
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

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
    dispatch(createPhrase(
{
        ...values,
        category_id: categoryId
    }));
  };

  return (
    <View style={styles.root}>
      <RadioCategory setCategoryId={setCategoryId}/>
      <View style={styles.formContainer}>
        <View style={styles.viewInput}>
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <InputBorderBottom
                placeholder="Bahasa Indonesia.."
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
              />
            )}
            name="id_ID"
            rules={{required: false}}
            defaultValue={''}
          />
          {errors.id_ID && (
            <InputHelper type="error" text={'Field is required'} />
          )}
          {!errors.id_ID && <InputHelper text="Bahasa indonesia" />}
        </View>

        <View style={styles.viewInput}>
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <InputBorderBottom
                placeholder="Tiếng Việt.."
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
              />
            )}
            name="vi_VN"
            rules={{required: false}}
            defaultValue={''}
          />
          {errors.vi_VN && (
            <InputHelper type="error" text={'Field is required'} />
          )}
          {!errors.vi_VN && <InputHelper text="Tiếng Việt" />}
        </View>

        <View style={styles.viewInput}>
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <InputBorderBottom
                placeholder="English.."
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
              />
            )}
            name="en_US"
            rules={{required: false}}
            defaultValue={''}
          />
          {errors.en_US && (
            <InputHelper type="error" text={'Field is required'} />
          )}
          {!errors.en_US && <InputHelper text="English" />}
        </View>

        <View style={styles.viewInput}>
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <InputBorderBottom
                multiline={true}
                numberOfLines={4}
                placeholder="Notes.."
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
              />
            )}
            name="notes"
            rules={{required: false}}
            defaultValue={''}
          />
          {errors.notes && (
            <InputHelper type="error" text={'Field is required'} />
          )}
          {!errors.notes && <InputHelper text="Notes.." />}
        </View>

        <View style={styles.submitButton}>
          <Button onPress={handleSubmit(handleFormSubmit)}>Submit</Button>
        </View>

      </View>
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
    paddingBottom: SPACING_BIG * 3,
    marginTop: SPACING_BASE
  },
  viewInput: {
    marginBottom: MARGIN.BASE
  },
  submitButton: {

  }
});

export default CreatePhraseForm;
