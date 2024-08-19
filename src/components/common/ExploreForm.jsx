import React from 'react'
import SearchIcon from '../../assets/icons/search-icon.svg'
import SearchBtn from '../../assets/icons/search-btn.svg'
import LocationIcon from '../../assets/icons/location-icon.svg'
import InsuranceIcon from '../../assets/icons/insurance-icon.svg'
import '../../css/ExploreForm.css'
const ExploreForm = () => {
  return (
    <div>
      <form action="#">
        <div className="form-item">
            <img src={SearchIcon} alt="Search-icon" />
            <input type="text" placeholder='Condition, procedure, speciality...'/>
        </div>
        <div className="form-item">
            <img src={LocationIcon} alt="Location-icon" />
            <input type="text" placeholder='City, state, or zipcode' />
        </div>
        <div className="form-item">
            <img src={InsuranceIcon} alt="Insurance-icon" />
            <input type="text" placeholder='Insurance carrier' />
        </div>
        <div className="form-btn">
            <img src={SearchBtn} alt="Search-btn" />
            <div>
                Find now
            </div>
        </div>
      </form>
    </div>
  )
}

export default ExploreForm
