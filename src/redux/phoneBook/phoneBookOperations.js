import phoneBookActions from "./phoneBookActions";
import axios from "axios";

axios.defaults.baseURL = "https://goit-phonebook-api.herokuapp.com";
axios.defaults.headers.common["Authorization"] =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThiMTFkNWMzNWY3ODAwMTc4ZDIzZWYiLCJpYXQiOjE1ODYxNzI0MzR9.xr7BnpXeV4n8Di4cumBYZFpZNoasKPZabBQy15EG8pc";
axios.defaults.headers.post["Content-Type"] = "application/json";

const addContact = (name, number) => (dispatch) => {
  dispatch(phoneBookActions.addContactRequest());

  axios
    .post("/contacts", { name, number })
    .then(({ data }) => {
      dispatch(phoneBookActions.addContactSuccess(data));
    })
    .catch((error) => dispatch(phoneBookActions.addContactError(error)));
};

const fetchContacts = () => (dispatch) => {
  dispatch(phoneBookActions.fetchContactRequest());

  axios
    .get("/contacts")
    .then(({ data }) => dispatch(phoneBookActions.fetchContactSuccess(data)))
    .catch((error) => phoneBookActions.fetchContactError(error));
};

const removeContact = (id) => (dispatch) => {
  dispatch(phoneBookActions.removeContactRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(phoneBookActions.removeContactSuccess(id)))
    .catch((error) => dispatch(phoneBookActions.fetchContactError(error)));
};

export default { addContact, fetchContacts, removeContact };