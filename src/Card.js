
import React from 'react'
import "./Card.css"

function Card(props) {
    console.log(props.obj)
    return (
        <div className='card'>
            <div className='card__name'>
                <img src={props.obj.owner.avatar_url}></img>
                <h4>{props.obj.name}</h4>
            </div>
            <p className='card__link'><i class="fa fa-link"></i>{props.obj.url}</p>
            <div className='card__details'>
                <p className='card__star'><i class="fa fa-star"></i> star<span >{props.obj.stargazers_count}</span></p>
                <p className='card__language'>  <i class="fa fa-language" aria-hidden="true"></i>Language<span>{props.obj.language}</span></p>
                <p className='card__watch'><i class="fa fa-eye" aria-hidden="true"></i>watch<span>{props.obj.watchers_count}</span></p>
                <p className='card__fork'><i class="fa fa-code-branch"></i>Fork<span>{props.obj.forks_count}</span></p><hr/>
                
            </div>
            <p className='card__description'>View Description</p>
            

        </div>
    )
}

export default Card


