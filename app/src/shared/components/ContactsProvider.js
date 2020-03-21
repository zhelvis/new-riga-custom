import React from 'react'

export const ContactsContext = React.createContext({})

export function ContactsProvider({ children, contacts }) {
  return (
    <ContactsContext.Provider value={contacts}>
      {children}
    </ContactsContext.Provider>
  )
}
