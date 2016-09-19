/*import React from 'react';
import { PropTypes } from 'react-router';
import Immutable from 'immutable';

const { AppBar,
      AppCanvas,
      FontIcon,
      FlatButton,
      ClearFix,
      IconButton,
      EnhancedButton,
      Menu,
      Mixins,
      RaisedButton,
      RefreshIndicator,
      TextField,
      Styles,
      Tab,
      Tabs,
      Paper} = require('material-ui');

const { StylePropable } = Mixins;
const { Colors, Spacing, Typography } = Styles;



export default class LoginSignupPage extends React.Component {

  constructor(props, context) {
  	super(props, context);
    this.state.loginErrorMessage ="Username or password were incorrect";
    this.state.signupErrorMessage ="Username/Email might already exist, try something else";
  	this.context = context;
  }

  componentDidMount() {
  	
  }

  componentWillUnmount() {
  	
  }

  componentDidUpdate() {

  	//console.log(this.context.history);
  	//if(this.state.user.get('authenticated')){
  		//this.context.history.push('/');
  	//}

  }

  componentWillReceiveProps(nextProps, nextContext) {

  }



  _onLoginSubmit = () => {
    let email = this.refs.email.getValue();
    const password = this.refs.password.getValue();

   
  }

   _onSignupSubmit = () => {
    let email = this.refs.emailsignup.getValue();
    const password = this.refs.passwordsignup.getValue();
    const firstName = this.refs.firstName.getValue();
    const lastName = this.refs.lastName.getValue();
    console.log(email);
    console.log(password);
    console.log(firstName);
    console.log(lastName);
  }

  onTabChange(isLogin) {

  }

  _onLogout = () => {
   
  }

  render() {
    
  	//console.log(this.state.user.get('authenticated'));
  	if(this.state.user.get('authenticated')){
  		this.context.history.goBack();
  	}
  	

  	let style = {
  	
  	liveExamplePaper: {
        backgroundColor: '#2F2F2F',
        marginTop: '64px',
        marginBottom: 32,
        margin: '0 auto',
        color: 'white', 
        overflow: 'hidden',
        width: '100%'
      },
    
    liveExampleBlock: {
        borderRadius: '0 0 2px 0',
        margin: 0,
        padding: Spacing.desktopGutter
      }

  	};

  	let renderedResult;
renderedResult = (
        <Paper style = {style.liveExamplePaper}>
      <Tabs style = {style.liveExampleBlock}>
            <Tab label="Login" onClick={this.onTabChange.bind(this, false)} style ={{backgroundColor: '#4527A0'}}>
            <TextField floatingLabelStyle = {{color: 'white'}} inputStyle = {{color: 'white'}} hintStyle = {{color: 'white'}} floatingLabelText="Username"  hintText="Login ID/Email" ref = "email" />
            <br/>
            <TextField floatingLabelStyle = {{color: 'white'}} inputStyle = {{color: 'white'}} hintStyle = {{color: 'white'}} floatingLabelText="Password"  hintText="Password" type = "password" ref = "password"  />
            <br/>
            <RaisedButton label="Log In" primary={true} onClick = {this._onLoginSubmit} />
            <br/>
            </Tab>
            <Tab label="Register" onClick={this.onTabChange.bind(this, false)} style ={{backgroundColor: '#4527A0'}}>
            <TextField floatingLabelStyle = {{color: 'white'}} inputStyle = {{color: 'white'}} hintStyle = {{color: 'white'}} floatingLabelText="Email" hintText="Login ID/Email" ref = "emailsignup"/>
            <br/>
            <TextField floatingLabelStyle = {{color: 'white'}} inputStyle = {{color: 'white'}} hintStyle = {{color: 'white'}} floatingLabelText="Create Password"  hintText="Password" type = "password" ref = "passwordsignup" />
            <br/>
            <TextField floatingLabelStyle = {{color: 'white'}} inputStyle = {{color: 'white'}} hintStyle = {{color: 'white'}} floatingLabelText="First Name" hintText="LastName" ref = "firstName"/>
            <br/>
            <TextField floatingLabelStyle = {{color: 'white'}} inputStyle = {{color: 'white'}} hintStyle = {{color: 'white'}} floatingLabelText="Last Name" hintText="LastName"  ref = "lastName"/>
            <br/>

            <RaisedButton label="Sign up" primary={true} onClick = {this._onSignupSubmit} />
            </Tab>
          </Tabs>
        </Paper>
        );

    return (
      <div className={styles.about}>
        {renderedResult}
      </div>
    );
  }
}

LoginSignupPage.contextTypes = { history: PropTypes.history };
*/