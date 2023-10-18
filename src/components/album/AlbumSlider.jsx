"use client"

import Image from "next/image"
import { useState } from "react"
import { AudioPlayer } from "react-audio-play"
import { Swiper, SwiperSlide } from "swiper/react"
import useSWR from "swr"
import { EffectCoverflow, FreeModer, Navigation, Thumbs } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

const fetcher = () => fetcher(url).then((res) => res.json())

const AlbumSlider = () => {

  const {data, error} = useSWR('http:/localhost:4000/albums', fetcher);  
  console.log(data)

  return (
    <div>AlbumSlider</div>
  )
}

export default AlbumSlider