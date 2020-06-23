import React from 'react'
import "../App.css"
import gif from '../assets/images/laughing.gif'

export default function Main() {
  return (
    <>

      <section className='about-me'>
        <img className='about-me-image' src={gif} alt="A picture of me" />
        <p className='description'> If you'd ask me two years ago, I would have never guessed I'd become a software engineer, let alone anything to do with programming. Sure I was a sudoku fanatic and puzzle enthusiats, but I had never attributed those passions as anything but pleassure for me to enjoy in pass time. After multiple conversation with friends is the tech space and some research, I thought, "why not me? Is the idea so far fetched?" </p>
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
          <section className='project-three'>
            <a href="https://castaway-yarn.netlify.app/">
              <img className="three-image" src="https://i.imgur.com/rEhMYM3.png" alt="Shipt Project" />
            </a>
          </section>
        </main>
      </div>
    </>
  )
}
