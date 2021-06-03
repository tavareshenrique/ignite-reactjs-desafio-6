import { Flex, Grid, Heading, Text } from '@chakra-ui/react';
import { InfoOutlineIcon } from '@chakra-ui/icons';

import { IDetailsProps } from './@interfaces';

export function Details({ data }: IDetailsProps): JSX.Element {
  return (
    <Grid
      templateColumns={['1fr', '1fr', '1fr 1fr', '1.2fr 1fr']}
      gap={[5, 10, 16, 20]}
      my={['8', '20']}
    >
      <Text fontSize={['lg', 'xl', 'xl', '2xl']} textAlign="justify">
        {data.description}
      </Text>

      <Flex align="center" justifyContent="space-between">
        <Flex
          alignItems={['flex-start', 'flex-start', 'center']}
          direction="column"
        >
          <Heading fontWeight="600" fontSize={['2xl', '5xl']} color="yellow">
            {data.countries}
          </Heading>
          <Text fontWeight="600" fontSize={['md', 'xl']}>
            países
          </Text>
        </Flex>
        <Flex alignItems="center" direction="column">
          <Heading fontWeight="600" fontSize={['2xl', '5xl']} color="yellow">
            {data.languages}
          </Heading>
          <Text fontWeight="600" fontSize={['md', 'xl']}>
            linguas
          </Text>
        </Flex>
        <Flex alignItems="center" direction="column">
          <Heading fontWeight="600" fontSize={['2xl', '5xl']} color="yellow">
            {data.cities}
          </Heading>
          <Text
            fontWeight="600"
            fontSize={['md', 'xl']}
            display="flex"
            flexDirection="row"
            alignItems="center"
          >
            cidades + 100
            <Flex>
              <InfoOutlineIcon
                cursor="pointer"
                ml="1"
                w={['8px', '14px']}
                h={['8px', '14px']}
              />
            </Flex>
          </Text>
        </Flex>
      </Flex>
    </Grid>
  );
}
