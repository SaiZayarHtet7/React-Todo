import React, { useEffect, useState } from 'react'

export default function TodoFilter({filterBy}) {
let [filtered ,setFiltered] = useState('All');

useEffect(()=>{
  filterBy(filtered);
},[filtered,filterBy])

  return (
    <div>
    <button className={`button filter-button ${ filtered === 'All' ? 'filter-button-active' :''}`} onClick={()=>setFiltered("All")}>
      All
    </button>
    <button className={`button filter-button ${ filtered === 'Active' ? 'filter-button-active' :''}`} onClick={()=>setFiltered("Active")}>Active</button>
    <button className={`button filter-button ${ filtered === 'Completed' ? 'filter-button-active' :''}`} onClick={()=>setFiltered("Completed")}>Completed</button>
  </div>
  )
}
