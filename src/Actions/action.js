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

export const updateCredential = (credentials) => {
  console.log('action',credentials);
  return {
    type: "updateCredential",
    payload: credentials,
  };
};

export const deleteBooking = (num) => {
  console.log('delete',num);
  return {
    type: "deleteBooking",
    payload: num,
  };
};
