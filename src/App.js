import * as React from "react";
import { Admin, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-json-server';

import { DemoList } from './list';

import './App.css';

function App() {
  return (
    <Admin dataProvider={simpleRestProvider('https://run.mocky.io/v3')}>
      <Resource name="638918e8-d1a6-4677-b0fa-7cfc7fcdaff1" list={DemoList}></Resource>
    </Admin>
  );
}

export default App;
