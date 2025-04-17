import { createSelector } from '@reduxjs/toolkit';
import { selectNameFilter } from '../filters/selectors';

export const selectContacts = state => state.contacts.items;
export const selectLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filterName) => {
    const normalizedFilter = filterName.toLowerCase().trim();
    return contacts.filter(contact => {
      const nameMatch = contact.name.toLowerCase().includes(normalizedFilter);
      const numberMatch = String(contact.number).toLowerCase().includes(normalizedFilter);
      return nameMatch || numberMatch;
    });
  }
);
