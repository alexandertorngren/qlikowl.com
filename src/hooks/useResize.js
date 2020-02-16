import { useState } from 'react'

function useResize(docElem) {
  const getSizeObj = (docElem) =>
    //const { clientWidth, clientHeight } = initialState
    console.log('### docElem', docElem)
  const [clientSize, setClientSize] = useState(getSizeObj(docElem))

  const doResize = (docElem) => {
    setClientSize(getSizeObj(docElem))
  }
  console.log('clientSize', clientSize)
  return { clientSize, doResize, getSizeObj }
}

export { useResize }
