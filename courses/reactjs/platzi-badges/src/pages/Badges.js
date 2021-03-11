import React, { Component } from "react";

import "./styles/Badges.css";
import confLogo from "../images/badge-header.svg";
import BadgesList from "../components/BadgesList";
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";
import { Link } from "react-router-dom";

import api from "../api";
import MiniLoader from "../components/MiniLoader";

class Badges extends Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
  };

  componentDidMount() {
    this.fetchData();

    this.intervalId = setInterval(this.fetchData, 5000);

    // this.timeoutId = setTimeout(() => {
    //   this.setState({
    //     data: [
    //       {
    //         id: "2de30c42-9deb-40fc-a41f-05e62b5939a7",
    //         firstName: "Freda",
    //         lastName: "Grady",
    //         email: "Leann_Berge@gmail.com",
    //         jobTitle: "Legacy Brand Director",
    //         twitter: "FredaGrady22221-7573",
    //         avatarUrl:
    //           "https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon",
    //       },
    //       {
    //         id: "d00d3614-101a-44ca-b6c2-0be075aeed3d",
    //         firstName: "Major",
    //         lastName: "Rodriguez",
    //         email: "Ilene66@hotmail.com",
    //         jobTitle: "Human Research Architect",
    //         twitter: "ajorRodriguez61545",
    //         avatarUrl:
    //           "https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon",
    //       },
    //       {
    //         id: "63c03386-33a2-4512-9ac1-354ad7bec5e9",
    //         firstName: "Daphney",
    //         lastName: "Torphy",
    //         email: "Ron61@hotmail.com",
    //         jobTitle: "National Markets Officer",
    //         twitter: "DaphneyTorphy96105",
    //         avatarUrl:
    //           "https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon",
    //       },
    //       {
    //         id: "58r45219-33a2-4512-9ac1-354ad7bec5e9",
    //         firstName: "Kevin J.",
    //         lastName: "Zea",
    //         email: "kevinjzea@gmail.com",
    //         jobTitle: "Front-End Developer",
    //         twitter: "kevinjzea",
    //         avatarUrl:
    //           "https://static.platzi.com/media/avatars/avatars/KevinJZea_d77444af-2422-414f-90c4-d371151b8f41.jpg",
    //       },
    //     ],
    //   });
    // }, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.badges.list();
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading === true && !this.state.data) {
      return <PageLoading />;
    }

    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }

    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img
                className="Badges_conf-logo"
                src={confLogo}
                alt="Conf Logo"
              />
            </div>
          </div>
        </div>

        <div className="Badge__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              New Badge
            </Link>
          </div>

          <div className="Badges__list">
            <div className="Badges__container">
              <BadgesList badges={this.state.data} />
              {this.state.loading && <MiniLoader />}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Badges;
