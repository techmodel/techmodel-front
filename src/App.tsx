import React, { Component } from 'react';
import Offer from './components/Offer';
import OfferList from './components/OfferList';
import {config} from './config';
import {PublicClientApplication} from '@azure/msal-browser';
import { createLogicalNot } from 'typescript';
import { LocalDiningOutlined } from '@material-ui/icons';
import { render } from '@testing-library/react';
import { Button } from '@material-ui/core';
/* eslint-disable */

//const App = () => {
class App extends Component{
  publicClientApplication: PublicClientApplication;

  constructor(props: any){
    super(props);
    this.state = {
      error:"",
      isAuthenticated:null,
      user:{}
    };
  

    this.login = (this as any).login.bind(this)

    this.publicClientApplication = new PublicClientApplication({
      auth:{
        clientId:config.appId,
        redirectUri:config.redirectUrl,
        authority:config.authority
      },
      cache:{
        cacheLocation:"sessionStorage",
        storeAuthStateInCookie: true
      }
    });
}
  

  async login(){
    try{
      await this.publicClientApplication.loginPopup({
        scopes: config.scopes,
        prompt: "select_account"
      });
      this.setState({isAuthenticated:true})
    }
    catch(err){
      this.setState({
        isAuthenticated:false,
        user:{},
        error:err
      });
    }
  }

  logout(){
    this.publicClientApplication.logout();
  }

  render(){
    return (this.state as any).isAuthenticated ?
        <OfferList /> :
        <button onClick={() => this.login()}>Log in</button>;
  }

};

export default App;
