import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
} from '@chakra-ui/react';

import { InfoOutlineIcon } from '@chakra-ui/icons';

export function PopoverItem(): JSX.Element {
  return (
    <Popover>
      <PopoverTrigger>
        <span>
          <InfoOutlineIcon
            cursor="pointer"
            ml="1"
            w={['8px', '14px']}
            h={['8px', '14px']}
          />
        </span>
      </PopoverTrigger>
      <PopoverContent color="yellow" bg="gray">
        <PopoverArrow bg="gray" />
        <PopoverCloseButton />
        <PopoverBody fontWidth="400" fontSize="lg" />
        Paris, Londres, Madrid, Roma, Berlim, Atenas, Lisboa, Amsterdã
      </PopoverContent>
    </Popover>
  );
}
