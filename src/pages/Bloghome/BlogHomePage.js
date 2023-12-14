import React from 'react';
import './bloghomepage.css'
import Content from './Content';
import Pagination from './Pagination';
import './bloghomepage.css'
import { useQuery } from 'react-query';
import { Link, useSearchParams } from 'react-router-dom';
import { getBlogsPaginated } from '../../api/blogs';
import {  SyncLoader } from 'react-spinners';
export default function BlogHomePage() {
  const [searchParams] = useSearchParams();
  const page = parseInt(searchParams.get('page'))
  const limit = parseInt(searchParams.get('limit'))
  const searchKey = searchParams.get('searchKey')
  const { status, error, data: blog } = useQuery({enabled: page != null, queryKey: [`blog${page}?${searchKey}`], queryFn: () => getBlogsPaginated(page, limit, searchKey) })
console.log(page, limit)
  if (status === 'loading') return (
    <div className='blog-loader'>
        <SyncLoader color='#F05941' loading={true} size={30} />
    </div>)
    
  if (status === 'error') return <h1>Error...</h1> 
  
  if (blog.data.length === 0) return (
  <div className='not-found-search'>
    <h2>Unable to find any results for {searchKey}.</h2>
    <h4>Can contact us for any help.</h4>
  </div>
  )
  
  return (
    <>
    <div>
    <div className='container py-4'>
    <div className='title center'>
    <p className='fs-2 fw-bolder'>Latest Blogs</p>
    <p className='fs-5'>Learning new things made simple.</p>
    <p className=''>By Atul Rathour</p>
    </div>
    <div>
        <Content blogs={blog.data}/>
        <div className='pagination-section'>
          {blog.previous && (
            <Link to={`/blogs/?page=${page-1}&limit=${limit}`} className= 'page-controller-btn'>
      Previous
        </Link >
          )} {" "}
          <Pagination limit={limit} previous={blog.previous} next={blog.next} page={page} searchKey={searchKey}/>
        {blog.next && (
        <Link to={`/blogs/?page=${page+1}&limit=${limit}`} className= 'page-controller-btn'>
        Next
        </Link >
          )} {" "}
        </div>
    </div>
    </div>
    </div>
  
    </>
  )
}
