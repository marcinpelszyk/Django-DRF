import { makeStyles } from "@material-ui/core/styles";
import Header from "../components/header";
import Box from "@material-ui/core/Box";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Link from "next/link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";


const useStyles = makeStyles((theme) => ({
  example: {
    color: "#ccc",
  },
  cardGrid: {
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    borderRadius: "0",
  },
  cardMedia: {
    paddingTop: "140%",
  },
}));


function Home({posts}) {

  const classes = useStyles();

  return (
    <>
    <Header />
    <main>
      <Container className={classes.cardGrid} maxWidth="1g">
      <Grid container spacing={2}>
        {posts.map((post) => (
        <Link key={post.id} href={'/'}>
          <Grid item xs={6} sm={4} md={3}>
            <Card className={classes.card} elevation={0}>
              <CardMedia></CardMedia>
              <CardContent>
              <Typography gutterBottom component="p">
                {post.title}
              </Typography>
              <Box component="p" fontSize={16} fontWeight={900}>
                {post.price_gross} zł
              </Box>
              </CardContent>
            </Card>
          
          </Grid>
        </Link>
        ))}
      </Grid>
      </Container>
    </main>
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch("http://127.0.0.1:8000/api/");
  const posts = await res.json();

  
  return {
    props: {
      posts,
    },
  };
}

export default Home;
