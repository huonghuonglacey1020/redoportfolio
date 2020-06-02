import React, { Component } from 'react';
import ProfileP from './photos/profile.jpg'




class About extends Component {
  render() {
    return(
      <div>
        <div className="container contact-grid ">
            <div className="col-sm-12">
                <div className="media">
                    <img src={ProfileP} style={{height: '250px'}}className="rounded-circle" alt="profile" />
                    <div className="media-body">
                        <h5 className="text-light">About Me</h5>

                        <div className="row">
                            <div className="col-xs-12 col-sm-6 col-md-8 col-lg-9">
                                <div className="p-3 mb-2 bg-secondary text-white">
                                    <p className="text-justify">My name is Huong, i was born in such a small village in a Souththen of VietNam.
                 I am a multi-tasking person, introvert, shy and passion about what ever that i am interested in.
                 Spending 7 years living in the US help me learned so many good thing included: finish AA for Nursing, Nursing Assistant Cetificated, and now time to explore technologies world.
                 Why am i choose coding?
                                </p>

                                </div>
                            </div>
                            <div className="contacts">
                                <p className="text-light">Huong Nguyen</p>
                                <p className="text-light">206 573 1186</p>
                                <p><a href="https://mail.google.com/mail/u/0/#inbox" style={{color: 'white'}}>huonghuonglacey1020@gmail.com</a></p>
                                <p><a href="https://github.com/huonghuonglacey1020"style={{color: 'white'}}>GitHub Profile</a></p>
                                <p><a href="https://www.linkedin.com/in/huong-nguyen-132521197/"style={{color: 'white'}}>Linkedin Profile</a></p>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}
      </div>
    )
  }
}

export default About;
