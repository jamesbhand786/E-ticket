import { Box, Flex, Text, Avatar, Badge } from '@chakra-ui/react';

const ProfileDetailCard = ({ name, username, bio, avatarUrl, badges }) => {
  return (
    <Box maxW="xl" borderWidth="1px" borderRadius="xl" overflow="hidden" mb={4}>
      <Flex p="3" align="center">
        <Avatar size="lg" name={name} src={avatarUrl} />
        <Box ml="4">
          <Text fontSize="xl" fontWeight="600">{name}</Text>
          <Text color="gray.600" fontSize={13}>{username}</Text>
          <Text my={4} fontSize='xs'  color="gray.600">{bio}</Text>
          <Flex mt="2" flexWrap="wrap">
            {badges.map((badge, index) => (
              <Badge key={index} variant="subtle" colorScheme="green" mr="2" mb="2">
                {badge}
              </Badge>
            ))}
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default ProfileDetailCard;