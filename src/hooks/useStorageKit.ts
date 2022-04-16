import { StorageKit } from '../types'
import { genKeyStorage } from '../utils/fingerPrint'
import { useLocalStorage } from './useLocalStorage'

const keyStorage = genKeyStorage()

const useStorageKit = (): StorageKit => {
  const [data, setData] = useLocalStorage(keyStorage, {})
  const storage: StorageKit = {

    getAll: (): object => {
      const result = {...data}
      data && Object.keys(data).forEach((key)=>{
        if(data[key].hasOwnProperty("ttl")){
          result[key] = data[key].value
        }
      })
      return result
    },

    getMultiple: (keys: string[]) => {
      const result = {}
      if (!data) return {}
      keys.forEach((key) => {
        if (data.hasOwnProperty(key)) {
          result[key] = data[key]
        }
      })
      return result
    },

    getItem: (key: string): object | string | number | null => {
      try {
        return data[key]
      } catch (e) {
        return null
      }
    },

    getKey: (): string => keyStorage,

    setItem: (key: string, value: object | string | number, ttl?: number): void => {
      if (ttl && ttl > 0) {
        setData({
          ...data, [key]: {
            ttl,
            value
          }
        })
        return 
      }
      setData({ ...data, [key]: value })
    },

    removeItem: (key: string): void => {
      if (!data.hasOwnProperty(key)) return;
      const _data = { ...data }
      delete _data[key]
      setData({ ..._data })
    },

    clear: (): void => {
      setData()
      localStorage.removeItem(keyStorage)
    }
  }

  return storage;
}

export default useStorageKit
