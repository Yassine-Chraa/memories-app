import { useState, useEffect } from "react";
import { AppBar, Container, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useDispatch } from "react-redux";
import { getPosts } from "./store/actions/posts";
import Posts from "./components/Posts";
import Form from "./components/Form";

const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <Container maxWidth="lg">
      <AppBar style={styles.appBar} position="static" color="inherit">
        <Typography style={styles.heading} variant="h2" align="center">
          <span style={{ color: "grey" }}>M</span>emories
        </Typography>
      </AppBar>
      <Grid
        pt={2}
        container
        justify="space-between"
        alignItems="stretch"
        spacing={3}
      >
        <Grid item xs={12} sm={7}>
          <Posts setCurrentId={setCurrentId} />
        </Grid>
        <Grid item xs={12} sm={4} style={{ marginLeft: "auto" }}>
          <Form currentId={currentId} setCurrentId={setCurrentId} />
        </Grid>
      </Grid>
    </Container>
  );
};

const styles = makeStyles({
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    color: "rgba(0,183,255, 1)",
  },
  image: {
    marginLeft: "15px",
  },
});

export default App;
