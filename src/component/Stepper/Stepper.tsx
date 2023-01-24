import { Grid } from "@mui/material";
import React from "react";

export const Stepper: React.FC<{ children: any }> = ({ children }) => {
  return <Grid container>{children}</Grid>;
};
