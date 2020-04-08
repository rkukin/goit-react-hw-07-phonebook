// import {Type} from './actionTypes';
import {combineReducers, createReducer} from '@reduxjs/toolkit';
import PhoneBookActions from './phoneBookActions';

const AddContact = (state, action) =>
  [...state, action.payload]
;

const removeContact = (state, action) =>
  state.filter(contact => contact.id !== action.payload);

const items = createReducer([], {
  [PhoneBookActions.fetchContactSuccess]: (state, action) => action.payload,
  [PhoneBookActions.addContactSuccess]: AddContact,
  [PhoneBookActions.removeContactSuccess]: removeContact
});

const filter = createReducer("", {
  [PhoneBookActions.changeFilter]: (state, action) => action.payload
});

const loading = createReducer(false, {
  [PhoneBookActions.fetchContactRequest]: () => true,
  [PhoneBookActions.addContactRequest]: () => true,
  [PhoneBookActions.removeContactRequest]: () => true,

  [PhoneBookActions.addContactSuccess]: () => false,
  [PhoneBookActions.fetchContactSuccess]: () => false,
  [PhoneBookActions.removeContactSuccess]: () => false,

  [PhoneBookActions.addContactError]: () => false,
  [PhoneBookActions.fetchContactError]: () => false,
  [PhoneBookActions.removeContactError]: () => false
});

const error = createReducer("", {
  [PhoneBookActions.fetchContactRequest]: () => "",
  [PhoneBookActions.addContactRequest]: () => "",
  [PhoneBookActions.removeContactRequest]: () => "",

  [PhoneBookActions.addContactError]: (state, action) => action.payload.message,
  [PhoneBookActions.fetchContactError]: (state, action) => action.payload.message,
  [PhoneBookActions.removeContactError]: (state, action) => action.payload.message
});

export default combineReducers({
  items,
  filter,
  loading,
  error
});


//
// const phoneBookReducer = (store = initStore, action) => {
//   switch (action.type) {
//     case Type.ADD_CONTACT:
//       return {
//         ...store,
//         contacts: [...store.contacts, action.payload]
//       };
//
//     case Type.DELETE_CONTACT:
//       return {
//         ...store,
//         contacts: store.contacts.filter(contact => contact.id !== action.payload.id)
//       };
//
//     case Type.UPDATE_FILTER:
//       return {
//         ...store,
//         filter: action.payload.filter
//       };
//
//     case Type.LOAD_CONTACTS:
//       return {
//         ...store,
//         contacts: JSON.parse(action.payload.contacts)
//       };
//
//     default:
//       return store;
//   }
// };
//
//
// export default phoneBookReducer;