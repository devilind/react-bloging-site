import React from 'react'
import ContentCard from './ContentCard'
export default function Content({blogs}) {
    return (
        blogs.map(element => {
            return (
                <ContentCard key={element._id} blog={element}/>
            )
        })
    );
}
