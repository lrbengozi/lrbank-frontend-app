import api from './api';

type Response = {
  token: string;
  user: {
    email: string;
    name: string;
  };
};

type ResponseError = {
  message: string;
};

export async function signIn(
  email: string,
  password: string,
): Promise<Response> {
  try {
    const {data} = await api.post('/api/v1/sessions', {
      email,
      password,
    });

    return data;
  } catch (error) {
    throw new Error(error);
  }
}
