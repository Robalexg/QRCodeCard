import './Card.css'

const Card = () => {
    return (
        <section className="card--container">
            <img className='card--image' src="../images/qrcode.png" alt="" />
            <h1>We are an imaginative game studio specializing in simple Hyper-Casual mobile games!</h1>
    
            <h3>
                If you're interested in creating something beautiful!
                Scan the QR code and say Hello!!! 
            </h3>
        </section>
    )
}

export default Card