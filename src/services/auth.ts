type Response = {
  token: string;
  user: {
    name: string;
    email: string;
  },
}

export function singIn(): Promise<Response> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        token: 'kijashkjashdkjashdaslkjdfjsalkdsjalkasdjasl',
        user: {
          name: 'Luiz',
          email: 'email@email.com',
        },
      })
    }, 1000);
  });
}