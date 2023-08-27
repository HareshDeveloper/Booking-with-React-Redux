export const signIn = (email,password) => {
  console.log(email,password);
  return { type: "signIn", payload: {email,password} };
};

export const signUp = (email,firstName,password,lastName) => {
  return { type: "signUp", payload:  {email,firstName,password,lastName} };
};

export const credential = (credentials) => {
  console.log('action',credentials);
  return {
    type: "booking",
    payload: credentials,
  };
};
