import React, {useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {VStack, Spinner, Image, Button, Text} from 'native-base';
import 'react-native-get-random-values';
import '@ethersproject/shims';
import {ethers} from 'ethers';
import SBT from '../abi/SBT.json';
import axios from 'axios';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

const UserNFTs = ({tokenId}) => {
  const offset = useSharedValue(0);
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{translateX: offset.value}],
    };
  });
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);
  const provider = new ethers.providers.JsonRpcProvider(
    'https://mainnet-rpc.thundercore.com',
  );
  const contract = new ethers.Contract(SBT.address, SBT.abi, provider);

  const getNFTs = async () => {
    setLoading(true);
    try {
      const tokenURI = await contract.tokenURI(tokenId);
      // const tokenBelongAddress = await contract.soulOf(1);
      // const shouldBeOne = await contract.soulToSBT(tokenBelongAddress);
      if (tokenURI) {
        const response = await axios.get(tokenURI);
        const image = response?.data.image;
        setImage(image);
        setLoading(false);
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    if (tokenId) {
      getNFTs();
    }
  }, [tokenId]);

  if (loading) {
    return <Spinner size="lg" />;
  }
  if (tokenId === '') {
    return (
      <VStack justifyContent="center" alignItems="center">
        <Text tw="text-white font-bold text-2xl">NO Input NFT ID</Text>
      </VStack>
    );
  }

  return (
    <VStack justifyContent="center" alignItems="center" tw="gap-5">
      <Animated.View style={[styles.box, animatedStyles]}>
        {image && (
          <Image source={{uri: `${image}`}} size="2xl" alt="NFT Image" />
        )}
      </Animated.View>

      <Button
        variant="ghost"
        className="border border-white rounded-full mt-5"
        _pressed={{bg: '#414345'}}
        _text={{color: 'white'}}
        onPress={() => {
          offset.value = withSpring(Math.random() * (100 + 100 + 1) - 100);
        }}>
        Move
      </Button>
    </VStack>
  );
};
const styles = StyleSheet.create({
  box: {
    width: '100%',
  },
});
export default UserNFTs;
