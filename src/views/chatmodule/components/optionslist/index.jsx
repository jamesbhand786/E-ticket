import { Flex, Text, Switch } from '@chakra-ui/react';

const OptionsList = ({ items, onToggle }) => {
  return (
    <Flex direction="column">
      {items.map((item, index) => (
        <Flex key={index} align="center" justify="space-between" py={4} borderTopWidth="1px">
          <Text fontSize="sm" color='gray.600'>{item.label}</Text>
          <Switch
            size="md"
            isChecked={item.checked}
            onChange={() => onToggle(index)}
          />
        </Flex>
      ))}
    </Flex>
  );
};

export default OptionsList;