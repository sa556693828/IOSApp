import React, {useEffect, useState} from 'react';
import {Box, Button, Input, Text} from 'native-base';

const Index = ({navigation}) => {
  const [tokenId, setTokenId] = useState('');

  return (
    <Box
      className="flex h-full items-center justify-between p-12"
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

      <Box>
        <Text className="text-2xl font-bold text-white text-center">
          Welcome Web3 SOOOUL
        </Text>
        <Box className="mt-10">
          <Input
            variant="outline"
            className="text-white"
            placeholder="Input token ID"
            onChange={e => setTokenId(e.nativeEvent.text)}
            _focus={{borderColor: 'black', backgroundColor: '#414345'}}
          />
        </Box>
        <Button
          variant="ghost"
          className="border border-white rounded-full mt-5"
          _pressed={{bg: '#414345'}}
          _text={{color: 'white'}}
          onPress={() => navigation.navigate('NFTs', {tokenId: tokenId})}>
          Login
        </Button>
        <Button
          variant="ghost"
          className="border border-white rounded-full mt-5"
          _pressed={{bg: '#414345'}}
          _text={{color: 'white'}}
          onPress={() => navigation.navigate('Animation')}>
          Animation
        </Button>
      </Box>

      <Text className="text-[10px] text-white text-center">
        © 2022 SOOOUL INC. ALL RIGHTS RESERVED.
      </Text>
    </Box>
  );
};

export default Index;
