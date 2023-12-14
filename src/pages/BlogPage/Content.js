import React from "react"
import "./content.css"
import SyncLoader from "react-spinners/SyncLoader";

export default function Content({blog}) {
   
    return (
        !blog ? <div className="spinner-loader">
            <SyncLoader color="#F05941" loading={true} size={30}/>
        </div>:
        <>
             <div dangerouslySetInnerHTML={{__html: blog.content}}></div>
            
        </>
    )
}
