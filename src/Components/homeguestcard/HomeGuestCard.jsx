import React from 'react'
import './HomeGuestCard.css'

const HomeGuestCard = () => {
  return (
    <>
    <div className="hgc">
        <div className="hgcItem">
            <img src="https://lh5.googleusercontent.com/p/AF1QipMSpyCdEN-_rmfo5ULE35rvkFOmPxI4JTjEbtpQ=w243-h174-n-k-no-nu" alt="" className="hgcImg" />
            <span className="hgcName">Apart hotel state Miasto</span>
            <span className="hgcCity">Madrid</span>
            <span className="hgcPrice"> Starting from $120</span>
            <div className="hgcRating">
                <button>8.9</button>
                <span className="review">Excellent</span>
            </div>
        </div>
        <div className="hgcItem">
            <img src="https://www.theluxevoyager.com/wp-content/uploads/2019/06/The-Taj-Mahal-Palace-Mumbai-3-734x546.jpg" alt="" className="hgcImg" />
            <span className="hgcName">Taj Mahal Palace Hotel</span> 
            <span className="hgcCity">Mumbai | India</span> 
            <span className="hgcPrice"> Starting from 24,780.00 INR</span>
            <div className="hgcRating">
                <button>9.3</button>
                <span className="review">Excellent</span>
            </div>
        </div>
        
        <div className="hgcItem">
            <img src="https://lh3.googleusercontent.com/p/AF1QipNfci0slaT4UR3DstXAewcsYjR33kZ2pjgMnYZa=s1360-w1360-h1020" alt="" className="hgcImg" />
            <span className="hgcName">
            The Oberoi, Mumbai</span>
            <span className="hgcCity">Mumbai | India</span> 
            <span className="hgcPrice"> Starting from 15,000.00 INR</span>
            <div className="hgcRating">
                <button>8.5</button>
                <span className="review">Excellent</span>
            </div>
        </div>
        <div className="hgcItem">
            <img src="data:image/jpeg;base64,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" alt="" className="hgcImg" />
            <span className="hgcName">Jumeirah Burj Al Arab</span> 
            <span className="hgcCity">Dubai - UAE</span> 
            <span className="hgcPrice"> Starting from 8500 AED</span>
            <div className="hgcRating">
                <button>9.5</button>
                <span className="review">Excellent</span>
            </div>
        </div>
    </div>
    </>
  )
}

export default HomeGuestCard
