import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Image from 'gatsby-image'

const getImages = graphql`
  {
    fluid1: file(relativePath: { eq: "gatsby-astronaut.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    fluid2: file(relativePath: { eq: "gatsby-icon.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`

const FifthPage = () => {
  const data = useStaticQuery(getImages)
  return (
    <Layout>
      <SEO title="Page5 - Image & Text" />

      <div className="container py-5">
        <h1>Page 4 - Text and Images</h1>
        <p className="lead my-4">
          <article className="w-50 float-right">
            <Image fluid={data.fluid1.childImageSharp.fluid} alt="spaceman" />
          </article>
          This page uses a Card Set component. Take a look at cardset.js and
          singlecard.jsSpicy jalapeno bacon ipsum dolor amet corned beef
          meatball ground round hamburger shankle drumstick. Porchetta kielbasa
          turducken strip steak leberkas filet mignon capicola. Ground round
          hamburger pig, cow sausage cupim boudin kielbasa leberkas alcatra. Ham
          boudin ham hock, ribeye tongue pig brisket jerky pancetta cupim
          leberkas andouille picanha.
        </p>
        <p className="mb-4">
          Ribeye short loin chislic, beef salami biltong prosciutto swine turkey
          kevin cupim tongue. Drumstick cupim porchetta shoulder landjaeger beef
          fatback, hamburger ham chislic boudin ham hock. Alcatra capicola
          frankfurter ground round venison chislic sausage corned beef beef ribs
          shankle doner kevin cupim. Picanha filet mignon porchetta, turkey
          bresaola swine leberkas ham pork belly short loin meatloaf.
        </p>
        <p className="mb-4">
          <article className="w-25 float-left px-5 py-5">
            <Image
              fluid={data.fluid2.childImageSharp.fluid}
              alt="gatsby logo"
            />
          </article>
          Brisket meatball tri-tip picanha, jowl spare ribs tail ground round
          porchetta leberkas shoulder. Strip steak capicola turkey, chicken
          ribeye alcatra pig shank salami pancetta beef. Pork chop prosciutto
          andouille sausage tongue, filet mignon frankfurter beef ribs shankle
          chislic salami meatloaf landjaeger. Pancetta picanha shank pork.
          Sausage drumstick shoulder shank turkey. Pancetta swine chuck buffalo
          ribeye, shank meatloaf tenderloin chicken jerky chislic biltong tail.
        </p>
        <p className="mb-4">
          Beef ribs ball tip venison pork tail, pork chop pork belly drumstick
          brisket ground round. Fatback hamburger drumstick biltong tongue
          brisket, bresaola cupim beef ribs strip steak beef pastrami porchetta
          pork loin shankle. Short ribs pastrami porchetta pancetta, kielbasa
          pig ham hock prosciutto hamburger chicken meatball filet mignon cow
          shoulder biltong. Buffalo tail meatloaf ball tip. T-bone tail swine,
          jowl short loin chislic hamburger burgdoggen shankle turducken kevin
          pork. Tri-tip leberkas fatback sirloin beef turkey jerky kielbasa
          meatloaf capicola beef ribs. Rump beef ribs alcatra, doner andouille
          meatloaf short loin tail.
        </p>
      </div>
    </Layout>
  )
}

export default FifthPage
