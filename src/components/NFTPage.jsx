import React from 'react';
import {Box, Text} from 'native-base';
import UserNFTs from './UserNFTs';

const NFTPage = ({route}) => {
  const {tokenId} = route.params;
  return (
    <Box
      className="flex h-full items-center p-12"
      bg={{
        linearGradient: {
          colors: ['#232526', '#414345', '#232526'],
          start: [1, 1],
          end: [0, 0],
        },
      }}>
      <Box>
        <Text className="text-4xl font-bold text-white text-center pt-10">
          SOOOUL
        </Text>
        <Text className="text-lg text-neutral-400 text-center">
          x NFT.Taipei
        </Text>
      </Box>
      <Box className="pt-20">
        <UserNFTs tokenId={tokenId} />
      </Box>
    </Box>
  );
};

export default NFTPage;
