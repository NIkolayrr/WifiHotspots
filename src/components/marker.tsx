import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChair, faPen, faTrash, faUser } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'
import firebase from '../core-data/firebase'

export const Marker = (props: any) => {
  const [isHidden, setIsHidden] = useState(true)
  const hasData = props.data

  const deleteMarker = (e: any) => {
    const itemsRef = firebase.database().ref('places')
    itemsRef
      .child(props.id)
      .remove()
      .then((res) => {
        console.log(res)
      })
  }

  const editMarker = (e: any) => {
    props.onEdit(props.data, props.id)
  }

  return (
    <div className='marker-container'>
      {props.isActive ? (
        <div className='info-container' hidden={isHidden}>
          <h2>Name: {props.data.name} </h2>
          <h2>Network: {props.data.network} </h2>
          <h2>Password: {props.data.pass} </h2>
        </div>
      ) : (
        <div className={`functions-container ${isHidden ? null : 'show'}`}>
          <button className='button rounded' onClick={(e) => deleteMarker(e)}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
          <button className='button rounded' onClick={(e) => editMarker(e)}>
            <FontAwesomeIcon icon={faPen} />
          </button>
        </div>
      )}
      <div className={`pin ${hasData ? null : 'not-active'}`} onClick={() => setIsHidden(!isHidden)}></div>
    </div>
  )
}
