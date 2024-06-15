import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import pdfService from '../services/pdf';

const Home = () => {
  const { user } = useContext(AuthContext);
  const [pdfs, setPdfs] = useState([]);
  const [file, setFile] = useState(null);

  useEffect(() => {
    const fetchPdfs = async () => {
      const response = await pdfService.getPdfs(user.token);
      setPdfs(response.data);
    };

    if (user) fetchPdfs();
  }, [user]);

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) return;
    await pdfService.uploadPdf(file, user.token);
    setFile(null);
    const response = await pdfService.getPdfs(user.token);
    setPdfs(response.data);
  };

  return (
    <div>
      <h1>Home</h1>
      {user && (
