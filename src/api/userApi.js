import { useRadioGroup } from '@material-ui/core';

const { default: axiosClient } = require('./axiosClient');

const userApi = {
  register(data) {
    const url = '/auth/local/register';
    return axiosClient.post(url, data);
  },
};

export default userApi;
