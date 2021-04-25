export function singIn() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        token: 'kijashkjashdkjashdaslkjdfjsalkdsjalkasdjasl',
        user: {
          name: 'Luiz',
          email: 'email@email.com',
        },
      })
    }, 2000);
  });
}