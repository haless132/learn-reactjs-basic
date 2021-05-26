import { yupResolver } from '@hookform/resolvers/yup';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import InputFeid from '../../../../components/inputFeild';

const schema = yup.object().shape({
  title: yup
    .string()
    .required('please enter title')
    .min(5, 'Title is too short'),
});

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

function TodoForm({ onSubmit = null }) {
  const form = useForm({
    defaultValues: {
      title: '',
    },

    resolver: yupResolver(schema),
  });

  const handleSubmit = (values) => {
    if (onSubmit) {
      onSubmit(values);
    }
    form.reset();
  };

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <InputFeid name="title" lable="todo" form={form} />
    </form>
  );
}

export default TodoForm;
