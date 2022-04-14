<p align="center">
    <img src="https://raw.githubusercontent.com/l1ttps/react-storage-kit/main/docs/banner.png" alt="React Auth Kit Banner"/>
</p>

[![NPM](https://img.shields.io/npm/v/react-storage-kit.svg)](https://www.npmjs.com/package/react-storage-kit) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Features
- Generates a different secret for each browser, used to symmetrically encrypt the data before saving it to LocalStorage and reading it out.
- The value stored in local storage is automatically generated and saved for each browser, cannot be transferred to another computer for use.
- Provides hook functions to interact with data.
- The stored value can only be modified through the provided functions, avoiding inspection via the browser's Develop Tools.
- Direct synchronization with local storage every time the value changes

####Coming soon
- When setting a value to StorageKit can include an expiration time (like cookies). 
- If the value stored in StorageKit expires, null will be returned

## Installation

```bash
npm install --save react-storage-kit 

or

yarn add react-storage-kit 
```

## Usage with Hook

```tsx
import React, { useState } from 'react'
import { useStorageKit } from 'react-storage-kit'

// inside your function component  
const storage = useStorageKit()
```


<hr/>

####getAll()
Return all value in Storage Kit
```tsx
import React, { useState } from 'react'
import { useStorageKit } from 'react-storage-kit'

const MyComponent = () => {
    const storage = useStorageKit()
    const data = storage.getAll()

    return (
      <div>
        <span>{data.fullName}</span>
      </div>
    )
}
export default MyComponent;
```

<hr/>
####getMultiple(`string[]`)
Return multiple value  in Storage Kit

```tsx
import React, { useState } from 'react'
import { useStorageKit } from 'react-storage-kit'

const MyComponent = () => {
    const storage = useStorageKit()
    const data = storage.getMultiple(["fullName", "email", "age"])
    
    console.log(data.fullName) // John Doe
    console.log(data.phoneNumber) // undefined

    return (
      <div>
        <span>{data.fullName}</span>
        <span>{data.email}</span>
        <span>{data.age}</span>
      </div>
    )
}

export default MyComponent;
```


<hr/>
####setItem(`key: string`,`value: object | string | number`)
Set key value  StorageKit

```tsx
import React, { useState } from 'react'
import { useStorageKit } from 'react-storage-kit'

const MyComponent = () => {
    const storage = useStorageKit()

    const handleClearAll = () => {
      storage.setItem("fullName", "John Doe")
    }

    return (
      <div>
        <button onClick={handleClearAll}>Set item</button>
      </div>
    )
}

export default MyComponent;
```


<hr/>
####removeItem(`key: string`)
Delete a value in StorageKit 

```tsx
import React, { useState } from 'react'
import { useStorageKit } from 'react-storage-kit'

const MyComponent = () => {
    const storage = useStorageKit()

    const handleSetItem = () => {
      storage.removeItem("fullName")
    }

    return (
      <div>
        <button onClick={handleDeleteItem}>Delete item</button>
      </div>
    )
}

export default MyComponent;
```

<hr/>
####clear()
delete all values ​​stored in StorageKit

```tsx
import React, { useState } from 'react'
import { useStorageKit } from 'react-storage-kit'

const MyComponent = () => {
    const storage = useStorageKit()

    const handleClearAll = () => {
      storage.clear()
    }

    return (
      <div>
        <button onClick={handleClearAll}>Clear All</button>
      </div>
    )
}

export default MyComponent;
```
## License

MIT © [l1ttps](https://github.com/l1ttps)
