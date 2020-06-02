import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
       <div>
            <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Employee Directory</CardTitle>
            <CardText>
              Employee Directory app use by React
            </CardText>
            <CardActions border>
              <Button colored href="https://github.com/huonghuonglacey1020/fail"
              >GitHub</Button>
              
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Password Generator</CardTitle>
            <CardText> Application that allow user to generate password as the user request
              
            </CardText>
            <CardActions border>
              <Button colored href="https://github.com/huonghuonglacey1020/pw">GitHub</Button>
              
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Weather Dashboard</CardTitle>
            <CardText>
              The weather application that allow user to keep track on local place weather and the next 5days with some UV index info
            </CardText>
            <CardActions border>
              <Button colored href="https://github.com/huonghuonglacey1020/weather">GitHub</Button>
              
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          
        </div>
        <div className="projects-grid">
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Note Taker</CardTitle>
            <CardText>
              Using Node/express to create app that allow user to take note, delete and save it.
            </CardText>
            <CardActions border>
              <Button colored href="https://github.com/huonghuonglacey1020/.github.io-note-taker">GitHub</Button>
              
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Finess Tracker</CardTitle>
            <CardText>
              App that allow user to keep tracking daily workout
            </CardText>
            <CardActions border>
              <Button colored href="https://github.com/huonghuonglacey1020/tracker">GitHub</Button>
              
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React google books search</CardTitle>
            <CardText>
              App that allow user to keep tracking daily workout
            </CardText>
            <CardActions border>
              <Button colored href="https://github.com/huonghuonglacey1020/newreact">GitHub</Button>
              
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

         
        </div>
       </div>


      )
    } else if(this.state.activeTab === 1) {
      return (
        <div><h1>This is React</h1></div>
      )
    } 

  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
