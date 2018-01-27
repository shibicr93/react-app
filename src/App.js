import React, { Component } from 'react';
import 'react-responsive-tabs/styles.css';
import HeaderComponent from "./components/HeaderComponent"
import SideBarComponent from "./components/SideBarComponent";
import FooterComponent from "./components/FooterComponent";
import WorkflowContentComponent from "./components/WorkflowContentComponent";
import AboutComponent from "./components/AboutComponent";
import NotificationGridComponent from "./components/NotificationGridComponent";

import { Switch, Route } from 'react-router-dom';
import FormElementsComponent from "./components/FormElementsComponent";

class App extends Component {
  render() {
    return (

      <div class="wrapper">
          <HeaderComponent/>
          <SideBarComponent/>
          <div class="content-wrapper">
             <div id="content">
                  <div class="content container">
                      <Switch>
                          <Route path='/about' component={AboutComponent}/>
                          <Route path='/workflow' component={WorkflowContentComponent}/>
                          <Route path='/notificationGrid' component={NotificationGridComponent}/>
                          <Route path='/formElements' component={FormElementsComponent}/>
                      </Switch>
                  </div>
                </div>
          </div>
          <FooterComponent/>
      </div>
    );

  }
}

export default App;
