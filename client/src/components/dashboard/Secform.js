/*import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Dropdown,DropdownButton,Card,Button,Table } from 'react-bootstrap';

class Secform extends Component {
    contructor(props) {
        super(props);

        let model = {
          headers: [
              {title: "Id", accessor: "id", index: 0},
              {title: "Profile", accessor:"profile", width: 80, index:1, cell:{
                  type: "image",
                  style: {
                      "width": "50px",
                  }
              }},
              {title:"Name",accessor: "name", width: 300, index:2},
              {title:"Age",accessor: "age", index: 3},
              {title:"Qualification",accessor: "qualification", index:4},
              {title:"Rating",accessor: "rating",index:5,width: 200, cell: row => (
                  <div className="rating">
                      <div style={{
                          backgroundColor: "lightskyblue",
                          textAlign:"center",
                          height: "1.9em",
                          width: (row/5) * 201 + "px",
                          margin: "3px 0 4px 0"
                      }}>{row}</div>
                  </div>
              )},
          ], 
          data: [
              {id: 1, name:"a", age:29, qualification:"B.Com",rating:3,profile:""},
              {id: 2, name:"b", age:35, qualification:"B.Sc",rating:5,profile:""},
              {id: 3, name:"c", age:42, qualification:"B.E",rating:3,profile:""},
          ]
        }

        for(var i = 4; i <= 20; i ++) {
            model.data.push({
                id: i,
                name: "name " + i,
                age: i + 18,
                qualification: "Graduate",
                rating: (i%2 ? 3 : 4),
                profile: "https://png.icons8.com/dotty/50/000000/cat-profile.png"
            })
        }

        this.state = model;

    }
  render() {
    return (
      <div>
        <DataTable className="data-table"
            title="USER PROFILES"
            keyField="id"
            pagination={{
                enabled: true,
                pageLength: 5,
                
            }}

      </div>
    );
  }
}
export default Secform; */