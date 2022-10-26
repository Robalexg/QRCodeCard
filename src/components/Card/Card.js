import './Card.css'

const Card = () => {
    return (
        <section className="card--container">
            <img className='card--image' src="../images/qrcode.png" alt="" />
            <h1>
                Improve your front-end skills by building projects
            </h1>
    
            <h3>
                Scan the QR code to visit Frontend Mentor and take your 
                coding skills to the next level
            </h3>
        </section>
    )
}

export default Card