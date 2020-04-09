import { combineReducers, createReducer } from '@reduxjs/toolkit';
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