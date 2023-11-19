import { useState, useEffect } from 'react'
import { getRestaurants } from '../config/firebase'
import { useNavigate } from 'react-router-dom'
import Card from '../Components/Card'

function Dashboard() {
   const [restroData, setRestroData] = useState([])
   const [loading, setLoading] = useState(true)
   const navigate = useNavigate()

   useEffect(() => {
      getData()
   }, [])

   const getData = async () => {
      const data = await getRestaurants()
      setLoading(false)
      setRestroData(data)
   }

   return <div>
      <h2 style={{ marginLeft: 38 }}>All Restaurants </h2>
      {restroData.map(item => {
         return <Card
            data={item}
            onClick={() => navigate(`/restro/${item.id}`)}
         />
      })}
   </div>
}

export default Dashboard