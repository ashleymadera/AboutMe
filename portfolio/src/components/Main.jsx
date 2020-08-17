import React from 'react'
import "../App.css"

export default function Main() {
  return (
    <>
      <section className='main-box'>
        <section className='about-me'>
          <h3 className='project-title'>BIO</h3>
          <p className='description'> If you'd ask me three years ago, I would have never guessed I'd become a software engineer, let alone anything to do with programming. Sure I was a sudoku fanatic and puzzle enthusiast, but I had never attributed those passions as anything but simple pleasures for me to enjoy to pass the time. After multiple conversation with my boyfriend and some research, I thought, "Why not me? Is the idea so far fetched?"... <a className='blog-post' href="https://medium.com/@ashleymadera/who-me-1a65ee159858">Read More</a> </p>
        </section>


        <section className='projects'>
          <h3 className='project-title'>PROJECTS</h3>
          <main className='project-icons'>

            {/* hover effect section  */}


            <div class="quotes">
              <div class="card">
                <div class="box box1">
                  <div className='project-one'>
                    <a href="https://ashleymadera.github.io/POE/">
                      <img className="project-image" src="https://i.imgur.com/MHp4Ila.png" alt="Poe Project" />
                    </a>
                  </div>
                </div>
                <div class="bg"></div>
              </div>


              <div class="card">
                <div class="box box2">
                  <div className='project-two'>
                    <a href="https://wormy.netlify.app">
                      <img className="project-image" src="https://i.imgur.com/0Hix37U.png" alt="Wormy Project" />
                    </a>
                  </div >
                </div>
                <div class="bg"></div>
              </div>


              <div class="card">
                <div class="box box3">
                  <div className='project-four'>
                    <a href="http://shiptdev.surge.sh/">
                      <img className="project-image" src="https://i.imgur.com/bxqcokm.png" alt="Shipt" />
                    </a>
                  </div>
                </div>
                <div class="bg"></div>
              </div>

              <div class="card">
                <div class="box box4">
                  <div className='project-three'>
                    <a href="https://castaway-yarn.netlify.app/">
                      <img className="project-image" src="https://i.imgur.com/rEhMYM3.png" alt="Castaway" />
                    </a>
                  </div>
                </div>
                <div class="bg"></div>
              </div>

            </div>

            {/* hover effect section  */}

          </main>
        </section>
        <section className='contact-icons'>
          <h3 className='project-title'>CONTACT</h3>

          <a
            href="https://docdro.id/kW3tnS8">
            <img className="my-resume" src="https://i.imgur.com/a8CsEol.png" alt="LinkedIn logo" />
          </a>

          <a href="https://medium.com/@ashleymadera">
            <img className="blog" src="https://i.imgur.com/spg2A6a.png" alt="Medium Blog logo" />
          </a>

          <a href="https://github.com/ashleymadera">
            <img className="git" src="https://i.imgur.com/AAdVeJw.png" alt="Github Blog logo" />
          </a>
        </section>
      </section>
    </>
  )
}

