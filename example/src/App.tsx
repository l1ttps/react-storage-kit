import React from 'react'

import { useStorageKit } from 'react-storage-kit'

const App = () => {
  const storage = useStorageKit()
  console.log(storage.getAll())

  return (
    <div>
      <button
        onClick={() => {
          storage.setItem('test', 123)
        }}
      >
        click me
      </button>
    </div>
  )
}

export default App
