import React from "react";
import Grid from "@mui/material/Grid";
import "./mobres.css";

export default class MobRes extends React.Component {
  render() {
    return (
      <div container>
        <Grid container item xs={12} md={6} lg={4} className="box box1">
          <Grid item xs={6} style={{ backgroundColor: "yellow", height: 20 }}>
            
          </Grid>
        </Grid>
        <Grid item xs={12} md={6} lg={4} className="box box2"></Grid>
        <Grid item xs={12} md={6} lg={4} className="box box3"></Grid>
      </div>
    )
  }
}