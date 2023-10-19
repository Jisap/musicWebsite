import Hero from '@/components/Hero'
import Player from '@/components/Player'
import Albums from '@/components/album/Albums'
import Blog from '@/components/blog/blog'
import Events from '@/components/events/Events'


export default function Home() {
  return (
    <main>
      <Hero />
      <Player />
      <Events />
      <Albums />
      <Blog />
      <div className='h-[4000px]'></div>
    </main>
  )
}
