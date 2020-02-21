import React from 'react'

export const DataContext = React.createContext()

export function DataProvider({ data, ...props }) {
  return <DataContext.Provider value={data} {...props} />
}
