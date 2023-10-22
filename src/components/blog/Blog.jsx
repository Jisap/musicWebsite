"use client"

import SectionHeader from "../SectionHeader";
import PostList from "./PostList";
import table from "../../../_data/db.json"

// const getPost = async () => {
//    const res = await fetch('http://localhost:4000/posts');
//    return res.json();
// };

const Blog = async () => {
   
   //const posts = await getPost();
   
   return (
      <section className='section' id='blog'>
         <div className="container mx-auto">
            <SectionHeader 
               pretitle='Our Blog' title='Last News'
            />
            {/* post list */}
            <PostList posts={table.posts} />
         </div>
      </section>
   )
}

export default Blog