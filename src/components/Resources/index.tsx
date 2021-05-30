import { Box, Grid, GridItem } from '@chakra-ui/react';

import { ResourcesItems } from './ResourcesItems';

export function Resources(): JSX.Element {
  return (
    <>
      <Grid
        templateColumns={['1fr 1fr', '1fr 1fr', '1fr 1fr', 'repeat(5, 1fr)']}
        w="100%"
        justifyContent="space-between"
        align="center"
        mt={['10', '32']}
        mx="auto"
        maxW="1160px"
        gap={[1, 5]}
      >
        <GridItem>
          <ResourcesItems srcIcon="cocktail.svg" text="vida noturna" />
        </GridItem>
        <GridItem>
          <ResourcesItems srcIcon="surf.svg" text="praia" />
        </GridItem>
        <GridItem>
          <ResourcesItems srcIcon="building.svg" text="moderno" />
        </GridItem>
        <GridItem>
          <ResourcesItems srcIcon="museum.svg" text="clássico" />
        </GridItem>
        <GridItem colSpan={[2, 2, 2, 1]}>
          <ResourcesItems srcIcon="earth.svg" text="e mais..." />
        </GridItem>
      </Grid>

      <Box w={['60px', '90px']} mx="auto" h="2px" bg="gray" my={['9', '20']} />
    </>
  );
}
