import { useState } from 'react'
import { getStorage, setStorage } from '../utils/syncStorage'
const useLocalStorage = (key: string, initialValue?: any) => {
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === 'undefined') {
      return initialValue
    }
    try {
      const item = window.localStorage.getItem(key)

      return item ? getStorage() : initialValue
    } catch (error) {
      console.log(error)
      return initialValue
    }
  })

  const setValue = (value: any) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value

      setStoredValue(valueToStore)

      if (typeof window !== 'undefined') {
        setStorage(valueToStore)
      }
    } catch (error) {
      console.log(error)
    }
  }
  return [storedValue, setValue]
}
export { useLocalStorage }
