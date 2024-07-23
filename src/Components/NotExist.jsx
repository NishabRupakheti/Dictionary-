import React from 'react'
import { GiDeadWood } from "react-icons/gi";


const NotExist = () => {
  return (
    <div className='container m-3 font-monospace ' >
        Looks like the word you are looking for does not exist.
        <GiDeadWood />

    </div>
  )
}

export default NotExist