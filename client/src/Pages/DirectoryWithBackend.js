import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

import React, { useState, useEffect } from "react";
import axios from "axios";

export default function DirectoryWithBackend() {
    const [playgrounds, setPlaygrounds] = useState([]);
  
    useEffect(() => {
      axios.get("http://localhost:5005/api/playgrounds/").then((response) => {
        setPlaygrounds(response.data);
      });
    }, []);
  
    return (
      <>
        <h1>Directory & Reviews</h1>
  
        <div className="reviews" style={{ padding: 30 }}>
          <Grid container spacing={2} justifyContent="center" alignItems="center">
            {playgrounds.map((playground) => (
              <Grid item xs={4} key={playground.name}>
                <Card style={{ maxWidth: 335, backgroundColor: "#AEC595" }}>
                  <CardMedia style={{ height: 140 }}
                    image={playground.pictures[0]}
                    title="inclusive-park"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" color="#fffff0" fontFamily="Impact">
                      <b>{playground.name}</b>
                    </Typography>
                    <Typography variant="body2" color="#fffff0">
                      <i>{playground.location}</i>
                      <br />
                      <br />
                      {playground.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Add Review</Button>
                    <Button size="small">Read More</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </>
    );
  }
