import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import { Controller } from 'react-hook-form';

InputFeid.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  lable: PropTypes.string,
  disable: PropTypes.bool,
  showErrorMessage: PropTypes.bool,
};

function InputFeid({ form, name, lable, disable, showErrorMessage = true }) {
  const formState = form.formState;
  const errorMessage = formState.errors[name]?.message;
  const hasError = !!errorMessage;

  return (
    <Controller
      control={form.control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          onChange={onChange}
          value={value}
          label={lable}
          disabled={disable}
          error={hasError}
          helperText={showErrorMessage && errorMessage}
        />
      )}
    />
  );
}

export default InputFeid;
