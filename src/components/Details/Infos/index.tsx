import { Flex, Heading, Text } from '@chakra-ui/react';

import { PopoverItem } from '../../PopoverItem';

export function Infos(): JSX.Element {
  return (
    <Flex align="center" justifyContent="space-between">
      <Flex
        alignItems={['flex-start', 'flex-start', 'center']}
        direction="column"
      >
        <Heading fontWeight="600" fontSize={['2xl', '5xl']} color="yellow">
          50
        </Heading>
        <Text fontWeight="600" fontSize={['md', 'xl']}>
          países
        </Text>
      </Flex>
      <Flex alignItems="center" direction="column">
        <Heading fontWeight="600" fontSize={['2xl', '5xl']} color="yellow">
          60
        </Heading>
        <Text fontWeight="600" fontSize={['md', 'xl']}>
          linguas
        </Text>
      </Flex>
      <Flex alignItems="center" direction="column">
        <Heading fontWeight="600" fontSize={['2xl', '5xl']} color="yellow">
          27
        </Heading>
        <Text fontWeight="600" fontSize={['md', 'xl']}>
          cidades + 100
          <PopoverItem />
        </Text>
      </Flex>
    </Flex>
  );
}
