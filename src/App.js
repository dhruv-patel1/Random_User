import React from "react";
import "./App.css";

export default class App extends React.Component {
  state = {
    loading: true,
    person: null
  };

  async componentDidMount() {
    const url = "https://api.randomuser.me/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ person: data.results[0], loading: false });
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.person) {
      return <div>did not get a person</div>;
    }
    return (
      <div>
        <div className="person-title">
          {this.state.person.name.title}
          {". "}
          {this.state.person.name.first} {this.state.person.name.last}
        </div>

        <div className="pic-background">
          <img src={this.state.person.picture.large} />
        </div>

        <div className="age">
          {"Age: "}
          {this.state.person.dob.age}
        </div>

        <div className="address">
          {"Address: "}
          {this.state.person.location.street.number}{" "}
          {this.state.person.location.street.name}
        </div>

        <div className="more-address">
          {"City/State: "}
          {this.state.person.location.city}
          {", "}
          {this.state.person.location.state}
        </div>

        <div className="phone-num">
          {"Phone #: "}
          {this.state.person.phone}
        </div>
        <footer>
          <p>Refresh to generate new user</p>
        </footer>
      </div>
    );
  }
}
