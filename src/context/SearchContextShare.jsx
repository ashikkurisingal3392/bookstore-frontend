import React, {  createContext } from 'react'

//1.create context
export const searchContext= createContext("")
function SearchContextShare({children}) {

    //2.global state creation

    const[searchKey,setSearchKey]=React.useState("")


  return (
    <searchContext.Provider value={{searchKey,setSearchKey}}>
        {children}
        {/*children means app and all components */}
      
    </searchContext.Provider>
  )
}

export default SearchContextShare
