/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import "./customer.css"

const Customer = () => {
    return (
        <>
            <div className='box'>   
                <div className='column'><div className='first'>
                    <div class="caption">Our community</div>
                    <h2>Learn from hundreds of <em>millions</em> of Moodle users
                    </h2>
                    <div class="block-intro"><p>Moodle is more than just an LMS platform &#8211; we are a global community of educators, trainers, developers, system administrators, and learners who are dedicated to building the world’s most effective platform for online learning.</p>
                        <p>From sharing educational resources and debating new ideas to fixing bugs and updating documentation, our community is here to support you throughout your online learning journey.</p>
                    </div>
                    <div class="button-block">
                        <a href="/" ><span>Meet the Moodle community</span><i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div></div>
                <div className="column">
                    <div className="two-col">
                            <div className="card-inner a">
                                <div class="image">
                                    <img src="https://moodle.com/wp-content/uploads/2022/03/our-community-1.svg" alt="Moodle Community Image" width="980" height="980" />
                                </div>
                                <div class="card-content">
                                    <div class="card-copy">
                                        <h3>Moodle Community</h3>
                                        <div class="desc">Access Q&amp;A forums and resources on how to set up and teach with Moodle.</div>
                                    </div>
                                </div>
                            </div>
                      
                      
                            <div class="card-inner b">
                                <div class="image">
                                    <img src="https://moodle.com/wp-content/uploads/2022/03/our-community-2.svg" alt="MoodleNet Image" width="980" height="980" />
                                </div>
                                <div class="card-content">
                                    <div class="card-copy">
                                        <h3>MoodleNet</h3>
                                        <div class="desc">Our global network to share and curate open educational resources.</div>
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div className='second'>
                            <div class="card-inner c">
                                <div class="image">
                                    <img src="https://moodle.com/wp-content/uploads/2022/03/our-community-3.svg" alt="Moodle Academy Image" width="980" height="980" />
                                </div>
                                <div class="card-content">
                                    <div class="card-copy">
                                        <h3>Moodle Academy</h3>
                                        <div class="desc">Join our learning hub for the global Moodle community.</div>
                                    </div>
                                </div>
                            </div>
                  
                            <div class="card-inner d">
                                <div class="image">
                                    <img src="https://moodle.com/wp-content/uploads/2022/03/our-community-4.svg" alt="Moodle Plugins Image" width="980" height="980" />
                                </div>
                                <div class="card-content">
                                    <div class="card-copy">
                                        <h3>Moodle Plugins</h3>
                                        <div class="desc">Find Moodle-endorsed open source plugins for Moodle LMS and Moodle Workplace.</div>
                                    </div>
                                </div>
                            </div></div>
                       
                    
                </div>
            </div>
      



                 
        
  
  </>
  )
}

export default Customer
