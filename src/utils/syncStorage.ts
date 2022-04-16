import cryptoJs from "crypto-js";
import { genKeyStorage, getDeviceId } from "./fingerPrint";

const keyStorage = genKeyStorage();
const deviceId = getDeviceId();

const setStorage = (value: any) => {
  const encrypt = cryptoJs.AES.encrypt(JSON.stringify(value), deviceId);
  localStorage.setItem(keyStorage, encrypt as any);
};

function getStorage(): object {
  try {
    const decrypt = cryptoJs.AES.decrypt(
      localStorage.getItem(keyStorage) as any,
      deviceId
    ).toString(cryptoJs.enc.Utf8);
    return JSON.parse(decrypt);
  }
  catch (e) {
   throw new Error("This browser cannot be identified")
  }
};

export { getStorage, setStorage };
