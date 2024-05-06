import React from 'react';
import Img from './dashboard-agent-banking.png'

export default function NewsItem({url, title, desc, src}) {
    return (
       
            <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth : "400px"}}>
                <img src={src ? src : Img} style={{height: "250px" , width: "360px"}} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title.slice(0,50)}</h5>
                    <p className="card-text">{desc?.slice(0,100)}</p>
                    <a href="#" className="btn btn-primary" style={{width: "350px"}}>{url?.slice(0,50)}</a>
                </div>
            </div>
       
    )
}
