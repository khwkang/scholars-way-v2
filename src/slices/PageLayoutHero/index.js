import React from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash'

import { Gradient, Container, HeadlineWrapper, Headline, ImageContainer, Image, Description, DescriptionWrapper } from './index.styled'

export const PageLayoutHero = ({ data }) => (
  <div>
    <h1>hello world222</h1>
  </div>
)

export const query = graphql`
  fragment PageLayoutHero on Query {
    prismicPage(id: { eq: $id }) {
      data {
        layout {
          ... on PrismicPageLayoutHero {
            id
            primary {            
              title {
                text
              }          
            }
          }
        }
      }
    }
  }
`

