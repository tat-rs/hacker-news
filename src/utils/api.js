class Api {
  constructor({url, headers}) {
    this._url = url;
    this._headers = headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json(); //возвращаем резульат, если нет ошибок
    }
    return Promise.reject(`Ошибка: ${res.status}`); //возвращаем статус ошибки
  };

  //метод, получающий id новостей с сервера
  getStoriesId() {
    return fetch(`${this._url}/v0/newstories.json?print=pretty&orderBy="$key"&limitToFirst=100`, {
      method: "GET",
      headers: this._headers,
    })
    .then(this._checkResponse)
  }

   //метод, получающий id новостей с сервера
   getStory(storyId) {
    return fetch(`${this._url}/v0/item/${storyId}.json?print=pretty`, {
      method: "GET",
      headers: this._headers,
    })
    .then(this._checkResponse)
  }

   //метод, получающий id новостей с сервера
   getCommentById(commentId) {
    return fetch(`${this._url}/v0/item/${commentId}.json?print=pretty`, {
      method: "GET",
      headers: this._headers,
    })
    .then(this._checkResponse)
  }
}

const api = new Api({
  url: 'https://hacker-news.firebaseio.com',
  headers: {
    "content-type": "application/json",
  }
})

export default api