import { genKeyStorage } from '../utils/fingerPrint'
import { useLocalStorage } from './useLocalStorage'
const keyStorage = genKeyStorage()

const useStorageKit = () => {
  const [data, setData] = useLocalStorage(keyStorage)
  const storage = {
    getAll: () => data,
    getMultiple: ([]) => {},
    getItem: (key: string) => {
      try {
        return data[key]
      } catch (e) {
        return false
      }
    },
    getKey: () => keyStorage,
    setItem: (key: string, value: any) => {
      setData({ ...data, [key]: value })
    },

    removeItem: (key: string) => {
      if(!data.hasOwnProperty(key)) throw new Error("khong co gi");
      const _data = {...data}
      delete _data[key]
      setData({..._data})
    },

    clear: () => {}
  }
  return storage
}

export default useStorageKit
