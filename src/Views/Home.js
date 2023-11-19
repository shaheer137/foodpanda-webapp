import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate()
    return <div>

        <div style={{ display: 'flex', fontSize: 'x-large', marginLeft: 2, justifyContent: 'center', marginTop: '60px', color: 'black' }}>
            <h2>It's the food and groceries you love, <br /> delivered</h2>
            <img style={{ marginRight: 1 }} width={500} src="https://images.deliveryhero.io/image/foodpanda/homepage/refresh-hero-home-pk.png?width=1264" />
        </div>

        <h2 style={{ marginLeft: '15px' }}>Find us in these cities and many more!</h2>

        <div style={{ display: 'flex' }}>
            
            <div style={{ border: '1px solid lightgrey', width: '33%', marginRight: '10px' }}>
                <img width='100%' height={300} src="https://res.cloudinary.com/www-travelpakistani-com/image/upload/v1660545409/Mazar-e-Quaid.jpg" /><br />
                <center><button style={{ width: '150px', padding: '8px', fontSize: '20px', borderRadius: '10px', marginBottom: '10px', marginTop: '10px' }} onClick={() => navigate('/dashboard')}>Karachi</button></center>
            </div>
            <div style={{ border: '1px solid lightgrey', width: '33%', marginRight: '10px' }}>
                <img width='100%' height={300} src="https://res.cloudinary.com/raastay/images/f_auto,q_auto/v1656766107/Badshahi-Mosque-1/Badshahi-Mosque-1.jpeg?_i=AA" /><br />
                <center><button style={{ width: '150px', padding: '8px', fontSize: '20px', borderRadius: '10px', marginBottom: '10px', marginTop: '10px' }} onClick={() => navigate('/dashboard')}>Lahore</button></center>
            </div>
            <div style={{ border: '1px solid lightgrey', width: '33%', marginRight: '10px', marginLeft: '10px' }}>
                <img width='100%' height={300} src="https://res.cloudinary.com/www-travelpakistani-com/image/upload/v1661243930/Faisal_Mosque_travelpakistani.jpg" /><br />
                <center> <button style={{ width: '150px', padding: '8px', fontSize: '20px', borderRadius: '10px', marginBottom: '10px', marginTop: '10px' }} onClick={() => navigate('/dashboard')}>Islamabad</button></center>
            </div>

        </div>

        <div style={{ display: 'flex' }}>
            
            <div style={{ border: '1px solid lightgrey', width: '33%', marginRight: '10px' }}>
                <img width='100%' height={300} src="https://flypakistan.pk/assets/img/blog/Best%20Places%20To%20Visit%20In%20Faisalabad%20-%20In%20Manchester%20Of%20Pakistan.jpg" /><br />
                <center><button style={{ width: '150px', padding: '8px', fontSize: '20px', borderRadius: '10px', marginBottom: '10px', marginTop: '10px' }} onClick={() => navigate('/dashboard')}>Faisalabad</button></center>
            </div>
            <div style={{ border: '1px solid lightgrey', width: '33%', marginRight: '10px' }}>
                <img width='100%' height={300} src="https://www.pakistanihealthyrecipes.com/wp-content/uploads/2022/12/Rawat-Fort-1024x683.jpg" /><br />
                <center><button style={{ width: '150px', padding: '8px', fontSize: '20px', borderRadius: '10px', marginBottom: '10px', marginTop: '10px' }} onClick={() => navigate('/dashboard')}>Rawalpindi</button></center>
            </div>
            <div style={{ border: '1px solid lightgrey', width: '33%', marginRight: '10px', marginLeft: '10px' }}>
                <img width='100%' height={300} src="https://cdn.pixabay.com/photo/2019/05/19/10/07/noor-mahal-4213703_640.jpg" /><br />
                <center> <button style={{ width: '150px', padding: '8px', fontSize: '20px', borderRadius: '10px', marginBottom: '10px', marginTop: '10px' }} onClick={() => navigate('/dashboard')}>Bahawalpur</button></center>
            </div>

        </div>

        <div style={{ display: 'flex' }}>
            
            <div style={{ border: '1px solid lightgrey', width: '33%', marginRight: '10px' }}>
                <img width='100%' height={300} src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/98/f7/df/charminar.jpg?w=700&h=500&s=1" /><br />
                <center><button style={{ width: '150px', padding: '8px', fontSize: '20px', borderRadius: '10px', marginBottom: '10px', marginTop: '10px' }} onClick={() => navigate('/dashboard')}>Hyderabad</button></center>
            </div>
            <div style={{ border: '1px solid lightgrey', width: '33%', marginRight: '10px' }}>
                <img width='100%' height={300} src="https://historypak.com/wp-content/uploads/2014/03/larkana-extended.jpg" /><br />
                <center><button style={{ width: '150px', padding: '8px', fontSize: '20px', borderRadius: '10px', marginBottom: '10px', marginTop: '10px' }} onClick={() => navigate('/dashboard')}>Larkana</button></center>
            </div>
            <div style={{ border: '1px solid lightgrey', width: '33%', marginRight: '10px', marginLeft: '10px' }}>
                <img width='100%' height={300} src="https://cdn.britannica.com/84/128584-050-936EE993/Mosque-Jhelum-Pakistan.jpg" /><br />
                <center> <button style={{ width: '150px', padding: '8px', fontSize: '20px', borderRadius: '10px', marginBottom: '10px', marginTop: '10px' }} onClick={() => navigate('/dashboard')}>Jhelum</button></center>
            </div>

        </div>
    </div>

}

export default Home