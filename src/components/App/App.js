import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';

import api from '../../utils/api';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MainPage from '../MainPage/MainPage';
import NewsItem from '../NewsItem/NewsItem';
import NewsPage from '../NewsPage/NewsPage';

import './App.css';

function App() {

  //промисс ол использовать

  const [listOfNewsId, setListOfNewsId] = React.useState([]);

  const [selectedNews, setSelectedNews] = React.useState(null);

  const history = useHistory();

  React.useEffect(() => {
    api.getStoriesId()
      .then((data) => {
        setListOfNewsId(data)
      })
      .catch((err) => {
        console.log(err)
      })
  
    }, []);

  function handleActiveItemClick(data) {
    history.push(`/news/${data.id}`)
    setSelectedNews(data)
  }

  return (
    <div className="page__content">

      <Header />

      <Switch>

        <Route exact path='/news'>
          <MainPage list={listOfNewsId} handleActiveItemClick={handleActiveItemClick} setSelectedNews={setSelectedNews} />
        </Route>

        <Route path='/news/:id'>

          {
            selectedNews && (

              <NewsPage list={selectedNews} />

            )
          }

        </Route>

      </Switch>

      <Footer />
      
    </div>
  );
}

export default App;
