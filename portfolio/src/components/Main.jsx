import React from 'react'
import { Link, Redirect } from 'react-router-dom'

export default function Main() {
  return (
    <>

      <div className='resume-blog-box'>
        <section>
          <a href="https://docdro.id/oToLMit">
            <img classname="resume" src="https://i.imgur.com/rHAOLJm.png" alt="Resume" />
          </a>
        </section>
        <section>
          <a href="https://medium.com/@ashleymadera">
            <img className="blog" src="https://i.imgur.com/spg2A6a.png" alt="Medium Blog logo" />
          </a>
        </section>
      </div>

      <main className='projects'>
        <section className='project-one'>
          <a href="https://ashleymadera.github.io/POE/">
            <img className="one-image" src="" alt="" />
          </a>
        </section>
        <section className='project-two'>
          <a href="">
            <img classname="two-image" src="" alt="" />
          </a>
        </section>
        <section className='project-three'>
          <a href="">
            <img classname="three-image" src="" alt="" />
          </a>
        </section>
      </main>
    </>
  )
}
