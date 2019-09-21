import React from 'react';
import {Layout, Header, Textfield, Drawer, Navigation, Content} from 'react-mdl';
import {Link} from 'react-router-dom';
import Main from './components/routes/main';
import './App.css';

function App() {
  return (
<div style={{height: '1000px', position: 'relative'}}>
    <Layout fixedHeader fixedDrawer>
        <Header title="Title">
            <Textfield
                value=""
                onChange={() => {}}
                label="Search"
                expandable
                expandableIcon="search"
            />
        </Header>
        <Drawer title="Title">
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/about">About Jeremy</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact </Link>
            </Navigation>
        </Drawer>
        <Content>
          <div className="page-content">
            <Main/>
          </div>
        </Content>
    </Layout>
    </div>
  );
}

export default App;
