import { Grid } from "@mui/material";
import React from "react";
import "./InputStyle.css";
export const Input = () => {
  return (
    <Grid container justifyContent="center">
      <div className="input-group">
        <Grid item width="350px">
          <label className="user-label">First Name</label>
          <input
            placeholder="Your name"
            required
            type="text"
            name="name"
            className="input"
          />
        </Grid>
        <Grid item width="350px">
          <label className="user-label">Your Goal</label>

          <input
            placeholder="Your goal"
            required
            type="text"
            name="goal"
            className="input"
          />
        </Grid>
      </div>
    </Grid>
  );
};
