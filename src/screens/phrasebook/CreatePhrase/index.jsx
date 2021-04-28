import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MainLayout from '../../../layouts/MainLayout';
import CreatePhraseForm from '../../../containers/phrasebook/Form';
import {MARGIN} from '../../../components/config/spacing';
import {useDispatch, useSelector} from 'react-redux';
import {resetCreatePhrase} from '../../../modules/phrasebook/actions';

const CreatePhrase = ({navigation}) => {
  const dispatch = useDispatch();
  const {isSuccess} = useSelector((state) => state.phrasebook.create);

  React.useEffect(() => {
    if (isSuccess) {
      navigation.navigate('PhrasebookList');
    }
    return () => {
      dispatch(resetCreatePhrase());
    };
  }, [isSuccess]);

  return (
    <MainLayout level="4">
      <View style={styles.viewHeader}>
        <Text style={styles.textHeader} category="h1">
          Create new phrase
        </Text>
      </View>
      <CreatePhraseForm />
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  viewHeader: {
    alignItems: 'center',
    marginTop: MARGIN.LARGE,
  },
  textHeader: {
    fontSize: 24,
    textAlign: 'center',
  },
});

export default CreatePhrase;
