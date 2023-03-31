import api from './api';

export const getCharacter = async (value: string, page = 1) => {
  try {
    const { data } = await api.get(`/character/?page=${page}&name=${value}`);
    return data;
  } catch (error: any) {
    console.log(error);

    if (error?.response?.status === 404) {
      return []
    }

    throw error;
  }
};