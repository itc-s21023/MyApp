import React, { useState, useEffect } from 'react'
import '../App.css'
import Header from './Header'
import Movie from './Movie'
import Search from './Search'

const URL = 'https://www.omdbapi.com/?s=man&apikey=4a3b711b'
// 取得したAPIの定義 //

const App = () => {
  const [loading, setLoading] = useState(true)
  // 読み込み //
  const [movies, setMovies] = useState([])
  // 取得した映画の処理 //
  const [errorMessage, setErrorMessage] = useState(null)
  // エラーの処理 //

  useEffect(() => {
    fetch(URL)
      // 映画データの取得 //
      .then(response => response.json())
      .then(jsonResponse => {
        setMovies(jsonResponse.Search)
        setLoading(false)
      })
  }, [])

  const search = searchValue => {
    setLoading(true)
    setErrorMessage(null)

    fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`)
      .then(response => response.json())
      .then(jsonResponse => {
        if (jsonResponse.Response === 'True') {
          // 検索結果がある場合 //
          setMovies(jsonResponse.Search)
          setLoading(false)
        } else {
          // 検索結果が無い場合 //
          setErrorMessage(jsonResponse.Error)
          setLoading(false)
        }
      })
  }

  return (
    // 映画データの表示 //
    <div className='App'>
      <Header text='映画検索' />
      <Search search={search} />
      <p className='App-intro'>Sharing a few of our favourite movies</p>
      <div className='movies'>
        {loading && !errorMessage ? (
          <span>loading...</span>
        ) : errorMessage ? (
          <div className='errorMessage'>{errorMessage}</div>
        ) : (
          movies.map((movie, index) => (
            <Movie key={`${index}-${movie.Title}`} movie={movie} />
          ))
        )}
      </div>
    </div>
  )
}

export default App
