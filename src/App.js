import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Cascading from "./Cascading";
import Search from './Search';
import Select from './Select';
import Dropdown from './Dropdown2'; 
import TextboxSearch from "./TextboxSearch";
import useDeviceDetect from "./Detect_Device_Browser";
import DetectDevice from "./Detect_Device_Browser2";
import DeviceDetector from "./Detect_Device_Browser3";
import DeviceDetection from "./Detect_Device_Browser4";
import DynamicFields from "./AddFields_Dynamically_Hooks";
import AddFields from "./AddFields";
import Arrays from "./Array";

function App() {
  


  return (
    <div>
      <Router>
        <Switch>
          <Route path='/' exact component ={Select}/>
          <Route path='/two'  component={Search} />
          <Route path='/three'  component={Cascading} />
          <Route path='/four'  component={Dropdown} />
          <Route path='/five'  component={TextboxSearch} />
          <Route path='/six'  component={useDeviceDetect} />
          <Route path='/seven'  component={DetectDevice} />
          <Route path='/eight'  component={DeviceDetector} />
          <Route path='/nine'  component={DeviceDetection} />
          <Route path='/ten'  component={DynamicFields} />
          <Route path='/eleven'  component={Arrays} />
          </Switch>
      </Router>
     
    </div>
  );
}

export default App;
