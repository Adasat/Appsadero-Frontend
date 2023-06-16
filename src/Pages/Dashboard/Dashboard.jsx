import AsaderosIOwn from '../../Components/AsaderosIOwn/AsaderosIOwn'
import MyAsaderos from '../../Components/MyAsaderos/MyAsaderos'
import MyFriends from '../../Components/MyFriends/MyFriends'
import './Dashboard.css'

function Dashboard() {
  return (
    <div className='dashboard'>
      Dashboard
      <MyAsaderos/>
      <AsaderosIOwn/>
      <MyFriends/>
    </div>
  )
}

export default Dashboard