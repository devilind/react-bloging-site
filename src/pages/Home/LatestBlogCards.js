import React from 'react'
import './home.css'
import { getLatestBlogs } from '../../api/blogs';
import { Link } from 'react-router-dom'
import { useQuery } from 'react-query';
import PropagateLoader from "react-spinners/PropagateLoader";

export default function LatestBlogCards() {
    const { status, error, data: blogs } = useQuery({ queryKey: ['blogs'], queryFn: getLatestBlogs })
    if (status === 'loading') return (
        <div className='latest-blog-loader'>
            <PropagateLoader color='#F05941' loading={true} size={30} />
        </div>)
    if (status === 'error') return <h1>{JSON.stringify(error)}</h1>
    return (
        blogs.data.map(element => {
            return (
                <Link key={element._id} to={`/blog/${element._id}`} className='custom-card'>
                    <img src={element.image} className='card-img'></img>
                    <div className='card-description'>
                        <h4>{element.title}</h4>
                        <span>
                            {element.description.substring(0, 200)}...
                        </span>
                    </div>
                </Link>
            )
        })
    );
}
