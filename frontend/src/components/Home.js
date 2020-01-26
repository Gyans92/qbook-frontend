import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import TypoGraphy from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import "./home.css"

class Home extends React.Component {
  render() {
    return (
      <div>
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

    <div className="sideBar">
      <div id="accordion">
        <div class="card">
         <div class="card-header" id="headingOne">
          <h5 class="mb-0">
           <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Colleges
          </button>
         </h5>
        </div>

        <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
          
           <div class="list-group">
            <a href="#" class="list-group-item list-group-item-action list-group-item-primary">University of California, Los Angeles</a>
            <a href="#" class="list-group-item list-group-item-action list-group-item-secondary">University of California, Irvine</a>
            <a href="#" class="list-group-item list-group-item-action list-group-item-success">University of California, Riverside</a>
            <a href="#" class="list-group-item list-group-item-action list-group-item-danger">University of California, San Diego</a>
          </div>

        </div>
      </div>

      <div class="card">
         <div class="card-header" id="">
          <h5 class="mb-0">
           <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Events
          </button>
         </h5>
      </div>
      </div>

    </div>
  </div>
      
  </div>
    );
  }
}

export default Home;
