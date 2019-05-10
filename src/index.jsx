import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { AppContainer } from 'react-hot-loader';
import { HashRouter } from 'react-router-dom';

ReactDOM.render(

  <AppContainer>
     <HashRouter>
       <Component/>
     </HashRouter>
   </AppContainer>,

document.getElementById('react-app-root')
);
