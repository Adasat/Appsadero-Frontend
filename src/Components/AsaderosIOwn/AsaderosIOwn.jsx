import { useEffect, useState } from 'react'
import { getMyOwnAsaderos } from '../../services/myAsaderos.service'

function AsaderosIOwn() {

    const [ownAsaderos, setOwnAsaderos] = useState([])

    const listMyOwnAsaderos = async () => {
        const res = await getMyOwnAsaderos()
        setOwnAsaderos(res)
    }

    useEffect(() => {
        listMyOwnAsaderos()        
    }, [])


  return (
    <div>AsaderosIOwn

        {ownAsaderos.map((el) => <li key={el.id}>{el.name}</li>)}


    </div>
  )
}

export default AsaderosIOwn