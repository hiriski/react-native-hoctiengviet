import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Formik} from 'formik';
import {registerSchema} from '../../../config/validations';
import InputBorderBottom from '../../../components/partials/InputBorderBottom';
import InputHelper from '../../../components/partials/InputHelper';
import {Button, Spinner} from '@ui-kitten/components';
import {MARGIN} from '../../../components/config/spacing';
import {useDispatch, useSelector} from 'react-redux';
import {register} from '../../../modules/auth/actions';

const ContanerRegisterForm = () => {
  const dispatch = useDispatch();
  const {isLoading} = useSelector((state) => state.auth.register);
  /**
   * Form initial values
   */
  const initialValues = {
    name: '',
    emai: '',
    password: '',
    password_confirmation: '',
  };

  const handleFormSubmit = (values) => {
    dispatch(register(values));
    // alert(JSON.stringify(values));
  };

  const LoadingIndicator = (props) => (
    <View style={[props.style, styles.indicator]}>
      <Spinner status="basic" size="tiny" />
    </View>
  );

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={registerSchema}
      onSubmit={(values) => handleFormSubmit(values)}>
      {({handleChange, handleBlur, handleSubmit, errors, values}) => (
        <View style={styles.root}>
          <View style={styles.viewInput}>
            <InputBorderBottom
              placeholder="Nama kamu"
              name="name"
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              value={values.name}
            />
            {errors.name && <InputHelper type="error" text={errors.name} />}
          </View>
          <View style={styles.viewInput}>
            <InputBorderBottom
              placeholder="Email"
              name="email"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
            />
            {errors.email && <InputHelper type="error" text={errors.email} />}
          </View>
          <View style={styles.viewInput}>
            <InputBorderBottom
              secureTextEntry={true}
              placeholder="Password"
              name="password"
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
            />
            {errors.password && (
              <InputHelper type="error" text={errors.password} />
            )}
          </View>
          <View style={styles.viewInput}>
            <InputBorderBottom
              secureTextEntry={true}
              placeholder="Ulangi password"
              name="password_confirmation"
              onChangeText={handleChange('password_confirmation')}
              onBlur={handleBlur('password_confirmation')}
              value={values.password_confirmation}
            />
            {errors.password_confirmation && (
              <InputHelper type="error" text={errors.password_confirmation} />
            )}
          </View>
          <Button
            style={styles.buttonSubmit}
            accessoryLeft={isLoading ? LoadingIndicator : null}
            size="large"
            onPress={handleSubmit}>
            DAFTAR
          </Button>
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  root: {},
  viewInput: {
    marginBottom: MARGIN.BASE,
  },
  indicator: {
    marginRight: 0,
  },
  buttonSubmit: {
    marginTop: MARGIN.BASE,
  },
});

export default ContanerRegisterForm;
