import { genKeyStorage } from "../utils/fingerPrint";
import { useLocalStorage } from "./useLocalStorage";
const keyStorage = genKeyStorage();

const useStorageKit = () => {
  const [data, setData] = useLocalStorage(keyStorage);
  const storage = {
    getAll: () => data,
    getMultiple: ([]) => {},
    getItem: (key) => {
      try {
        return data[key];
      } catch (e) {
        return false;
      }
    },
    setItem: (key, value) => {
      setData({ ...data, [key]: value });
    },
    removeItem: () => {},
    clear: () => {},
  };
  return storage;
};

export default useStorageKit;
