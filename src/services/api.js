import axios from 'axios';

const BASE_URL = 'https://trogon.info/interview/php/api';

export const getSubjects = async () => {
  const response = await axios.get(`${BASE_URL}/subjects.php`);
  return response.data;
};

export const getModules = async (subjectId) => {
  const response = await axios.get(`${BASE_URL}/modules.php?subject_id=${subjectId}`);
  return response.data;
};

export const getVideos = async (moduleId) => {
  const response = await axios.get(`${BASE_URL}/videos.php?module_id=${moduleId}`);
  return response.data;
};