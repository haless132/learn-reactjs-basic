import { yupResolver } from '@hookform/resolvers/yup';
import { Avatar, Button, makeStyles, Typography } from '@material-ui/core';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import InputFeid from 'components/inputFeild';
import PasswordField from 'components/PasswordField';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
// style---------------------------
const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(4),
  },

  avatar: {
    margin: '0 auto',
    backgroundColor: theme.palette.secondary.main,
  },

  title: {
    margin: theme.spacing(2, 0, 3, 0),
    textAlign: 'center',
  },

  submit: {
    margin: theme.spacing(2, 0, 3, 0),
  },
}));

// end-------------------------

// schema
const schema = yup.object().shape({
  fullName: yup
    .string()
    .required('Please enter your full name.')
    .test(
      'should has at least two words',
      'please enter at least two word',
      (values) => {
        return values.split(' ').length >= 2;
      }
    ),
  email: yup
    .string()
    .required('Please enter your email!')
    .email('please enter a valid email address.'),
  password: yup
    .string()
    .required('Please enter your full Password.')
    .min(6, 'Please enter at least 6 characters.'),
  retypePassword: yup
    .string()
    .required('Please enter your full Password.')
    .min(6, 'Please enter at least 6 characters.')
    .oneOf([yup.ref('password')], 'Password does not macth'),
});
// end--------------------------------------------

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};

function RegisterForm({ onSubmit = null }) {
  const classes = useStyles();

  const form = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      retypePassword: '',
    },

    resolver: yupResolver(schema),
  });

  //handleSubmit
  const handleSubmit = (values) => {
    if (onSubmit) {
      onSubmit(values);
    }
    form.reset();
  };

  return (
    <div className={classes.root}>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>

      <Typography className={classes.title} component="h3" variant="h5">
        Creacte An Account
      </Typography>

      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputFeid name="fullName" lable="Full Name" form={form} />
        <InputFeid name="email" lable="Email" form={form} />
        <PasswordField name="password" lable="Password" form={form} />
        <PasswordField
          name="retypePassword"
          lable="Retype Password"
          form={form}
        />
        <Button
          type="submit"
          className={classes.submit}
          variant="contained"
          color="primary"
          fullWidth
        >
          Create an account
        </Button>
      </form>
    </div>
  );
}

export default RegisterForm;
