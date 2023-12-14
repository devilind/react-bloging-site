import React from 'react';
import './bloghomepage.css';
import { useQuery } from 'react-query';
import { getBlogsPaginated } from '../../api/blogs';
import { PropagateLoader } from 'react-spinners';
import { Link } from 'react-router-dom';
export default function Pagination({previous, next, limit, page, searchKey}) {
    let pages = []
    console.log(page)
    const { status, error, data: blog } = useQuery({enabled: page != null, queryKey: [`allblogs`], queryFn: () => getBlogsPaginated() })
    if (status === 'loading') return (
        <div className='latest-blog-loader'>
            <PropagateLoader color='#F05941' loading={true} size={30} />
        </div>)
        const latestBlogs = blog.data
    for (let i = 1; i <= Math.ceil(latestBlogs.length / limit); i++) {
        pages.push(i);
    }
    console.log(previous, next)
    if (previous === undefined && next === undefined) return ''
    return (
        pages.map(value => {
            return <Link to={`/blogs/?page=${value}&limit=${limit}${searchKey ? `&searchKey=${searchKey}` : ''}`} key={value} className={value === page? 'current-page-btn' : 'page-number-btn'}>{value}</Link> 
        })
    )
}
