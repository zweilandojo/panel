import React from 'react';
import { Link } from 'react-router-dom';
import ReactTable from "react-table";

// Components
import AdminAppHeader from '../../../components/AppHeader/AdminAppHeader.js'
import Breadcrumbs from '../../../components/Breadcrumbs/index.js'

class AdminBrokerages extends React.Component {
  render() {

    const data = [
      {
        brokerageName: 'Coldwell Banker United, Realtors',
        market: 'Houston, TX',
        mls: 'tx_har',
        agents: '34',
        agentsEnabled: '34',
        ojoPhone: '+1 (512) 555-0015',
        externalID: '900652',
        adminUserId: '100798236',
        isMatching: '✓'
      },
      {
        brokerageName: 'Coldwell Banker Residential Brokerage',
        market: 'Milwaukee, WI',
        mls: 'wi_wirex',
        agents: '53',
        agentsEnabled: '53',
        ojoPhone: '+1 (678) 555-0006',
        externalID: '900618',
        adminUserId: '100703721',
        isMatching: '✓'
      },
      {
        brokerageName: 'Coldwell Banker Residential Brokerage',
        market: 'Boston, MA',
        mls: 'ma_mlspin',
        agents: '110',
        agentsEnabled: '110',
        ojoPhone: '+1 (512) 555-0004',
        externalID: '900601',
        adminUserId: '100827444',
        isMatching: '✓'
      },
      {
        brokerageName: 'Coldwell Banker Residential Brokerage',
        market: 'Denver, CO',
        mls: 'co_metrolist',
        agents: '54',
        agentsEnabled: '54',
        ojoPhone: '+1 (512) 555-0005',
        externalID: '900622',
        adminUserId: '100826444',
        isMatching: '✓'
      },
      {
        brokerageName: 'Coldwell Banker Residential Brokerage',
        market: 'Orlando, FL',
        mls: 'fl_mfrmls',
        agents: '140',
        agentsEnabled: '110',
        ojoPhone: '+1 (512) 555-0002',
        externalID: '900615',
        adminUserId: '100699911',
        isMatching: '✓'
      },
      {
        brokerageName: 'Coldwell Banker Residential Brokerage',
        market: 'Miami, FL',
        mls: 'fl_ramb',
        agents: '147',
        agentsEnabled: '147',
        ojoPhone: '+1 (512) 555-0007',
        externalID: '900615',
        adminUserId: '100699911',
        isMatching: '✓'
      },
      {
        brokerageName: 'Coldwell Banker Preferred',
        market: 'Philadelphia, PA',
        mls: 'bright_mls',
        agents: '45',
        agentsEnabled: '45',
        ojoPhone: '+1 (512) 555-0001',
        externalID: '900633',
        adminUserId: '100827451',
        isMatching: '✓'
      },
      {
        brokerageName: 'Coldwell Banker King Thompson',
        market: 'Columbus, OH',
        mls: 'oh_cbr',
        agents: '80',
        agentsEnabled: '80',
        ojoPhone: '+1 (678) 555-0006',
        externalID: '900616',
        adminUserId: '100606337',
        isMatching: '✓'
      },
      {
        brokerageName: 'Royal LePage',
        market: 'Toronto, Ontario, CA',
        mls: 'on_treb',
        agents: '0',
        agentsEnabled: '0',
        ojoPhone: '+1 (512) 555-0004',
        externalID: '-',
        adminUserId: '-',
        isMatching: '✗'
      },
      {
        brokerageName: 'ERA Wilder Realty',
        market: 'SC',
        mls: 'sc_cml',
        agents: '0',
        agentsEnabled: '0',
        ojoPhone: '+1 (803) 555-0000',
        externalID: '008990',
        adminUserId: '180793',
        isMatching: '✗'
      },
      {
        brokerageName: 'Coldwell Banker Residential Brokerage',
        market: 'Atlanta, FL',
        mls: 'ojo_atlanta',
        agents: '0',
        agentsEnabled: '0',
        ojoPhone: '+1 (678) 555-0000',
        externalID: '900614',
        adminUserId: '100699934',
        isMatching: '✓'
      },
      {
        brokerageName: 'CENTURY 21 Affiliated',
        market: 'WI',
        mls: 'wi_wirex',
        agents: '0',
        agentsEnabled: '0',
        ojoPhone: '+1 (512) 555-0005',
        externalID: '210856',
        adminUserId: '25389388',
        isMatching: '✓'
      },
      {
        brokerageName: 'Better Homes and Gardens Metro Brokers',
        market: 'Atlanta, GA',
        mls: 'ojo_atlanta',
        agents: '102',
        agentsEnabled: '102',
        ojoPhone: '+1 (512) 555-0005',
        externalID: '400019',
        adminUserId: '5027224',
        isMatching: '✓'
      },
      {
        brokerageName: 'Better Homes and Gardens Bradfield Properties',
        market: 'Austin, TX',
        mls: 'tx_actris',
        agents: '5',
        agentsEnabled: '5',
        ojoPhone: '+1 (512) 555-0002',
        externalID: '400074',
        adminUserId: '5027617',
        isMatching: '✓'
      },
      {
        brokerageName: 'Better Homes and Gardens Real Estate HomeCity',
        market: 'Austin, TX',
        mls: 'tx_actris',
        agents: '5',
        agentsEnabled: '5',
        ojoPhone: '+1 (512) 555-0007',
        externalID: 'homecity',
        adminUserId: '100798236',
        isMatching: '✓'
      },
      {
        brokerageName: 'Coldwell Banker Mid-Atlantic',
        market: 'Baltimore, MD',
        mls: 'bright_mls',
        agents: '255',
        agentsEnabled: '100',
        ojoPhone: '+1 (512) 555-0001',
        externalID: '900613',
        adminUserId: '100798236',
        isMatching: '✓'
      }
    ]

    const columns = [
    {
      Header: 'Brokerage Name',
      accessor: 'brokerageName',
      Cell: ({ row }) => (<Link to={{ pathname: `/admin-brokerage-detail` }}>{row.brokerageName}</Link>),
      width:'360'
    }, {
      Header: 'Market',
      accessor: 'market',
      width:'164'
    }, {
      Header: 'MLS',
      accessor: 'mls',
      width:'106'
    }, {
      Header: 'Matching',
      accessor: 'isMatching',
      width:'80'
    }, {
      Header: 'Agents',
      accessor: 'agents',
      width:'70'
    }, {
      Header: 'Agents Enabled',
      accessor: 'agentsEnabled',
      width:'120'
    }, {
      Header: 'OJO Phone #',
      accessor: 'ojoPhone',
      width:'148'
    }, {
      Header: 'External ID',
      accessor: 'externalID',
      width:'90'
    }, {
      Header: 'Admin User ID',
      accessor: 'adminUserId',
      width:'110'
    }]

    return (
      <div className="Admin">
        <AdminAppHeader />
        <Breadcrumbs currentPage="Brokerages" />
        <div className="Admin-inner">
          <div className="Admin-content">
            <div className="Card">
              <div className="Card-content">
                <div className="no-shrink">
                  <h1>Brokerages</h1>
                  <div class="input-group mb-4 max-w-xs">
                    <input type="text" class="form-control" placeholder="Search by name or ID" value="" />
                    <div class="input-group-append">
                      <button class="btn btn-primary" type="button">Search</button>
                    </div>
                  </div>
                </div>

                <ReactTable
                  data={data}
                  columns={columns}
                />

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AdminBrokerages;
