import React, { useEffect } from 'react'

const FriendsList = ({data}) => {
  // useEffect(() => {console.log(data.results)},[])

  const person = data.results[0]

  return (
    <>
    <h2>{person.name.title} {person.name.first} {person.name.last}</h2>
    <img src={person.picture.large}></img>
    </>
  )
}

export default FriendsList