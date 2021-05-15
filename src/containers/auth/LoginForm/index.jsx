import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Formik} from 'formik';
import {loginSchema} from '../../../config/validations';
import InputBorderBottom from '../../../components/partials/InputBorderBottom';
import InputHelper from '../../../components/partials/InputHelper';
import {Button, Spinner} from '@ui-kitten/components';
import {MARGIN} from '../../../components/config/spacing';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../../../modules/auth/actions';

const ContainerLoginForm = () => {
  const dispatch = useDispatch();
  const {isLoading} = useSelector((state) => state.auth.login);
  /**
   * Form initial values
   */
  const initialValues = {
    username_or_email: '',
    password: '',
  };

  const handleFormSubmit = (values) => {
    dispatch(login(values));
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
      validationSchema={loginSchema}
      onSubmit={(values) => handleFormSubmit(values)}>
      {({handleChange, handleBlur, handleSubmit, errors, values}) => (
        <View style={styles.root}>
          <View style={styles.viewInput}>
            <InputBorderBottom
              placeholder="Username/Email"
              name="username_or_email"
              onChangeText={handleChange('username_or_email')}
              onBlur={handleBlur('username_or_email')}
              value={values.username_or_email}
            />
            {errors.username_or_email && (
              <InputHelper type="error" text={errors.username_or_email} />
            )}
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
          <Button
            style={styles.buttonSubmit}
            accessoryLeft={isLoading ? LoadingIndicator : null}
            size="large"
            onPress={handleSubmit}>
            MASUK
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

export default ContainerLoginForm;
