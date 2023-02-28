import React, { useContext } from 'react';
import { ResultsContext } from '../header/Header';
import { Card, Col, Row, Button } from 'antd';
import Header from '../header/Header';
import Navbar from '../../Metha/sup-compo/navbar/navbarMain';
///ท็อป & เป๊ก
const SearchResults = () => {
  const { Meta } = Card;
  const results = JSON.parse(sessionStorage.getItem('searchResults')) || [];

  if (results.length === 0) {
    return (
      <div className="text-center mt-5">
        <Header />
        <Navbar />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        ไม่มีสินค้าที่คุณต้องการ
      </div>
    );
  }

  return (
    <>
    <Header/>
    <Navbar/>
    <div class="justify-content-center text-center">
      <Row>
        {results.slice(7, 250).map((products) => (
          <Col key={products.id}>
            <Card
              hoverable
              style={{
                width: 240,
              }}
              onClick={() => window.location.href = `/produc/${products.id}`}
              cover={<img alt="example" src={products.image_product} />}
            >
              <Meta
                title={products.product_name}
                description={products.product_price}
              />
              <br />
              <Button type="primary" onClick={() => window.location.href = `/produc/${products.id}`} danger>
                View Details
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
      <hr />
      {/* <Table columns={columns} dataSource={product} /> */}
      <hr />
    </div>
    </>
  );
};

export default SearchResults;
