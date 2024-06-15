import axios from 'axios';

const API_URL = 'http://localhost:5000/api/pdf/';

const uploadPdf = async (pdfFile, token) => {
  const formData = new FormData();
  formData.append('pdf', pdfFile);
  return axios.post(API_URL + 'upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: token,
    },
  });
};

const getPdfs = async (token) => {
  return axios.get(API_URL + 'all', {
    headers: {
      Authorization: token,
    },
  });
};

export default {
  uploadPdf,
  getPdfs,
};
