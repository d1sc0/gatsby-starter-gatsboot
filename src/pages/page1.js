import React from 'react'
//import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

const FirstPage = () => (
  <Layout>
    <SEO title="Page1 - Layouts" />
    <div className="container py-5">
      <h1>Page 1 - Layouts</h1>
      <p>Feature layouts</p>
      <div className="row featurette">
        <div className="col-md-7">
          <h2 className="featurette-heading">
            Oh yeah, it's that good.{' '}
            <span className="text-muted">See for yourself.</span>
          </h2>
          <p className="lead">
            Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
            ligula porta felis euismod semper. Praesent commodo cursus magna,
            vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
            commodo.
          </p>
          <p>
            Vestibulum id ligula porta felis euismod semper. Praesent commodo
            cursus magna, vel scelerisque nisl consectetur. Fusce dapibus,
            tellus ac cursus commodo. Scelerisque nisl consectetur. Fusce
            dapibus, tellus ac . Ligula porta felis euismod semper. Praesent
            commodo cursus magna, vel scelerisque nisl consectetur. Fusce
            dapibus, tellus ac cursus commodo. Scelerisque nisl consectetur.
            Fusce dapibus, tellus ac cursus commodo.
          </p>
        </div>
        <div className="col-md-5">
          <img
            className="featurette-image img-fluid mx-auto"
            src="https://www.fillmurray.com/500/500"
            alt="Generic placeholder"
          />
        </div>
      </div>
      <hr className="featurette-divider" />
      <div className="row featurette">
        <div className="col-md-7 order-md-2">
          <h2 className="featurette-heading">
            Oh yeah, it's that good.{' '}
            <span className="text-muted">See for yourself.</span>
          </h2>
          <p className="lead">
            Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
            ligula porta felis euismod semper. Praesent commodo cursus magna,
            vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
            commodo.
          </p>
          <p>
            Vestibulum id ligula porta felis euismod semper. Praesent commodo
            cursus magna, vel scelerisque nisl consectetur. Fusce dapibus,
            tellus ac cursus commodo. Scelerisque nisl consectetur. Fusce
            dapibus, tellus ac . Ligula porta felis euismod semper. Praesent
            commodo cursus magna, vel scelerisque nisl consectetur. Fusce
            dapibus, tellus ac cursus commodo. Scelerisque nisl consectetur.
            Fusce dapibus, tellus ac cursus commodo.
          </p>
        </div>
        <div className="col-md-5 order-md-1">
          <img
            className="featurette-image img-fluid mx-auto"
            src="https://www.fillmurray.com/500/500"
            alt="Generic placeholder"
          />
        </div>
      </div>
    </div>
  </Layout>
)

export default FirstPage
