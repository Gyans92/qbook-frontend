import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import TypoGraphy from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import "./college.css"
import axios from "axios";
import { getQueryArg } from "../utils";

class Members extends React.Component {
  render() {
      return <div class=".container-fluid "> 
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
      <div class="container">
        <div class="jumbotron jumbotron-margin">
            <p> University of California</p>
        </div>

        <span >
         <div class="border border-info text-div-padding" >
         
          <p>
          What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
         </div>
        </span>

        <div>
          <h1> <strong> Memeber</strong> </h1>
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
    </div>;
  }
}

export default Members;
