import { Grid, makeStyles } from "@material-ui/core";
import LeftContent from "./components/LeftContent";
import RightContent from "./components/RightContent";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import Add from "./components/Add";
// theme gives access to material ui's default library
const useStyles = makeStyles((theme) => ({
  right: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <div>
      <Navbar />
      <Grid container>
        <Grid item sm={2} xs={2}>
          <LeftContent />
        </Grid>
        <Grid item sm={7} xs={10}>
          <Feed />
        </Grid>
        <Grid item sm={3} className={classes.right}>
          <RightContent />
        </Grid>
      </Grid>
      <Add />
    </div>
  );
};

export default App;
