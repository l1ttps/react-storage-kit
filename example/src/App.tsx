import React, { useState } from 'react'
import { useStorageKit } from 'react-storage-kit'
import ReactJson from 'react-json-view'

const App = () => {
  const storage = useStorageKit()
  console.log(storage.getAll());
  console.log(Math.floor(Date.now() / 1000));
  
  const key = storage.getKey()
  const valueLocalStorage = localStorage.getItem(key)
  const initialValue = {
    key: '',
    value: ''
  }
  const handleSetNewValue = (event: any) => {
    event.preventDefault();
    if ((newValue.key !== '' || newValue.value !== '')) {
      storage.setItem(newValue.key, newValue.value)
      setNewValue(initialValue)
    }
  }
  
  const handleClearAll = () => {
    storage.clear()
  }

  const handleRemoveItem = (key: string) => {
    storage.removeItem(key)
  }

  const [getAll, setGetAll] = useState(true)
  const [newValue, setNewValue] = useState(initialValue)

  return (
    <div className='lg:px-20 lg:py-10'>
      <div className='px-5'>
        <h1 className='text-4xl mb-5'>
          React Storage Kit Example
        </h1>
      </div>
      <div className='shadow-xl p-5 rounded-lg'>
        <div className='grid lg:grid-cols-2 gap-4 my-5 grid-cols-1'>
          <form onSubmit={handleSetNewValue} className="mb-5 flex flex-col lg:flex-row">
            <input
              placeholder='key'
              value={newValue.key}
              onChange={(e) =>
                setNewValue({ ...newValue, key: e.target.value })
              }
              className='border rounded-md px-2 lg:mr-3 mb-1 lg:mb-0'
            />
            <input
              placeholder='value'
              onChange={(e) =>
                setNewValue({ ...newValue, value: e.target.value })
              }
              value={newValue.value}
              className='border rounded-md px-2 lg:mr-3 mb-1 lg:mb-0'
            />
            <button
              onClick={handleSetNewValue}
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-2 rounded'
            >
              Set
            </button>
          </form>

          <div className='flex flex-col lg:flex-row lg:justify-between lg:items-center mb-5'>
            <div className='mb-3'>
              <div className="form-check">
                <input checked={getAll} onChange={() => setGetAll(true)} className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-check-label inline-block text-gray-800" htmlFor="flexCheckDefault">
                  <pre>storage.getAll()</pre>
                </label>
              </div>
              <div className="form-check truncate">
                <input checked={!getAll} onChange={() => setGetAll(false)} className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckChecked" />
                <label className="form-check-label inline-block text-gray-800" htmlFor="flexCheckChecked">
                  <pre>storage.getMultiple([{Object.keys(storage.getAll()|| {}).map((key, index) => {
                    return index <= 3 && <span key={index}>
                      "{key}"{index < Object.keys(storage.getAll()).length - 1 && ","}
                    </span>
                  })}])</pre>
                </label>
              </div>
            </div>
            <button
              onClick={handleClearAll}
              className='bg-red-500 hover:bg-red-700 text-white font-bold p-2 rounded'
            >
              Clear all
            </button>
          </div>
          <div>
            <b className='my-5'>Local Storage</b>
            <div className='border rounded-md lg:h-96 p-5 truncate'>
              {valueLocalStorage}
            </div>
          </div>
          <div>
            <b className='my-5'>react-storage-kit</b>
            <div className='border rounded-md h-96 p-5 truncate overflow-y-auto'>
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
