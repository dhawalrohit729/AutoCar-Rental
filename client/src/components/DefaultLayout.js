import React from "react";
import { Menu, Dropdown, Button, Space, Row, Col } from "antd";
import { Link } from "react-router-dom";

function DefaultLayout(props) {
  const user = JSON.parse(localStorage.getItem("user"));
  const menu = (
    <Menu>
      <Menu.Item>
        <a href="/">Home</a>
      </Menu.Item>
      <Menu.Item>
        <a href="/userbookings">Bookings</a>
      </Menu.Item>
      <Menu.Item>
        <a href="/admin">Admin</a>
      </Menu.Item>
      <Menu.Item
        onClick={() => {
          localStorage.removeItem("user");
          window.location.href = "/login";
        }}
      >
        <li style={{ color: "orangered" }}>Logout</li>
      </Menu.Item>
    </Menu>
  );
  return (
    <div>
      <div className="header bs1" >
        <Row gutter={16} justify="center">
          <Col lg={20} sm={20} xs={24}>
            <div className="d-flex justify-content-between">
              <h1>
                <b>
                  <img src="https://as2.ftcdn.net/v2/jpg/03/58/16/05/1000_F_358160523_d0Tc3knJ0j1RBobgWCjM4BZUo9gx33ZX.jpg" width={50} />
                  <Link to="/"> <span> Rental Wheels </span></Link>
                </b>
              </h1>
              
              <Dropdown overlay={menu} placement="bottomCenter">
                <Button>{user.username}</Button>
              </Dropdown>
            </div>
          </Col>
        </Row>
      </div>
      <div className="content">{props.children}</div>

      <div className="footer text-center">
        <p>Developed By Dhawal Rohit</p>
      </div>
    </div>
  );
}

export default DefaultLayout;
