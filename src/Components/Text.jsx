import React, { useState, useEffect } from 'react'

function Text() {
  const items = [
    { id: 1, name: 'Apple', category: 'Fruit' },
    { id: 2, name: 'Carrot', category: 'Vegetable' },
    { id: 3, name: 'Banana', category: 'Fruit' },
    { id: 4, name: 'Broccoli', category: 'Vegetable' },
    { id: 5, name: 'Strawberry', category: 'Fruit' },
  ]

  const [search, setsearch] = useState('')
  const [categor, setcategor] = useState('')
  const [result, setresult] = useState(items)

  useEffect(() => {
    let filteredarr = items
  
    if (search) {
      filteredarr = filteredarr.filter(abc =>
        abc.name.toLowerCase().includes(search.toLowerCase())
      )
    }
  
    
    if (categor && categor !== 'All') {
      filteredarr = filteredarr.filter(abc => abc.category === categor)
    } 
  
    setresult(filteredarr)
  
  }, [search,categor])
  

  return (
    <div>
      <div>
        <input type="text"value={search} onChange={(e) => setsearch(e.target.value)}/>
          
        <select value={categor} onChange={(e) => setcategor(e.target.value)}>
          <option value="All">All</option>
          <option value="Fruit">Fruit</option>
          <option value="Vegetable">Vegetable</option>
        </select>
      </div>
      <ul>
        {result.map(abc => (
          <li key={abc.id}>
            {abc.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Text



// import React from 'react'
// import { useSelector } from 'react-redux';
// const state=useSelector(state=>state. objstate.object)
// console.log(state)
// const Text = () => {
//   return (
//     <div>
//         <h1>hi</h1>

//     </div>
//   )
// }

// export default Text