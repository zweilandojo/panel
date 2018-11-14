import React from 'react';
import { Link } from 'react-router-dom';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';

// Components
import AdminAppHeader from '../../../../components/AppHeader/AdminAppHeader.js'
import Breadcrumbs2 from '../../../../components/Breadcrumbs/index2.js'

class AgentDetail extends React.Component {
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
          parentUrl="/admin-agents"
          parentPage="Agents"
          currentPage="Agent ID"
        />
        <div className="Admin-content">
          <div className="Card">
            <div className="Card-content">
              <div className="StatusPage-title ml-0">
                <div className="StatusPage-titlemain">Agent</div>
                <div className="StatusPage-titlesub"></div>
              </div>
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
                    className={classnames({ active: this.state.activeTab === '4' })}
                    onClick={() => { this.toggle('3'); }}
                  >
                    Actions
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
              </Nav>

              <div className="overflow-y-auto">
                <div className="flex-no-shrink">

                  <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                      <Col sm="12">
                        <h2>Tab</h2>
                      </Col>
                    </TabPane>
                    <TabPane tabId="2">
                      <Col sm="12">
                        <h2>Tab</h2>
                      </Col>
                    </TabPane>
                    <TabPane tabId="3">
                      <Col sm="12">
                        <div className="JsonView">
                          <h4>HomeFit Contents</h4>
                        </div>
                      </Col>
                    </TabPane>
                    <TabPane tabId="4">
                      <Col sm="12">
                        <div className="JsonView">
                          <h4>Brokerage Events</h4>
                          <p className="">This table lists all events tracked by CPS: Messages, profile updates, tags, etc.</p>
                        </div>
                      </Col>
                    </TabPane>
                  </TabContent>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default AgentDetail;
