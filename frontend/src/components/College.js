import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import TypoGraphy from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import "./college.css";
import axios from "axios";
import { getQueryArg } from "../utils";

class Members extends React.Component {
  render() {
    return (
      <div class=".container-fluid ">
        <div class="container">
          <div class="jumbotron jumbotron-margin">
            <p> University of California, Los Angeles</p>
          </div>

          <span>
            <div class="border border-info text-div-padding">
              <p>
                The University of California, Los Angeles is a public research
                university in Los Angeles. It became the Southern Branch of the
                University of California in 1919, making it the fourth-oldest of
                the 10-campus University of California system and oldest of the
                campuses in Southern California
              </p>
            </div>
          </span>

          <div>
            <h1>
              {" "}
              <strong> Memebr</strong>{" "}
            </h1>
            <div class="row">
              <div class="col-lg-6">
                <div>
                  <p>Lance</p>
                </div>
              </div>
              <div class="col-lg-6">
                <div>
                  <p>Interests : </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Members;
