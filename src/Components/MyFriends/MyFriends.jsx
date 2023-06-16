import { useEffect, useState } from 'react'
import { getAllFriends } from '../../services/myFriends.service'

function MyFriends() {
  const [friends, setFriends] = useState([])

  const listMyFriends = async () => {
    const res = await getAllFriends()
    setFriends(res)
  }

  useEffect(() => {
    listMyFriends()
  }, [])

  return (
    <>
        <h1>mis amigos</h1>
        {friends.map((el) => <li key={el.id}>{el.first_name}</li>)}
    </>
    )
}

export default MyFriends
