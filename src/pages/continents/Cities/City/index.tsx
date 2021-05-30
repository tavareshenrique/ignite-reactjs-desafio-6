import { Box, Image, Flex, Heading, Text } from '@chakra-ui/react';

export function City(): JSX.Element {
  return (
    <Box borderRadius="4px" overflow="hidden">
      <Image src="/londres.png" h="170px" w="100%" />
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
            Londres
          </Heading>
          <Text mt="3" fontSize="md" fontWeight="100">
            Reino Unido
          </Text>
        </Flex>
        <Image src="/uk.jpg" w="30px" h="30px" borderRadius="50%" />
      </Flex>
    </Box>
  );
}
