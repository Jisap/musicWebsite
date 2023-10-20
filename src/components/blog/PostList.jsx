"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { BsArrowRight } from "react-icons/bs"
import { fadeIn } from "../../../variants"



const PostList = ({ posts }) => {

  // get three post
  const firstThreePost = posts.slice(0, 3);

  return (
    <motion.div 
      className="flex flex-col items-center"
      variants={fadeIn('up', 0.4)}
      initial='hidden'
      whileInView={'show'}
      viewport={{ once: false, amount: 0.3 }}
    >
      <div className="flex flex-col xl:flex-row justify-between gap-12 py-10 xl:pt-16 xl:pb-24 border-t border-white/10">
        {firstThreePost.map((post) => {
          const { id,date, title, description } = post;
          return (
            <div className="flex-1" key={id}>
              {/* date */}
              <div className="text-accent font-bold mb-1">{date}</div>
              {/* title */}
              <div className="text-xl font-medium mb-4">{title}</div>
              {/* description */}
              <p className="text-white/30 mb-6 font-light">{description}</p>
              <Link href="#" className="flex items-center gap-x-2 group">
                Read more
                <BsArrowRight  className="text-xl group-hover:ml-1 transition-all"/>
              </Link>
            </div>
          )
        })}
      </div>
      <button className="btn btn-lg btn-accent">View all post</button>
    </motion.div>
  )
}

export default PostList