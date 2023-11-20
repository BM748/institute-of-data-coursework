import { Grid, Card, CardContent, Typography } from '@mui/material';

const posts = [
  { title: 'Post 1', content: 'Content for Post 1' },
  { title: 'Post 2', content: 'Content for Post 2' },
  { title: 'Post 3', content: 'Content for Post 3' },

];

const PostList = () => {
  return (
    <Grid container spacing={2}>
      {posts.map((post, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                {post.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {post.content}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default PostList;