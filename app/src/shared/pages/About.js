import React from 'react'
import { Toolbar, Typography } from '@material-ui/core'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

import Seo from '../components/Seo'
import Banner from '../components/Banner'
import { main } from '../images'
import TextBlock from '../components/TextBlock'

const query = gql`
  {
    allPageMetaDataFields(where: { name: "about" }) {
      title
      description
    }
  }
`

export default function About() {
  const { loading, error, data } = useQuery(query)

  const isReady = !loading && !error

  console.log()
  return (
    <React.Fragment>
      {isReady && (
        <Seo
          title={data.allPageMetaDataFields[0].title}
          description={data.allPageMetaDataFields[0].description}
        />
      )}
      <Toolbar />
      <Banner img={main.src} lowResImg={main.lowRes}>
        <Typography color="inherit" variant="h2">
          О нас
        </Typography>
      </Banner>
      <TextBlock>
        <Typography color="inherit" variant="subtitle1">
          On the other hand, we denounce with righteous indignation and dislike
          men who are so beguiled and demoralized by the charms of pleasure of
          the moment, so blinded by desire, that they cannot foresee the pain
          and trouble that are bound to ensue; and equal blame belongs to those
          who fail in their duty through weakness of will, which is the same as
          saying through shrinking from toil and pain. These cases are perfectly
          simple and easy to distinguish. In a free hour, when our power of
          choice is untrammelled and when nothing prevents our being able to do
          what we like best, every pleasure is to be welcomed and every pain
          avoided. But in certain circumstances and owing to the claims of duty
          or the obligations of business it will frequently occur that pleasures
          have to be repudiated and annoyances accepted. The wise man therefore
          always holds in these matters to this principle of selection: he
          rejects pleasures to secure other greater pleasures, or else he
          endures pains to avoid worse pains.
        </Typography>
      </TextBlock>
    </React.Fragment>
  )
}
