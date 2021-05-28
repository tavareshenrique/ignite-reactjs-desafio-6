import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';

import { Flex, Image, Box } from '@chakra-ui/react';
import { ChevronLeftIcon } from '@chakra-ui/icons';

export function Header(): JSX.Element {
  const { asPath } = useRouter();

  const asHomePage = asPath === '/';

  return (
    <Flex
      maxWidth="1160px"
      mx="auto"
      px="1rem"
      w="100%"
      height="100"
      alignItems="center"
    >
      {!asHomePage && (
        <Box justifyContent="flex-start" cursor="pointer">
          <Link href="/">
            <ChevronLeftIcon h="20px" width="20px" />
          </Link>
        </Box>
      )}

      <Image margin="0 auto" w="186" h="45" src="/logo.svg" alt="logo" />
    </Flex>
  );
}
