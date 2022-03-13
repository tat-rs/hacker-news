import React from "react";
import { Redirect, useLocation } from "react-router-dom";
import { Route, Switch, useHistory } from "react-router-dom";

import api from "../../utils/api";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MainPage from "../MainPage/MainPage";
import NewsItem from "../NewsItem/NewsItem";
import PageNotFound from "../PageNotFound/PageNotFound";

import "./App.css";

function App() {

  const [listOfNewsId, setListOfNewsId] = React.useState([]);

  const [selectedNews, setSelectedNews] = React.useState(null);

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

    setMenuOpen(false)
  
    }, []);

  React.useEffect(() => {
  
    const newsId = Number(location.pathname.split(`/hacker-news/`)[1])
  
    setSelectedNews(newsId)
  
    setMenuOpen(false)
    
  }, [location.pathname]);

  function handleActiveItemClick(data) {
    history.push(`/hacker-news/${data.id}`);
  }

  function handleMenuClick() {
    setMenuOpen(!isMenuOpen)
  }

  return (
    <div className="page__content">

      <Header handleMenuClick={handleMenuClick} isMenuOpen={isMenuOpen}/>

      <main className="content">

      <Switch>

        <Route exact path="/hacker-news">

          <MainPage list={listOfNewsId} handleActiveItemClick={handleActiveItemClick} setSelectedNews={setSelectedNews} />

        </Route>

        <Route path="/hacker-news/:id">

          {
            selectedNews && selectedNews!== NaN ? (

              <NewsItem id={selectedNews} selectedNews={selectedNews} />

            ) : (
              <PageNotFound />
            )
          }

        </Route>

        <Route exact path="/">
           <Redirect to="/hacker-news" />
        </Route> 

        <Route path="*">
          <PageNotFound />
        </Route>
        
      </Switch>

      </main>

      <Footer />
      
    </div>
  );
}

export default App;
