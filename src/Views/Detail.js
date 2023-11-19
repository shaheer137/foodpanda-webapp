import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getSingleData } from "../config/firebase"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { addCartToStore } from '../store/cart'
import { useDispatch } from 'react-redux'


function Detail() {
  const [restroData, setRestroData] = useState()
  const { restro_id } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const data = await getSingleData(restro_id)
    setRestroData(data)
  }
  console.log('restroData -->')
  console.log(restroData)

  if (!restroData) {
    return <div>Loading...</div>
  }


  const { opening_hours, restaurant_name, address, menu_categories, phone } = restroData
  const open_hours = []

  for (let key in opening_hours) {
    open_hours.push(`${key}: ${opening_hours[key]}`)
  }

  const addToCart = (item) => {
    dispatch(addCartToStore(item))
  }

  return <div style={{ width: '100%', display: "flex" }}>
    <div style={{ alignContent: 'center', display: "inline-block", width: '29%', marginLeft: '45px', marginTop: '25px', height: '100%', padding: '5px', backgroundColor: 'white', textAlign: 'center', color: 'black' }} >
     
      <Tabs>
        <TabList>
          {menu_categories.map(function (item) {
            return <Tab>{item.category_name}</Tab>
          })}
        </TabList>

        <TabPanel>
          {menu_categories[0].items.map(function (item) {
            return <div>
              <img width={350} height={300} src={item.item_image_url} />
              <span><p> <b>Item: </b> {item.item}</p>
              <p> <b>Price: </b>{item.price}</p>
                <button onClick={() => addToCart(item)} className="btn-cart">Add to cart</button>
              </span>
            </div>
          })}
        </TabPanel>
        <TabPanel>
          {menu_categories[1].items.map(function (item) {
            return <div>
              <img width={350} height={300} src={item.item_image_url} />
              <span><p> <b>Item: </b> {item.item}</p>
              <p> <b>Price: </b>{item.price}</p>
                <button onClick={() => addToCart(item)} className="btn-cart">Add to cart</button>
              </span>
            </div>
          })}
        </TabPanel>
        <TabPanel>
          {menu_categories[2].items.map(function (item) {
            return <div>
              <img width={350} height={300} src={item.item_image_url} />
              <span> <p> <b>Item: </b> {item.item}</p>
                <p> <b>Price: </b>{item.price}</p>
                <button onClick={() => addToCart(item)} className="btn-cart">Add to cart</button> </span>
            </div>
          })}
        </TabPanel>
      </Tabs>

    </div>
    <div style={{ alignContent: 'center', display: "inline-block", width: '25%', margin: '20px', height: '100%', padding: '5px', backgroundColor: 'white', textAlign: 'center', color: 'black', position: 'relative', top: '80px' }}>
      <h2 style={{ color: 'deeppink' }}>{restaurant_name}</h2>
      <br />
      <h3>Address: </h3>
      <p> <b>Street: </b> {address.street}</p>
      <p><b>City: </b> {address.city}</p>
      <p><b>Postal code: </b> {address.postal_code}</p>
      <br />
      <p><b>Phone No: </b>{phone}</p>
    </div>
    <div style={{ alignContent: 'center', display: "inline-block", width: '25%', border: '1px solid deeppink', margin: '20px', height: '100%', padding: '5px', backgroundColor: 'white', textAlign: 'center', color: 'black', borderRadius: 10, position: 'relative', top: '100px' }}>
      <h3 style={{ color: 'deeppink' }}>Timings</h3>
      {open_hours.map(item => <p>{item}</p>)}
    </div>
  </div>
}

export default Detail 