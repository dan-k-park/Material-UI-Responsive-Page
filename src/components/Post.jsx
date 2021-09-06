import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";
// theme gives access to material ui's default library
const useStyles = makeStyles((theme) => ({
  card: {
    marginBottom: theme.spacing(5),
  },
  media: {
    height: 250,
    [theme.breakpoints.down("sm")]: {
      height: 150,
    },
  },
}));

const Post = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://images.squarespace-cdn.com/content/v1/5ca2920870468045b588f444/1595542922221-22VS9R295JSVK0CBVO0O/Seimonelephanttornado.jpg"
          title="My Post"
        />
        <CardContent>
          <Typography gutterBottom variant="h5">
            My First Post
          </Typography>
          <Typography variant="body2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            ipsum voluptas nisi tenetur unde doloremque, inventore veniam in sit
            vel accusamus sequi fuga possimus laboriosam sapiente nostrum
            corrupti? Dignissimos, quia. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Voluptates ipsum voluptas nisi tenetur unde
            doloremque, inventore veniam in sit vel accusamus sequi fuga
            possimus laboriosam sapiente nostrum corrupti? Dignissimos, quia.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
