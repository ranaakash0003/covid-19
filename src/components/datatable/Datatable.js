import React, { useState, useEffect } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "./datatable.css";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import axios from "axios";
import paginationFactory from 'react-bootstrap-table2-paginator';


const { SearchBar } = Search;

const columns = [
  {
    dataField: "country",
    text: "Country",
    sort: true
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
      return (
        <h6 className="death-tag">{row.todayDeaths}
        </h6>
      );
    }
    // style: {
    //   color: "red",
    //   fontWeight: "700",
    //   textAlign: "center",
    //   borderRadius: "5px"
    // }
  },
  {
    dataField: "recovered",
    text: "Recovered",
    sort: true,
    formatter: (cellContent, row) => {
      return (
        <h6 className="recover-tag">{row.recovered}
        </h6>
      );
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
      const res = await axios("https://corona.lmao.ninja/countries");
    //   console.log("FFF$$$$$$$", res.data);
      setGlobalData(res.data);
    }
    // console.log("DATAAAAAAAAAA", globalData);

  return (
    <div className="datatable-container">
      <ToolkitProvider
        keyField="id"
        data={globalData}
        columns={columns}
        search={{ searchFormatted: true }}
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
              pagination={ paginationFactory() }
            />
          </div>
        )}
      </ToolkitProvider>
    </div>
  );
};
export default Datatable;
