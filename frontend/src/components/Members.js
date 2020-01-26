import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import TypoGraphy from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";

function Members(props) {
  return (
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



    
  );
}

export default Members;
