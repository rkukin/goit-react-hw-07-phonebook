import { createSelector } from "@reduxjs/toolkit";

const getLoading = state => state.contacts.loading;

const getContacts = state => state.contacts.items;

const getFilter = state => state.contacts.filter;

const getError = state => state.contacts.error;

const getFilteredContacts = createSelector([getContacts, getFilter], (contacts, filter) => {
    if (filter === "")
        return contacts;
    else
        return contacts.filter(contact => contact.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1);
})

export default {
    getLoading,
    getContacts,
    getFilter,
    getError,
    getFilteredContacts
}