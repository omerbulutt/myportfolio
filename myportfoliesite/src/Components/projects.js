import React, {Component} from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component{
    constructor(props){
        super(props);
        this.state = {activeTab:0};
    }

    toggleCategories(){
        if(this.state.activeTab===0){
            return(
                <div className="projects-grid">
                {/*React Project 1*/}
                <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                    <CardTitle style={{color:'#fff', height:'176px', background:'url(https://miro.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover'}}>
                    React Projects    
                    </CardTitle> 
                    <CardText>
                    React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications                    </CardText>   
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{color:'#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>

                 {/*React Project 2*/}
                 <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                    <CardTitle style={{color:'#fff', height:'176px', background:'url(https://miro.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover'}}>
                    React Projects    
                    </CardTitle> 
                    <CardText>
                    React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications
                    </CardText>   
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{color:'#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>

                 {/*React Project 3*/}
                 <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                    <CardTitle style={{color:'#fff', height:'176px', background:'url(https://miro.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover'}}>
                    React Projects    
                    </CardTitle> 
                    <CardText>
                    React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications 
                    </CardText>   
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{color:'#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>
                </div>
               
            )
        }else if(this.state.activeTab===1){
            return(
                <div className="projects-grid">
                {/*Unity Project 1*/}
                <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                    <CardTitle style={{color:'#fff', height:'176px', background:'url(https://miro.medium.com/max/750/1*cRFhIBaXVYysx0aApKC2gg.jpeg) center / cover'}}>
                    Unity Projects    
                    </CardTitle> 
                    <CardText>
                    Unity is so much more than the world’s best real-time development platform – it’s also a robust ecosystem designed to enable your success. Join our dynamic community of creators so you can tap into what you need to achieve your vision.
                    </CardText>   
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{color:'#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>

                 {/*Unity Project 2*/}
                 <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                    <CardTitle style={{color:'#fff', height:'176px', background:'url(https://miro.medium.com/max/750/1*cRFhIBaXVYysx0aApKC2gg.jpeg) center / cover'}}>
                    Unity Projects    
                    </CardTitle> 
                    <CardText>
                    Unity is so much more than the world’s best real-time development platform – it’s also a robust ecosystem designed to enable your success. Join our dynamic community of creators so you can tap into what you need to achieve your vision.
                    </CardText>     
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{color:'#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>
 
                </div>
            )
        }else if(this.state.activeTab===2){
            return(
                <div className="projects-grid">
                {/*Scala Project 1*/}
                <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                    <CardTitle style={{color:'#fff', height:'176px', background:'url(https://i0.wp.com/blog.knoldus.com/wp-content/uploads/2019/03/lagom.png?fit=500%2C293&ssl=1) center / cover'}}>
                    Scala Projects    
                    </CardTitle> 
                    <CardText>
                    Lagom is an open source framework for building systems of Reactive microservices in Java or Scala. Lagom builds on Akka and Play, proven technologies that are in production in some of the most demanding applications today.
                    </CardText>   
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{color:'#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>

                </div>
            )
        }
    }

    render(){
        return(
            <div>
                <Tabs activeTab={this.state.activeTab} onChange={(tabId)=> this.setState({activeTab:tabId})} ripple>
                <Tab>React</Tab>
                <Tab>Unity</Tab>
                <Tab>Scala</Tab>
                </Tabs>
        
                   <Grid>
                       <Cell col={12}>
                            <div className="content">{this.toggleCategories()} </div>
                       </Cell>
                   </Grid>

            </div>
        )
    }
}

export default Projects;