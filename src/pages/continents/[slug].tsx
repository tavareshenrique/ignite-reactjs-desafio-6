import { GetStaticPaths, GetStaticProps } from 'next';
import { Flex, Heading } from '@chakra-ui/react';

import api from 'services/api';

import { Header } from '../../components/Header';
import { Details } from '../../components/Details';

import { Cities } from './Cities';

import { IContinentsProps } from './@interfaces';

export default function Continents({
  cities,
  continent,
}: IContinentsProps): JSX.Element {
  return (
    <Flex direction="column">
      <Header />
      <Flex
        w="100%"
        h={['150px', '300px', '500px']}
        px={['0', '0', '36']}
        pt={['0', '0', '72']}
        backgroundImage={`url(/${continent.image})`}
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        align="center"
        justify={['center', 'center', 'flex-start']}
      >
        <Heading
          textAlign={['center', 'left']}
          color="white"
          fontSize={['1.75rem', '5xl']}
          fontWeight="medium"
        >
          {continent.name}
        </Heading>
      </Flex>

      <Flex direction="column" maxWidth="1160px" mx="auto" mb="10" px="1rem">
        <Details
          data={{
            cities: continent.cities,
            countries: continent.countries,
            languages: continent.languages,
            description: continent.full_description,
          }}
        />
        <Cities cities={cities} />
      </Flex>
    </Flex>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ctx => {
  const { slug } = ctx.params;

  const { data: continentData } = await api.get(`continents?slug=${slug}`);

  const { data: dataCities } = await api.get(
    `continents/${continentData[0].id}/cities`,
  );

  return {
    props: {
      continent: continentData[0],
      cities: dataCities,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};
