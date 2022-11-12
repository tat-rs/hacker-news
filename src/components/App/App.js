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
  const [renderedNews, setRenderedNews] = React.useState([]);
  const [countNews, setCountNews] = React.useState(20);
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
            await Promise.all(allNews)
              .then((data) => {
                setListOfNews(data)
                setRenderedNews(listOfNews.slice(0, countNews))
              })
              .finally(() => setIsloading(false))
          } catch(err) {
            console.log(err)
          }
        }

        getNews();
  
      }, []);

  React.useEffect(() => {

    async function getSelectedNews() {
      const newsId = Number(location.pathname.split(`/hacker-news/`)[1])
      if(location.pathname.split(`/hacker-news/`).length > 1) {
        const news = await api.getStory(newsId);
        setSelectedNews(news)
        localStorage.setItem('selectedNews', JSON.stringify(news));
      } else {
        setSelectedNews({})
        localStorage.removeItem('selectedNews');
      }
    }
    getSelectedNews();
    
  }, [location.pathname]);

  React.useEffect(() => {
    listOfNews && renderedNews && setRenderedNews(listOfNews.slice(0, countNews))
  }, [countNews, listOfNews])


  function handleActiveItemClick(data) {
    history.push(`/hacker-news/${data}`);
  }

  function moreNews() {
    setCountNews(countNews + 20);
  }

  return (
    <div className="page__content">
      <Header />
      <main className="content">
      <Switch>
        <Route exact path="/hacker-news">
          <MainPage
            list={renderedNews}
            handleActiveItemClick={handleActiveItemClick}
            setSelectedNews={setSelectedNews}
            isLoading={isLoading}
            moreNews={moreNews}
            countNews={countNews} />
        </Route>
        <Route path="/hacker-news/:id">

          {
            selectedNews ? (

              <NewsItem
                news={selectedNews}
                selectedNews={selectedNews} />

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
