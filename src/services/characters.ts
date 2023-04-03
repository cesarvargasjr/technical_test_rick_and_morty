import api from './api';

export const getAllCharacter = async (value: string, page = 1, status?: string, gender?: string, species?: string) => {
  try {
    const { data } = await api.get(`/character/?page=${page}&name=${value}&status=${status}&gender=${gender}&species=${species}`);
    return data;
  } catch (error: any) {
    console.log(error);

    if (error?.response?.status === 404) {
      return []
    }

    throw error;
  }
};

export const getCharacter = async (id: number) => {
  try {
    const { data } = await api.get(`/character/${id}`);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};