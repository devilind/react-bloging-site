import React from "react";
import { Link} from "react-router-dom";

export default function Index() {
  return (
    <div class='container'>
      <div class='d-flex justify-content-between align-items-baseline .bg-secondary.bg-gradient bd-highlight'>
        <span class= 'fs-4'><span class='fs-1'>K</span>nowinGly<span class='fs-6'>.in</span></span>
        <div class='d-flex justify-content-between'>
          <Link to='/'><span class='mx-4' >Home</span></Link>
          <Link to='/blog'><span class='mx-4' >Blog 1</span></Link>
          <Link to='/'><span class='mx-4' >Page 2</span></Link>
        </div>
      </div>
    </div>
  )
}
