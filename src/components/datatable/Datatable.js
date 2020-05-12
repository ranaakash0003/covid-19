import React, { useState, useEffect } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "./datatable.css";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import axios from "axios";
import paginationFactory from "react-bootstrap-table2-paginator";

const { SearchBar } = Search;

const options = {
  paginationSize: 5,
  pageStartIndex: 1,
  disablePageTitle: true,
  sizePerPageList: [
    {
      text: "5",
      value: 5
    },
    {
      text: "10",
      value: 10
    }
  ]
};

const columns = [
  {
    dataField: "country",
    text: "Country",
    sort: true,
    formatter: (cellContent, row) => {
      return (
        <div className="country-container">
          {row.country}
          <img
            src={row.countryInfo.flag}
            alt={row.countryInfo.iso3}
            width="50px"
          />
        </div>
      );
    }
  },
  {
    dataField: "cases",
    text: "Cases",
    sort: true
  },
  {
    dataField: "todayCases",
    text: "Today Cases",
    sort: true
  },
  {
    dataField: "deaths",
    text: "Deaths",
    sort: true
  },
  {
    dataField: "todayDeaths",
    text: "Today Deaths",
    sort: true,
    formatter: (cellContent, row) => {
      return <h6 className="death-tag">{row.todayDeaths}</h6>;
    }
  },
  {
    dataField: "recovered",
    text: "Recovered",
    sort: true,
    formatter: (cellContent, row) => {
      return <h6 className="recover-tag">{row.recovered}</h6>;
    }
  }
];
const defaultSorted = [
  {
    dataField: "deaths",
    order: "desc"
  }
];

const Datatable = () => {
  const [globalData, setGlobalData] = useState([]);

  useEffect(() => {
    getGlobalData();
  }, []);

  async function getGlobalData() {
    const res = await axios("https://corona.lmao.ninja/v2/countries");
    //   console.log("FFF$$$$$$$", res.data);
    setGlobalData(res.data);
  }

  return (
    <div className="datatable-container">
      <ToolkitProvider
        keyField="id"
        data={globalData}
        columns={columns}
        search={{ searchFormatted: false }}
      >
        {props => (
          <div>
            <SearchBar
              placeholder="Search Country"
              delay={1000}
              {...props.searchProps}
            />
            
            <hr />
            <BootstrapTable
              {...props.baseProps}
              loading={true}
              hover={true}
              bootstrap4
              keyField="id"
              data={globalData}
              columns={columns}
              defaultSorted={defaultSorted}
              pagination={paginationFactory(options)}
            />
          </div>
        )}
      </ToolkitProvider>
    </div>
  );
};
export default Datatable;
