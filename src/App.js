import {
  Switch,
  Route,
  Redirect,
  useLocation,
  useHistory,
} from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import { Project1, Project2, Project3, Project4 } from "./pages/Projects";
import React, { useEffect } from "react";
import { AnimatePresence } from "framer-motion"; // npm i -s framer-motion

const App = () => {
  const location = useLocation(); // navigation onScroll
  const history = useHistory();

  useEffect(() => {
    const handleScrollToElement = (e) => {
      const url = window.location.origin + "/"; // correspond à page d'accueil

      const wheelRouter = (after, before) => {
        if (e.wheelDeltaY < 0) {
          setTimeout(() => {
            history.push(after);
          }, 500);
        } else if (e.wheelDeltaY > 0) {
          setTimeout(() => {
            history.push(before);
          }, 500);
        }
      };

      // chemin exact où l'on se situe => window.location.href.toString()
      switch (window.location.href.toString()) {
        case url:
          if (e.wheelDeltaY < 0) {
            setTimeout(() => {
              history.push("project-1");
            }, 500);
          }
          break;
        case url + "project-1":
          wheelRouter("project-2", "");
          break;
        case url + "project-2":
          wheelRouter("project-3", "project-1");
          break;
        case url + "project-3":
          wheelRouter("project-4", "project-2");
          break;
        case url + "project-4":
          wheelRouter("contact", "project-3");
          break;
        case url + "contact":
          if (e.wheelDeltaY > 0) {
            setTimeout(() => {
              history.push("project-4");
            }, 500);
          }
          break;
        default:
          console.log("nothing");
      }
    };

    window.addEventListener("wheel", handleScrollToElement); // wheel => molette de la souris
  }, [history]); // lance useEffect que quand history change (callback)

  return (
    <AnimatePresence>
      <Switch location={location} key={location.pathname}>
        <Route exact path="/" component={Home} />
        <Route path="/project-1" component={Project1} />
        <Route path="/project-2" component={Project2} />
        <Route path="/project-3" component={Project3} />
        <Route path="/project-4" component={Project4} />
        <Route path="/contact" component={Contact} />
        <Redirect to="/" />
      </Switch>
    </AnimatePresence>
  );
};

export default App;
