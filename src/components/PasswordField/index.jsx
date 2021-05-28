import { FormHelperText, TextField } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Controller } from 'react-hook-form';

PasswordField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  lable: PropTypes.string,
  disable: PropTypes.bool,
  showErrorMessage: PropTypes.bool,
};

function PasswordField({
  form,
  name,
  lable,
  disable,
  showErrorMessage = true,
}) {
  // const { errors, formState } = form;
  // const hasError = errors[name];

  const formState = form.formState;
  const errorMessage = formState.errors[name]?.message;
  const hasError = !!errorMessage;

  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword((x) => !x);
  };

  return (
    <div>
      <FormControl fullWidth margin="normal" variant="outlined">
        <InputLabel htmlFor={name}>{lable}</InputLabel>
        <Controller
          control={form.control}
          name={name}
          render={({ field: { onChange, value } }) => (
            <OutlinedInput
              id={name}
              type={showPassword ? 'text' : 'password'}
              onChange={onChange}
              value={value}
              label={lable}
              disabled={disable}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={toggleShowPassword}
                    edge="end"
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          )}
        />
        <FormHelperText error={hasError}>
          {showErrorMessage && errorMessage}
        </FormHelperText>
      </FormControl>
    </div>
  );
}

export default PasswordField;

// <TextField
//   variant="outlined"
//   margin="normal"
//   fullWidth
//   label={lable}
//
// />;
