import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import ProfileP from './photos/profile.jpg'


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src={ProfileP}
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Huong Nguyen</h2>
            <h4 style={{color: 'grey'}}>Full stack Developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>My name is Huong, i was born in such a small village in a Souththen of VietNam.
                 I am a multi-tasking person, introvert, shy and passion about what ever that i am interested in.
                 Spending 7 years living in the US help me learned so many good thing included: finish AA for Nursing, Nursing Assistant Cetificated, and now time to explore technologies world.
                 Why am i choose coding?
                                </p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>572 Edmonds Ave NE Renton WA 98056</p>
            <h5>Phone</h5>
            <p>(206) 573 1186</p>
            <h5>Email</h5>
            <p>huonghuonglacey1020@gmail.com</p>
            
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2013}
              endYear={2016}
              schoolName="Seattle Central College"
              schoolDescription="AA for pre-nursing"
               />

               <Education
                 startYear={2016}
                 endYear={2017}
                 schoolName="CNA training course"
                 schoolDescription="Nursing Assistant Cetification"
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2017}
              endYear={2020}
              jobName="First Job"
              jobDescription="Nursing assistant job in Kline Galland home"
              />

              
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={100}
                />
              <Skills
                  skill="HTML/CSS"
                  progress={80}
                  />
              <Skills
                    skill="NodeJS"
                    progress={50}
                    />
              <Skills
                      skill="React"
                      progress={25}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
