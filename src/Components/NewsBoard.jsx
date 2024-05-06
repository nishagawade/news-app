import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'

export default function NewsBoard() {
  

    const [articles, setArticles] = useState([])

    useEffect(() => {
      
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=df668853618e4eeba91fee8be31b012b` 
        fetch(url)
        .then((response) => response.json())
        .then(
            (data)=> 
            // console.log(data)
            setArticles(data.articles)
        )
    }, [])
    

  return (
   <div>
   <h2 className='text-center'>Latest <span className='badge bg-danger'>News</span></h2>
   {
    articles.map((item ,index) => {
        return(
            <NewsItem key={index}  title={item.title} desc={item.description} url = {item.url} src={item.urlToImage}/>
        )
    })
   }
   </div>
  )
}
