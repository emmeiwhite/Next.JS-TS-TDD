import { useState } from 'react'

const useToggle = function (defaultValue: boolean) {
  const [show, setShow] = useState(defaultValue)

  function toggle() {
    setShow(prev => !prev)
  }

  return { show, toggle }
}

export default useToggle
