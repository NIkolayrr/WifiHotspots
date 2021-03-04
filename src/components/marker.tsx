import { useState } from 'react'

export const Marker = (props: any) => {
  const [isHidden, setIsHidden] = useState(true)
  return (
    <div className='marker-container'>
      {props.isActive ? (
        <div className='info-container' hidden={isHidden}>
          <h2>Name: {props.data.name} </h2>
          <h2>Network: {props.data.network} </h2>
          <h2>Password: {props.data.pass} </h2>
        </div>
      ) : null}
      <div className={`pin ${props.isActive ? null : 'not-active'}`} onClick={() => setIsHidden(!isHidden)}></div>
    </div>
  )
}
