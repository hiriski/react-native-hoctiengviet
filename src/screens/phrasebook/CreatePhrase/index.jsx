import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MainLayout from '../../../layouts/MainLayout';
import {Layout} from '@ui-kitten/components';
import CreatePhraseForm from '../../../containers/phrasebook/Form';

const CreatePhrase = () => {
  return (
    <Layout level="4">
      <CreatePhraseForm />
    </Layout>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default CreatePhrase;
