import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Carousel from 'react-material-ui-carousel'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

import projects from "./pages/portfolio/projectsData"

import './App.css';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: "140px",
    width: "100%",
    objectFit: "cover"
  },
  gridList: {
    width: 500,
    height: 450,
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <header>
        <h1>Jimmy Spann</h1>
        <p>Short Introduction</p>
      </header>

      <section>
        <h2>Skills</h2>
        <p>I have no skills</p>
      </section>

      <section>
        <h2>About Me</h2>
        <p>I'm a dude. A dude who does things.</p>
      </section>

      <section>
        <h2>Projects</h2>
        <div className="projects">
          {
            projects.map( (project, i) =>
              <Card className={classes.root}>
                <CardActionArea>
                  <Carousel
                    indicators={false}
                    animation={"slide"}
                    styles={{height: "140px"}}
                  >
                    {
                      project.pictures.map( (item, i) => 
                        <img
                          className={classes.media}
                          src={item.src}
                          alt={item.alt}
                        /> 
                      )
                    }
                  </Carousel>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {project.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {project.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Learn More
                  </Button>
                  <Button size="small" color="primary">
                    Demo
                  </Button>
                </CardActions>
              </Card>
            )
          }
        </div>
      </section>

      <section>
        <h2>Contact</h2>
        <p>socials, and email</p>
        <p>Maybe add resume here</p>
      </section>

      <div className="dialog">
          <section>
            <h1>{projects[2].title}</h1>
            <p>{projects[2].description}</p>
            <GridList cellHeight={160} className={classes.gridList} cols={4}>
            {projects[2].pictures.map((tile) => (
              <GridListTile key={tile.src} cols={2 || 1}>
                <img src={tile.src} alt={tile.alt} />
              </GridListTile>
            ))}
          </GridList>
          </section>
      </div>
    </div>
  );
}

export default App;
