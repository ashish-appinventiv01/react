import React from 'react'
import mock from '../demo.json'
const Check = () => {
  return (
    <div>
        {mock.key.map((value) => (
            <h1>{value.price}</h1>
        )

        )}
    </div>
  )
}

export default Check