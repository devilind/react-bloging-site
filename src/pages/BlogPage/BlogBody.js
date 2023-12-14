import React from 'react';
import './blogbody.css';
import '../../common/common.css'
import Content from './Content';
import { getBlogById } from "../../api/blogs";
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom'
import Loader from "react-spinners/SyncLoader";

export default function BlogBody() {
  const { id } = useParams()
  const { status, error, data: blog } = useQuery({ queryKey: [`blog${id}`], queryFn: () => getBlogById(id) })

  if (status === 'loading') return (
    <div className='blog-loader'>
        <Loader color='#F05941' loading={true} size={30} />
    </div>)
  if (status === 'error') return <h1>{Error}</h1>
  return (
    <>
    <div className='container py-4'>
    <div>
        <Content blog={blog.data}/>
    </div>
    </div>
    </>

  )
}
