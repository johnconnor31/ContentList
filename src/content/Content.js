import React from 'react';
import '../static/App.css';

export default function Content(props) {
    const { data } = props;

    return (
        <div style={{'paddingTop':'100px'}}>
            {data.content.map((item, i) => <ContentItem key={i} item={item} />)}
        </div>
    );
}

export function ContentItem(props) {
    const { image, title, description } = props.item;
    return (
        <div className='content-item'>
            <img className='content-image' src={image}></img>
            <p className='description'>
            <h3 className='content-title'>{title}</h3>
                {description}
            </p>
        </div>
    );
}