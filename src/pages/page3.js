import React from 'react'
import { Link } from 'gatsby'
import SEO from '../components/seo'

const ThirdPage = () => (
  <>
    <SEO title="Page3- Different" />

    <div className="container py-5">
      <h1>Page 3 - Different Layout</h1>
      <p>
        A different set of panels and cards for persusal.{' '}
        <Link to="/">Let's go home!</Link>
      </p>
      <div className="jumbotron p-3 p-md-5 mb-4 text-white rounded bg-dark imageback">
        <div className="col-md-6 px-0">
          <h1 className="display-4 font-italic text-white">
            Title of a longer featured blog post
          </h1>
          <p className="lead my-3">
            Multiple lines of text that form the lede, informing new readers
            quickly and efficiently about what's most interesting in this post's
            contents.
          </p>
          <p className="lead mb-0">...</p>
        </div>
      </div>

      <div className="row mb-2">
        <div className="col-md-6">
          <div className="card flex-md-row mb-4 box-shadow h-md-250">
            <div className="card-body d-flex flex-column align-items-start">
              <strong className="d-inline-block mb-2 text-primary">
                World
              </strong>
              <h3 className="mb-0">
                <Link className="text-dark" to="/#">
                  Featured post
                </Link>
              </h3>
              <div className="mb-1 text-muted">Nov 12</div>
              <p className="card-text mb-auto">
                This is a wider card with supporting text below as a natural
                lead-in to additional content.
              </p>
              <Link to="/#">Continue reading</Link>
            </div>
            <img
              className="card-img-right flex-auto d-none d-md-block"
              src="https://www.fillmurray.com/200/250"
              alt="Card cap"
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="card flex-md-row mb-4 box-shadow h-md-250">
            <div className="card-body d-flex flex-column align-items-start">
              <strong className="d-inline-block mb-2 text-success">
                Design
              </strong>
              <h3 className="mb-0">
                <Link className="text-dark" to="#">
                  Post title
                </Link>
              </h3>
              <div className="mb-1 text-muted">Nov 11</div>
              <p className="card-text mb-auto">
                This is a wider card with supporting text below as a natural
                lead-in to additional content.
              </p>
              <Link to="/#">Continue reading</Link>
            </div>
            <img
              className="card-img-right flex-auto d-none d-md-block"
              src="https://www.fillmurray.com/200/250"
              alt="Card cap"
            />
          </div>
        </div>
      </div>
    </div>
  </>
)

export default ThirdPage
