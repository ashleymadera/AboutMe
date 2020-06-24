import React from 'react'
import "../App.css"
import gif from '../assets/images/laughing.gif'

export default function Main() {
  return (
    <>

      <section className='about-me'>
        <img className='about-me-image' src={gif} alt="A picture of me" />
        <p className='description'> If you'd ask me two years ago, I would have never guessed I'd become a software engineer, let alone anything to do with programming. Sure I was a sudoku fanatic and puzzle enthusiast, but I had never attributed those passions as anything but simple pleasures for me to enjoy to pass the time. After multiple conversation with my boyfriend and some research, I thought, "Why not me? Is the idea so far fetched?"... <a className='blog-post' href="https://medium.com/@ashleymadera/who-me-1a65ee159858">Read More</a> </p>
      </section>



      <section className='main-box'>
        <a
          href="https://docdro.id/gVYIsu7">
          <img className="my-resume" src="https://i.imgur.com/a8CsEol.png" alt="LinkedIn logo" />
        </a>

        <a href="https://medium.com/@ashleymadera">
          <img className="blog" src="https://i.imgur.com/spg2A6a.png" alt="Medium Blog logo" />
        </a>

        <a href="https://github.com/ashleymadera">
          <img className="git" src="https://i.imgur.com/AAdVeJw.png" alt="Github Blog logo" />
        </a>
      </section>
      <div>
        <h3 className='project-title'>PROJECTS</h3>
        <main className='projects'>
          <section className='project-one'>
            <a href="https://ashleymadera.github.io/POE/">
              <img className="one-image" src="https://i.imgur.com/MHp4Ila.png" alt="Poe Project" />
            </a>
          </section>
          <section className='project-two'>
            <a href="https://wormy.netlify.app">
              <img className="two-image" src="https://i.imgur.com/0Hix37U.png" alt="Wormy Project" />
            </a>
          </section>

          <section className='project-four'>
            <a href="http://shiptdev.surge.sh/">
              <img className="four-image" src="https://i.imgur.com/bxqcokm.png" alt="Shipt" />
            </a>
          </section>

          <section className='project-three'>
            <a href="https://castaway-yarn.netlify.app/">
              <img className="three-image" src="https://i.imgur.com/rEhMYM3.png" alt="Castaway" />
            </a>
          </section>
        </main>
      </div>
    </>
  )
}
