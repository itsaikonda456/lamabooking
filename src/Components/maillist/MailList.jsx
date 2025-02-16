import "./MailList.css"

const mailList = () => {
  return (
    <>
    <div className="mail">       
          
        <h1 className="mailTitle">Save time, save money!</h1>
        <span className="mailDesc">Sign up and we'll send the best deals to you</span>
        <div className="mailinputContainer">
            <input type="text" placeholder="Your Email" />
            <button>Subscribe</button>
        </div>
        <div className="checkboxinput">
            <input type="checkbox" /> <span>Send me a link to get the FREE Booking.com app!</span>
        </div>
    </div>
    </>
  )
}

export default mailList
