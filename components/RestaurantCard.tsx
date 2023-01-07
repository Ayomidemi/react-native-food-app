import { Image, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';

type Props = {
  id?: number;
  imgUrl: string;
  title: string;
  rating: number;
  genre: string;
  address: string;
  desc: string;
  dishes: [];
  long: number;
  lat: number;
};

const RestaurantCard = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  desc,
  dishes,
  long,
  lat,
}: Props) => {
  return (
    <TouchableOpacity className="bg-white mr-3 shadow">
      <Image source={{ uri: imgUrl }} className="h-36 w-64 rounded-sm" />

      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{title}</Text>

        <View className="flex-row items-center space-x-1">
          <View className="opacity-50">
            <Ionicons name="star" size={22} color="green" />
          </View>
          <Text className="text-gray-500 text-xs">
            <Text className="text-green-500">{rating}</Text> . {genre}
          </Text>
        </View>

        <View className="flex-row items-center space-x-1">
          <View className="opacity-40">
            <Ionicons name="location-outline" size={22} color="gray" />
          </View>
          <Text className="text-gray-500 text-xs">Nearby . {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
