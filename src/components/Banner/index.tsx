import { Box, Flex, Image, Heading, Text } from '@chakra-ui/react';

export function Banner(): JSX.Element {
  return (
    <Flex
      w="100%"
      h={['163px', '250px', '250px', '335px']}
      backgroundImage="url(background.svg)"
      bgRepeat="no-repeat"
      backgroundSize="cover"
    >
      <Flex
        justify={['center', 'space-between']}
        align="center"
        w="100%"
        mx="auto"
        px={['4', '10', '15', '20', '36']}
      >
        <Box>
          <Heading
            color="white"
            fontWeight="500"
            fontSize={['xl', '2l', '2xl', '2xl', '4xl']}
            mb="20px"
          >
            5 Continentes,
            <br /> infinitas possibilidades.
          </Heading>

          <Text
            color="white"
            mt="5"
            fontSize={['0.8rem', 'xl']}
            maxW={['100%', '100%', '100%', '550px']}
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Box>
        <Image
          w={['300px', '300px', '300px', '430px']}
          display={['none', 'none', 'block']}
          transform="rotate(3deg) translateY(48px)"
          src="airplane.svg"
          ml="8"
        />
      </Flex>
    </Flex>
  );
}
