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

  const [listOfNews, setListOfNews] = React.useState([]);
  const [selectedNews, setSelectedNews] = React.useState(JSON.parse(localStorage.getItem('selectedNews')) || {});
  const [isLoading, setIsloading] = React.useState(false);

  const history = useHistory();
  const location = useLocation();

    React.useEffect(() => {
      setIsloading(true);
        async function getNews() {
          try {
            const newsIds = await api.getStoriesId();
            const allNews = newsIds.map(async(id) => {
              const news = await api.getStory(id)
              return news
            })
            Promise.all(allNews)
              .then((data) => {
                setListOfNews(data)
              })
              .finally(() => setIsloading(false))
          } catch(err) {
            console.log(err)
          }
        }

        getNews();
  
      }, []);

  React.useEffect(() => {
    setIsloading(true);

    async function getSelectedNews() {
      const newsId = Number(location.pathname.split(`/hacker-news/`)[1])
      if(location.pathname.split(`/hacker-news/`).length > 1) {
        const news = await api.getStory(newsId);
        setSelectedNews(news)
        localStorage.setItem('selectedNews', JSON.stringify(news));
        setIsloading(false)
      }
    }
    getSelectedNews()
  }, [location.pathname]);


  function handleActiveItemClick(data) {
    history.push(`/hacker-news/${data}`);
  }

  return (
    <div className="page__content">
      <Header />
      <main className="content">
      <Switch>
        <Route exact path="/hacker-news">
          <MainPage
            list={listOfNews}
            handleActiveItemClick={handleActiveItemClick}
            setSelectedNews={setSelectedNews}
            isLoading={isLoading} />
        </Route>
        <Route path="/hacker-news/:id">

          {
            selectedNews ? (

              <NewsItem
                news={selectedNews}
                selectedNews={selectedNews}
                isLoading={isLoading} />

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
