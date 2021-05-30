import { Flex, Image, Text, useBreakpointValue } from '@chakra-ui/react';

import { IResourcesItemsProps } from './@interfaces';

export function ResourcesItems({
  srcIcon,
  text,
}: IResourcesItemsProps): JSX.Element {
  const isMobile = useBreakpointValue({
    base: true,
    sm: false,
  });

  return (
    <Flex direction={['row', 'column']} align="center" justify="center">
      <Image
        src={srcIcon}
        w={isMobile ? '48px' : '90px'}
        h={isMobile ? '48px' : '90px'}
        mb="6"
      />

      <Text fontWeight="600" marginLeft={[2, 0]} fontSize={['md', 'xl', '2xl']}>
        {text}
      </Text>
    </Flex>
  );
}
