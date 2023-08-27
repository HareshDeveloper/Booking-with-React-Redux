import { combineReducers } from "redux";
// const initialData = {
//   id: "",
//   amount: "",
//   username: "",
//   dateOfActivity: "",
//   bookingDate: "",
// };

const allBookingData={
  bookings:[]
};

const sigUpCredentials = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};
const bookingReducer = (state = allBookingData, action) => {
  switch (action.type) {
    case "booking":
      console.log('reducer',action.payload);
      return {
        ...state,
        bookings:[
          ...state.bookings,{
        id: action.payload.id,
        amount: action.payload.amount,
        username: action.payload.userName,
        dateOfActivity: action.payload.dateOfActivity,
        bookingDate: action.payload.bookingDate
          }
        ]
      };
    default:
      return state;
  }
};

const loginReducer = (state = [sigUpCredentials], action) => {
  switch (action.type) {
    case "signUp": {
      return {
        ...state,
        email: action.payload.email,
        firstName: action.payload.firstName,
        password: action.payload.password,
        lastName: action.payload.lastName,
      };
    }
    case "signIn": {
      return {
        ...state,
        email: action.payload.email,
        password: action.payload.password,
      };
    }
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  bookingReducer: bookingReducer,
  loginReducer: loginReducer,
});

export default rootReducer;
