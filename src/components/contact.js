import React, { Component } from 'react';
import ProfileP from './photos/profile.jpg'
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2 >Huong Nguyen</h2>
            <img
              src={ProfileP}
              alt="avatar"
              style={{height: '250px'}}
               />
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>My name is Huong, i was born in such a small village in a Souththen of VietNam.
                 I am a multi-tasking person, introvert, shy and passion about what ever that i am interested in.
                 Spending 7 years living in the US help me learned so many good thing included: finish AA for Nursing, Nursing Assistant Cetificated, and now time to explore technologies world.
                 Why am i choose coding?
                                 </p>

          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    (206) 573 1186
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-fax" aria-hidden="true"/>
                    (206) 573 1186
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    huonghuonglacey1020@gmail.com
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-map-marker" aria-hidden="true"/>
                    572 Edmonds Ave NE Renton WA 98056
                  </ListItemContent>
                </ListItem>
                


                
              


              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
