import { genKeyStorage } from '../utils/fingerPrint'
import { useLocalStorage } from './useLocalStorage'
const keyStorage = genKeyStorage()

const useStorageKit = () => {
  const [data, setData] = useLocalStorage(keyStorage)
  const storage = {
    getAll: (): object => data,

    getMultiple: (keys: string[]) => {
      if (!data) return {}
      keys.forEach((key) => {
        data.hasOwnProperty(key)
      })
      return keys
    },

    getItem: (key: string): object | string | number | null => {
      try {
        return data[key]
      } catch (e) {
        return null
      }
    },

    getKey: (): string => keyStorage,

    setItem: (key: string, value: any): void => {
      setData({ ...data, [key]: value })
    },

    removeItem: (key: string): void => {
      if (!data.hasOwnProperty(key)) throw new Error("khong co gi");
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
