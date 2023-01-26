/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import "./customer2.css"
import canvas from "./Canvas.png"

const Customer2 = () => {
    return (
        <>
            <div className='left'>   
                <div className='columnn'><div className='firstt'>
                    <div className="captionn">CUSTOMER STORY</div>
                    <h2>Creating consistency with Canvas.
                    </h2>
                    <div className="block-introo"><p>Virginia Community College System provides flexible pathways in higher education to strengthen individuals and communities. With Canvas as a partner, this rapidly growing system with 23 individual colleges creates consistency in teaching and learning and invests in student success.</p>
                        <p className='a'>A set of Canvas best practices helps maintain LMS-usage consistency across the colleges. <br />Ubiquitous Canvas use allowed VCCS to transition smoothly to online learning during COVID-19.</p>
                    </div>
                    <div className="button-blockk">
                        <a href="/" ><span>Read the story</span><i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div></div>
                <div className="columnn">
                <div className="columnnn">
                    <div className='immgg'> <img src={canvas} alt="" /></div>
                    </div></div>
                       
                    
                </div>
      



                 
        
  
  </>
  )
}

export default Customer2
