import { Box, Image, Flex, Heading, Text, Grid } from '@chakra-ui/react';

import { ICitiesProps } from './@interfaces';

export function Cities({ cities }: ICitiesProps): JSX.Element {
  return (
    <>
      <Heading fontSize={['2xl', '4xl']} mb="10">
        Cidades + 100
      </Heading>
      <Grid
        templateColumns={['1fr', '1fr 1fr', 'repeat(3, 1fr)', 'repeat(4, 1fr)']}
        gap={['20px', '45px']}
        alignItems="center"
        justifyContent="center"
        px={['30px', '0px']}
      >
        {cities.map(city => (
          <Box key={city.id} borderRadius="4px" overflow="hidden">
            <Image src={`/${city.image}`} h="170px" w="100%" />
            <Flex
              p="6"
              alignItems="center"
              justifyContent="space-between"
              bg="white"
              border="1px"
              borderColor="yellow"
              borderTop="0"
            >
              <Flex direction="column">
                <Heading fontSize="xl" fontWeight="500">
                  {city.name}
                </Heading>
                <Text mt="3" fontSize="md" fontWeight="100">
                  {city.country}
                </Text>
              </Flex>
              <Image
                src={`/${city.flag}`}
                w="30px"
                h="30px"
                borderRadius="50%"
              />
            </Flex>
          </Box>
        ))}
      </Grid>
    </>
  );
}
