import React from "react";
import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { createStyles } from "@mui/styles";
import Post from "./Post";

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  return (
    <Grid style={styles.container} container alignItems="stretch" spacing={3}>
      {posts.map((post) => (
        <Grid key={post._id} item xs={12} sm={6} md={6}>
          <Post post={post} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

const styles = createStyles({
  mainContainer: {
    display: "flex",
    alignItems: "center",
  },
});
export default Posts;
