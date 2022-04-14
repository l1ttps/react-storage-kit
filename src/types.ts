export interface StorageKit {
    /**
    * Return all value in StorageKit.
    */
    getAll(): object;


    /**
    * Return multiple value in StorageKit.
    *
    * @param keys - Array keys
    * @return multiple value in Storage Kit.
    */
    getMultiple(keys: string[]): object,

    /**
     * Returns the current value associated with the given key, or null if the given key does not exist.
     *
     * @param key - key to get value
     * @return the current value associated with the given key, or null if the given key does not exist.
     */
    getItem(key: string): object | string | number | null,

    /**
     * Returns key of StorageKit in localStorage.
     *
     * @return key of StorageKit in localStorage.
     */
    getKey(): string,

    /**
    * Sets the value of the pair identified by key to value, creating a new key/value pair if none existed for key previously.
    *
    * @param key - key to set value
    * @param value - value
    * @param exp - expiration time
    */
    setItem(key: string, value: object | string | number, exp?: number): void,

    /**
    * Remove a value in StorageKit
    *
    * @param key - key to remove value
    */
    removeItem(key: string): void,

    /**
    * Remove all value in StorageKit
    *
    * @param key - key to remove value
    */
    clear(): void
}