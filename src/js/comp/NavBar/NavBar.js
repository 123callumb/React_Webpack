import React, { Component } from 'react';
//  https://material-ui.com/ <-- Please go an look at their docs
//  The examples are fantastic and it is one of the clearest docs I've ever used.
//  From this you'll be able to see how much we can actually do with it.
//  Here we are importing Material-UI's app bar. 
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';
//  The grid is great and will help us decide how the layout is on different devices when
//  we think we don't need to use css.
import Grid from '@material-ui/core/Grid';
//  Don't worry about the colours too much, like the blue etc we will customize this
//  when we begin building the app. I dont really like the default colours of material-ui. (The blue is ew)

//  We also have a selection of premade icons that look very generic, this will speed the process up.
//  We can  obvs use our own icons when we really deem it but for now let's get this bread.
import MenuIcon from '@material-ui/icons/Menu';

class NavBar extends Component {
    constructor(){
        super();
        this.state = {
            menuOpen: false
        }
    }
    onMenuButton(){
        this.setState({menuOpen: true});
    }
    closeMenu(){
        this.setState({menuOpen: false});
    }
    render(){
        return(
            <div>
                <AppBar position="fixed">
                    <Grid container>
                        <Grid item md={1}>
                            <IconButton color="inherit" style={{width: '50px'}} onClick={() => this.onMenuButton()}>
                                <MenuIcon />
                            </IconButton>
                        </Grid>
                        <Grid item md={6}>
                            <p>App Name here maybe? hmm..</p>
                        </Grid>
                    </Grid>
                </AppBar>
                <MenuBar menuOpen={this.state.menuOpen} closeMenu={this.closeMenu.bind(this)}/>
            </div>
        );
    }
}

//  This will be an example of a menu bar that we can have
class MenuBar extends Component {
    constructor(props){
        super(props);
    }
    homeButton(){
        console.log("Home button pressed");
    }
    testButton(){
        console.log("Test button pressed");

        /*  
            HERE IS AN EXAMPLE OF ASYNCHRONOUSLY CONNECTING TO THE BACK END

            In the file webpack.config.js there is a part of the json object
            that says devServer and has the proxy set to http://localhost:8888
            ^^ When we build the actual file we wont need this as it will be running
            on the production server. 

            Make sure the devServer proxy setting is set to the localhost that your
            xamp/wamp/mamp server is running on while developing. 

            Here is an example of a GET request.

            In js es7 we can use await function. This will be real helpful for async.
        */  
        (async() => {

            // Try and catch incase fetch error ofc...
            try{

                const request = await fetch('api/getData.php', {
                    method: 'GET',
                    headers: {'Accept' : 'application/json', 'Content-Type' : 'application/json'}
                });

                /* 
                   Parse into json so we can treat it as a js object.
                   You should make sure in your php file you end it with a echo of a json object.
                   so like:

                    $response = new stdClass();
                    $response->res = true;
                    $response->data = "Some Data";
                    echo json_encode($response);

                */
                
                const response = await request.json();

                if(response){
                    console.log(response);
                }

            }catch(e){
                console.log("Error Connecting to back-end or error parsing response.");
            }
            
        })();

    }
    signOutButton(){
        console.log("Sign out button pressed");
    }
    render(){
        return(
            <Drawer anchor="left" open={this.props.menuOpen} onClose={this.props.closeMenu}>
                <List>
                    <ListItem button onClick={() => this.homeButton()}>
                        <ListItemText primary={"Home"}/>
                    </ListItem>
                    <ListItem button onClick={() => this.testButton()}>
                        <ListItemText primary={"Test"}/>
                    </ListItem>
                    <ListItem button onClick={() => this.signOutButton()}>
                        <ListItemText primary={"Sign Out"} />
                    </ListItem>
                </List>
            </Drawer>
        );
    }
}

//  This means when this file is called it will automatically export NavBar if
//  there isn't a class specified.
export default NavBar;