function Card(props) {
    const { restaurant_name, cuisine_type, image_url } = props.data

    return <div onClick={props.onClick} style={{ display: "inline-block", width: '28%', height: '100%', marginLeft: '30px', padding: '5px', backgroundColor: 'white', color: 'black' }}>
        <img width={350} height={200} src={image_url} />
        <h3>{restaurant_name}</h3>
        <h4>$$$ {cuisine_type}</h4>
    </div>
}
export default Card