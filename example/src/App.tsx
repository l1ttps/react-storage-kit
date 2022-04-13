import React, { useState } from 'react'
import { useStorageKit } from 'react-storage-kit'

const App = () => {
  const storage = useStorageKit()
  console.log(storage.getAll())
  const key = storage.getKey()
  const valueLocalStorage = localStorage.getItem(key)
  const initialValue = {
    key: '',
    value: ''
  }

  const handleSetNewValue = () => {
    if ((newValue.key !== '', newValue.value !== '')) {
      storage.setItem(newValue.key, newValue.value)
      setNewValue(initialValue)
    }
  }
  console.log(storage.removeItem());
  
  const handleClearAll = () => {
    localStorage.removeItem(key)
    window.location.reload()
  }
  const [newValue, setNewValue] = useState(initialValue)
  return (
    <div className='px-20 py-10'>
      <div className='shadow-lg p-5 rounded-lg'>
        <div className='flex flex-row w-100 justify-between'>
          <div>
            <input
              placeholder='key'
              value={newValue.key}
              onChange={(e) =>
                setNewValue({ ...newValue, key: e.target.value })
              }
              className='border rounded-md p-2 mr-3'
            />
            <input
              placeholder='value'
              onChange={(e) =>
                setNewValue({ ...newValue, value: e.target.value })
              }
              value={newValue.value}
              className='border rounded-md p-2 mr-3'
            />
            <button
              onClick={handleSetNewValue}
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded'
            >
              Set
            </button>
          </div>
          <div>
            <button
              onClick={handleClearAll}
              className='bg-red-500 hover:bg-red-700 text-white font-bold p-2 rounded'
            >
              Clear all
            </button>
          </div>
        </div>
        <div className='grid grid-cols-2 gap-4 my-5'>
          <div>
            <b className='my-5'>Local Storage</b>
            <div className='border rounded-md h-96 p-5 truncate'>
              {valueLocalStorage}
            </div>
          </div>
          <div>
            <b className='my-5'>react-storage-kit</b>
            <div className='border rounded-md h-96 p-5'>
              {JSON.stringify(storage.getAll())}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
