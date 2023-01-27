import React from "react";
import '../Styles/DashboardCarousel.css'
import schoolImg from '../Images/schoolImg.png'
import { Button } from "react-bootstrap";

const DashboardCarousel = () => {
    return(
        <>
        <div className="carousel-main">
            <div className="gyaankunjDesc">
                <h1 className="text-white display-9 fw-bold">Welcome To GyaanKunj Learning Application</h1>
                <p className="text-white-50 mb-4 lead">A School Management System to manage school management and schedules.</p>
                <div className="mb-2 carouselBtn">
        <Button variant="primary" className="exploreBtn" size="lg">
          Explore Courses
        </Button>{' '}
        <Button variant="secondary" size="lg">
          Check Reports
        </Button>
      </div>
            </div>
            <div className="carousel-img">
                <img style={{height:"400px", width:"685px"}} src={schoolImg} />
            </div>
        </div>
        </>
    )
}

export default DashboardCarousel