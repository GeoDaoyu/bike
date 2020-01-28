import React from 'react';
import './App.less';
import { Row, Col } from 'antd';
import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Home from './pages/Home';

function App() {
  return (
    <Row className="container">
      <Col span={4} className="nav">
        <Nav />
      </Col>
      <Col span={20} className="main">
        <Header />
        <Row className="content">
          <Home />
        </Row>
        <Footer />
      </Col>
    </Row>
  );
}

export default App;
