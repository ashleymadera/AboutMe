import React from 'react'
import { Link, Redirect } from 'react-router-dom'

export default function Main() {
  return (
    <>

      <div className='resume-blog-box'>
        <section>
          <a href="">Resume</a>
        </section>
        <section>
          <a href="https://medium.com/@ashleymadera"> Blog</a>
        </section>
      </div>

      <main className='projects'>
        <section className='project-one'>
          <a href="https://ashleymadera.github.io/POE/"> POE </a>
        </section>
        <section className='project-two'>
          project two
      </section>
        <section className='project-three'>
          project three
      </section>
      </main>
    </>
  )
}
