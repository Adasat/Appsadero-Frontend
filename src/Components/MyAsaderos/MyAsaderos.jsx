
import { useEffect, useState } from "react"
import { getAllMyAsaderos } from "../../services/myAsaderos.service"



function MyAsaderos() {
    const [myAsaderos, setMyAsaderos] = useState([])

    const listMyAsaderos = async () => {
        const res = await getAllMyAsaderos()
        setMyAsaderos(res)
    }

    useEffect(() => {
        listMyAsaderos()
    },[])

  return (
    <>
        <h1>mis asaderos</h1>
        {myAsaderos.map((el) => 
            <li key={el.id}>{el.description}</li>
        )}
    </>
  )
}

export default MyAsaderos