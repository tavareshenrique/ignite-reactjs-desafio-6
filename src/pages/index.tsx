import { Header } from 'components/Header';
import { Banner } from 'components/Banner';
import { Resources } from 'components/Resources';

export default function Home(): JSX.Element {
  return (
    <>
      <Header />
      <Banner />
      <Resources />
    </>
  );
}
