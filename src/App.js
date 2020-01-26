import React from 'react';
import './App.css';
import { Row, Col } from 'antd';
import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';

function App() {
  return (
    <Row>
      <Col span={4}>
        <Nav />
      </Col>
      <Col span={20}>
        <Header />
        <Footer />
      </Col>
    </Row>
  );
}

export default App;
