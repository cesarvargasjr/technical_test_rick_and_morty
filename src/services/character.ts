import api from './api';

export const GetAllCharacter = async (page: number) => {
  try {
    const { data } = await api.get(`/character/?page${page}`);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};