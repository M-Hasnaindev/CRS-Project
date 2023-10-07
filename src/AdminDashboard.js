import React from 'react'
import Navbar from './components/navbar'
import {MdDone} from 'react-icons/md'

function Admin_dashboard() {
  return (
        <div className="main_container">
            <div className="container">
                <div className="main">
                    <div className="bg-hero">
                        <Navbar/>
                        <div className="text-section">
                            <div className="inner_text">
                                <h1>Campus Requirment System Project</h1>
                                <p>Make The Methodology Of Recruitment And Job-Search Easier Than Ever Before</p>
                            </div>
                            <div className="three_btn">
                                <div className="btn">
                                    <div className="icon">
                                        <MdDone/>
                                    </div>
                                    <div className="text">
                                    Easy Navigation
                                    </div>
                                </div>
                                <div className="btn">
                                    <div className="icon">
                                        <MdDone/>
                                    </div>
                                    <div className="text">
                                    Wide Database Support
                                    </div>
                                </div>
                                <div className="btn">
                                    <div className="icon">
                                        <MdDone/>
                                    </div>
                                    <div className="text">
                                    Advanced Filters
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main_section_here">
                    <div className="data">
                        <div className="jobs_section">
                            <div className="jobs">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
)
}

export default Admin_dashboard