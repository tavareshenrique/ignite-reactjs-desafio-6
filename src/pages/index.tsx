import { GetStaticPaths, GetStaticProps } from 'next';

import api from 'services/api';

import { Header } from 'components/Header';
import { Banner } from 'components/Banner';
import { Resources } from 'components/Resources';
import { Carroussel } from 'components/Carrousel';

import { IHomeProps } from './@interfaces';

export default function Home({ continents }: IHomeProps): JSX.Element {
  return (
    <>
      <Header />
      <Banner />
      <Resources />

      <Carroussel data={continents} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get('continents');

  return {
    props: {
      continents: data,
    },
  };
};
