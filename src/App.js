/* eslint-disable */
import React from 'react';
import Router3 from './Component/router3';
import FromSearch from './Component/form-search.js';
import FormBootstrap from './Component/form-bootstrap.js';
import FormText from './Component/form-text.js';
import FormCheck from './Component/form-check.js';
import FormSelectFile from './Component/form-select-file.js';
import './App.css'
import FormValidation from './Component/form-validation.js';
const App = () => (
  <>
    <Router3 />
    {/* <FromSearch />
    <FormBootstrap />
    <FormText />  */}
    <FormCheck/>
    <FormSelectFile/>
    <FormValidation/>
  </>
);

export default App;
