import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import TypoGraphy from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import axios from "axios";
import { getQueryArg } from "../utils";
import "./members.css";

class Members extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      college: [],
      members: [],
      currentMember: {},
      user: {}
    };
  }

  componentDidMount = () => {
    axios.get("http://3.133.5.150:8080/search-user").then(res => {
      let members = res.data || [];
      let currentMember = members.find(a => a.email == getQueryArg("email"));
      let user = members.find(a => a.email == getQueryArg("user"));
      this.setState({
        members: members,
        currentMember: currentMember,
        user: user
      });
    });
  };
  render() {
    const { currentMember, user } = this.state || {};
    return (
      <div className="main">
        <AppBar color="" position="static">
          <List component="nav">
            <ListItem component="div">
              <ListItemText inset>
                <TypoGraphy color="inherit" variant="title">
                  Logo
                </TypoGraphy>
              </ListItemText>

              <ListItemText inset>
                <TypoGraphy color="inherit" variant="title">
                  QueerBook
                </TypoGraphy>
              </ListItemText>
            </ListItem>
          </List>
        </AppBar>
        <div className="info">
          <div className="profile-pic"></div>
          <div className="profile-info">
            <div className="Name">
              <div>Name </div>
              <div>{user.name}</div>
            </div>
            <div className="Email">
              <div>Email </div> {user.email}
            </div>
            <div className="College">
              <div>College</div>
              {user.college}
            </div>
            <div className="Pronouns">
              <div>Pronouns</div>
              {user.pronouns}
            </div>
            <div className="IntersetedIn">
              <div>Interseted in</div>
              {user.interestedIn}
            </div>
          </div>
        </div>
        <div className="scrap"></div>
      </div>
    );
  }
}

export default Members;
