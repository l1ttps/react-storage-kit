import React, { useState } from 'react'
import { useStorageKit } from 'react-storage-kit'
import ReactJson from 'react-json-view'
const App = () => {
  const storage = useStorageKit()
  console.log(storage.getAll())
  const key = storage.getKey()
  const valueLocalStorage = localStorage.getItem(key)
  const initialValue = {
    key: '',
    value: ''
  }

  const handleSetNewValue = (event: any) => {
    event.preventDefault();
    if ((newValue.key !== '', newValue.value !== '')) {
      storage.setItem(newValue.key, newValue.value)
      setNewValue(initialValue)
    }
  }

  const handleClearAll = () => {
    localStorage.removeItem(key)
    window.location.reload()
  }

  const handleRemoveItem = (key: string) => {
    storage.removeItem(key)
  }

  const [newValue, setNewValue] = useState(initialValue)
  return (
    <div className='px-20 py-10'>
    <h1 className='text-4xl mb-5'>
    React Storage Kit Example
    </h1>
      <div className='shadow-lg p-5 rounded-lg'>
        <div className='flex flex-row w-100 justify-between'>
          <form onSubmit={handleSetNewValue}>
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
          </form>
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
              {/* @ts-ignore */}
              <ReactJson onDelete={(event) => event.name && handleRemoveItem(event.name)} key={1} src={storage.getAll()}></ReactJson>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
