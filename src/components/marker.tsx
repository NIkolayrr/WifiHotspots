import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronCircleDown,
  faChevronCircleUp,
  faExclamation,
  faPen,
  faTimes,
  faTrash,
} from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react'
import firebase from '../core-data/firebase'

export const Marker = (props: any) => {
  const [isHidden, setIsHidden] = useState(true)
  const hasData = props.data

  const deleteMarker = (e: any) => {
    if (!props.id) return
    const itemsRef = firebase.database().ref('places')
    itemsRef
      .child(props.id)
      .remove()
      .then((res) => {
        console.log(res)
      })
  }

  const editMarker = (e: any) => {
    if (!props.id) return
    props.onEdit(props.data, props.id)
  }

  const Votes = (data: any, id: string) => {
    let [votes, setVotes] = useState(props.data.votes)
    const itemsRef = firebase.database().ref('places')

    const voteUp = () => {
      setVotes((votes += 1))
      itemsRef.child(props.id).update({ votes: votes })
    }
    const voteDown = () => {
      setVotes((votes -= 1))
      itemsRef.child(props.id).update({ votes: votes })
    }
    return (
      <div className='votes-wrapper'>
        <h4>Votes: {votes}</h4>
        <div>
          <FontAwesomeIcon className='icon' icon={faChevronCircleUp} onClick={voteUp} />
          <FontAwesomeIcon className='icon' icon={faChevronCircleDown} onClick={voteDown} />
        </div>
      </div>
    )
  }

  return (
    <div className='marker-container' onClick={(e) => e.stopPropagation()}>
      {props.isActive ? (
        <div className='info-container' hidden={isHidden}>
          <FontAwesomeIcon className='close-icon' icon={faTimes} onClick={() => setIsHidden(!isHidden)} />
          <h2>Name: {props.data.name} </h2>
          <h2>Network: {props.data.network} </h2>
          <h2>Password: {props.data.pass} </h2>
          <Votes data={props.data} id={props.id} />
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
