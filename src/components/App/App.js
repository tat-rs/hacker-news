import React from "react";
import { Redirect, useLocation } from "react-router-dom";
import { Route, Switch, useHistory } from "react-router-dom";

import api from "../../utils/api";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MainPage from "../MainPage/MainPage";
import NewsItem from "../NewsItem/NewsItem";

import "./App.css";

function App() {

  const [listOfNewsId, setListOfNewsId] = React.useState([]);

  const [selectedNews, setSelectedNews] = React.useState(null);

  const [isLoading, setIsLoading] = React.useState(true);

  const [isMenuOpen, setMenuOpen] = React.useState(false);

  const history = useHistory();

  const location = useLocation();

  React.useEffect(() => {

    api.getStoriesId()
      .then((data) => {
        setListOfNewsId(data)
      })
      .catch((err) => {
        console.log(err)
      })

      const newsId = Number(location.pathname.split(`news/`)[1])

      setSelectedNews(newsId)
  
    }, [location.pathname]);

  function handleActiveItemClick(data) {
    history.push(`/news/${data.id}`);
  }

  function handleMenuClick() {
    setMenuOpen(!isMenuOpen)
  }

  function handlLoading() {
    setIsLoading(false)
  }

  return (
    <div className="page__content">

      <Header handleMenuClick={handleMenuClick} isMenuOpen={isMenuOpen}/>

      <main className="content">

      <Switch>

        <Route exact path="/news">

          <MainPage list={listOfNewsId} handleActiveItemClick={handleActiveItemClick} setSelectedNews={setSelectedNews} isLoading={isLoading} handlLoading={handlLoading}/>

        </Route>

        <Route path="/news/:id">

          {
            selectedNews && (

              <NewsItem id={selectedNews} selectedNews={selectedNews} isLoading={isLoading} handlLoading={handlLoading}/>

            )
          }

        </Route>

        <Route exact path="/">
          <Redirect to="/news" />
      </Route> 

      </Switch>

      </main>

      <Footer />
      
    </div>
  );
}

export default App;
