import "./Searchitem.css"

const Searchitem = () => {
  return (
    <>
   
    <div className="searchItem">
        <img src="data:image/jpeg;base64,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" alt="" className="siImg" />
        <div className="siDesc">
            <h1 className="siTitle">Tower Street Apartments</h1>
            <span className="siDistance">500m from center</span>
            <span className="siTaxiOp">Free airport taxi</span>
            <span className="siSubtitle">Studio apartment with air conditioning</span>
            <span className="siFeatures">Entire Studio - 1 Bathroom - 21m 1 full bed</span>
            <span className="siCancelOp">Free cancellation</span>
            <span className="siCancelOpSubtitle">you can cancel later, so lock in this great price today!</span>
        </div>
        <div className="siDetails">
            <div className="siRating">
                <span>Excellent</span>
                <button>8.9</button>
            </div>
            <div className="siSetailTexts">
                <span className="siPrice">$123</span>
                <span className="siTaxOp">Includes taxes and fees</span>
                <button className="CheckAvailable">See availability</button>
            </div>
        </div>
    </div>
    
    <div className="searchItem">
        <img src="https://assets.architecturaldigest.in/photos/65b2b1d5269da4a0ee6c9b42/2:3/w_720,h_1080,c_limit/Untitled%20design%20-%202024-01-26T003841.038.png" alt="" className="siImg" />
        <div className="siDesc">
            <h1 className="siTitle">Tower Street Apartments</h1>
            <span className="siDistance">500m from center</span>
            <span className="siTaxiOp">Free airport taxi</span>
            <span className="siSubtitle">Studio apartment with air conditioning</span>
            <span className="siFeatures">Entire Studio - 1 Bathroom - 21m 1 full bed</span>
            <span className="siCancelOp">Free cancellation</span>
            <span className="siCancelOpSubtitle">you can cancel later, so lock in this great price today!</span>
        </div>
        <div className="siDetails">
            <div className="siRating">
                <span>Excellent</span>
                <button>8.9</button>
            </div>
            <div className="siSetailTexts">
                <span className="siPrice">$123</span>
                <span className="siTaxOp">Includes taxes and fees</span>
                <button className="CheckAvailable">See availability</button>
            </div>
        </div>
    </div>

    <div className="searchItem">
        <img src="https://plus.unsplash.com/premium_photo-1661902934269-17eaf4b04f9f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bHV4dXJ5JTIwbGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D" alt="" className="siImg" />
        <div className="siDesc">
            <h1 className="siTitle">Tower Street Apartments</h1>
            <span className="siDistance">500m from center</span>
            <span className="siTaxiOp">Free airport taxi</span>
            <span className="siSubtitle">Studio apartment with air conditioning</span>
            <span className="siFeatures">Entire Studio - 1 Bathroom - 21m 1 full bed</span>
            <span className="siCancelOp">Free cancellation</span>
            <span className="siCancelOpSubtitle">you can cancel later, so lock in this great price today!</span>
        </div>
        <div className="siDetails">
            <div className="siRating">
                <span>Excellent</span>
                <button>8.9</button>
            </div>
            <div className="siSetailTexts">
                <span className="siPrice">$123</span>
                <span className="siTaxOp">Includes taxes and fees</span>
                <button className="CheckAvailable">See availability</button>
            </div>
        </div>
    </div>
    
    <div className="searchItem">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_K2rJBjkdB4lsWDyDcnjnwETJcIL0OzT6fzc6rsRdWtMIg6kLnHL0R6-93CUmqWfZuVc&usqp=CAU" alt="" className="siImg" />
        <div className="siDesc">
            <h1 className="siTitle">Tower Street Apartments</h1>
            <span className="siDistance">500m from center</span>
            <span className="siTaxiOp">Free airport taxi</span>
            <span className="siSubtitle">Studio apartment with air conditioning</span>
            <span className="siFeatures">Entire Studio - 1 Bathroom - 21m 1 full bed</span>
            <span className="siCancelOp">Free cancellation</span>
            <span className="siCancelOpSubtitle">you can cancel later, so lock in this great price today!</span>
        </div>
        <div className="siDetails">
            <div className="siRating">
                <span>Excellent</span>
                <button>8.9</button>
            </div>
            <div className="siSetailTexts">
                <span className="siPrice">$123</span>
                <span className="siTaxOp">Includes taxes and fees</span>
                <button className="CheckAvailable">See availability</button>
            </div>
        </div>
    </div>
    
    <div className="searchItem">
        <img src="https://imgcdn.stablediffusionweb.com/2024/9/7/f75e924f-affe-4e75-847f-9bde0e083524.jpg" alt="" className="siImg" />
        <div className="siDesc">
            <h1 className="siTitle">Tower Street Apartments</h1>
            <span className="siDistance">500m from center</span>
            <span className="siTaxiOp">Free airport taxi</span>
            <span className="siSubtitle">Studio apartment with air conditioning</span>
            <span className="siFeatures">Entire Studio - 1 Bathroom - 21m 1 full bed</span>
            <span className="siCancelOp">Free cancellation</span>
            <span className="siCancelOpSubtitle">you can cancel later, so lock in this great price today!</span>
        </div>
        <div className="siDetails">
            <div className="siRating">
                <span>Excellent</span>
                <button>8.9</button>
            </div>
            <div className="siSetailTexts">
                <span className="siPrice">$123</span>
                <span className="siTaxOp">Includes taxes and fees</span>
                <button className="CheckAvailable">See availability</button>
            </div>
        </div>
    </div>

    </>
  )
}

export default Searchitem
