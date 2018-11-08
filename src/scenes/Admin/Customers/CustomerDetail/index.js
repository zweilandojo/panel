import React from 'react';
import { } from 'react-router-dom';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';

// Components
import AdminAppHeader from '../../../../components/AppHeader/AdminAppHeader.js'
import Breadcrumbs2 from '../../../../components/Breadcrumbs/index2.js'
import ContextView from '../../../../components/ContextView/index.js'
import TabProfile from './TabProfile.js'

class CustomerDetail extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div className="Admin">
        <AdminAppHeader />
        <Breadcrumbs2
          parentUrl="/admin-customers"
          parentPage="Customers"
          currentPage="Customer ID"
        />
        <div className="Admin-content">
          <ContextView />
          <div className="Card ml-5">
            <div className="Card-content">
              <Nav tabs>
                <NavItem>
                  <NavLink
                    className={classnames({ active: this.state.activeTab === '1' })}
                    onClick={() => { this.toggle('1'); }}
                  >
                    Profile
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: this.state.activeTab === '2' })}
                    onClick={() => { this.toggle('2'); }}
                  >
                    Agent
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: this.state.activeTab === '3' })}
                    onClick={() => { this.toggle('3'); }}
                  >
                    Actions
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: this.state.activeTab === '4' })}
                    onClick={() => { this.toggle('4'); }}
                  >
                    HomeFit
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: this.state.activeTab === '5' })}
                    onClick={() => { this.toggle('5'); }}
                  >
                    Events
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: this.state.activeTab === '6' })}
                    onClick={() => { this.toggle('6'); }}
                  >
                    MLS
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: this.state.activeTab === '7' })}
                    onClick={() => { this.toggle('7'); }}
                  >
                    Missions
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: this.state.activeTab === '8' })}
                    onClick={() => { this.toggle('8'); }}
                  >
                    Tasks
                  </NavLink>
                </NavItem>
              </Nav>
              <TabContent activeTab={this.state.activeTab}>
                <TabPane tabId="1">
                  <Row>
                    <Col sm="12">
                      <TabProfile />
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId="2">
                  <Row>
                    <Col sm="12">
                      <h4>Agent Contents</h4>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId="3">
                  <Row>
                    <Col sm="12">
                      <h4>Actions Contents</h4>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId="4">
                  <Row>
                    <Col sm="12">
                      <h4>HomeFit Contents</h4>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId="5">
                  <Row>
                    <Col sm="12">
                      <h4>Event Contents</h4>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId="6">
                  <Row>
                    <Col sm="12">
                      <h4>MLS Contents</h4>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId="7">
                  <Row>
                    <Col sm="12">
                      <h4>Missions Contents</h4>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId="8">
                  <Row>
                    <Col sm="12">
                      <h4>Tasks Contents</h4>
                    </Col>
                  </Row>
                </TabPane>
              </TabContent>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default CustomerDetail;
