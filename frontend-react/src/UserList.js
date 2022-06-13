import React, { Component } from "react";
import ListComponent from "./ListComponent";

class UserList extends Component {
  state = {
    lists: [],
    loading: true,
  };
  async componentDidMount() {
    const config = {
      headers: {
        "Content-Type": "applications/json",
      },
    };
    config.headers["Authorization"] = "Token " + localStorage.getItem("token");

    var url = "http://127.0.0.1:8000/list/";
    const response = await fetch(url, config);
    const data = await response.json();
    console.log(data);
    this.setState({ lists: data, loading: false });
  }

  render() {
    const listApi = this.state.lists;
    //var token = localStorage.getItem("token");

    return (
      <div>
        {listApi.map((list) => (
          <ListComponent
            key={list.id}
            listName={list.name}
            items={list.item_set}
          />
        ))}
      </div>
    );
  }
}

export default UserList;
