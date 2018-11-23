import React from 'react'
import 'bulma/css/bulma.css'
import 'font-awesome/css/font-awesome.css'

const IndexPage = () => (
  <section className="hero is-medium">
    <div className="hero-body">
      <div className="container">
        <h1 className="title has-text-black is-size-1 has-text-centered">
          <b>Hey! 👋 I'm Rob D'Ippolito</b>
        </h1>
        <h2 className="subtitle has-text-black is-size-4 has-text-centered">
          Full Stack Developer at Accenture
        </h2>
      </div>
      <div className="container">
        <div className="buttons is-centered">
          <a className="button is-focused is-danger is-rounded is-large"><b>Resume</b></a>
          <div className="sep-buttons"></div>
          <a class="button is-focused is-info is-rounded is-large">
              <b>Reading List</b>
              <span class="icon"><i class="fab fa fa-chevron-right"></i></span>
            </a>
        </div>
      </div>
    </div>
  </section>
)

export default IndexPage
