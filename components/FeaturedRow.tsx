import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import RestaurantCard from './RestaurantCard';

type Props = {
  title: string;
  description: string;
  id?: string;
};

const FeaturedRow = ({ title, description }: Props) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <Ionicons name="arrow-forward-outline" size={22} color="#00ccbb" />
      </View>

      <Text className="text-xs px-4 text-gray-500">{description}</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        className="pt-4"
      >
        {/* Restaurant Cards */}
        <RestaurantCard
          id={123}
          imgUrl="https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          title="Yo! Sushi"
          rating={4.5}
          genre="Sushi"
          address="123, Lagos street"
          desc="Test Decsiption"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={123}
          imgUrl="https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          title="Yo! Sushi"
          rating={4.5}
          genre="Sushi"
          address="123, Lagos street"
          desc="Test Decsiption"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={123}
          imgUrl="https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          title="Yo! Sushi"
          rating={4.5}
          genre="Sushi"
          address="123, Lagos street"
          desc="Test Decsiption"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={123}
          imgUrl="https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          title="Yo! Sushi"
          rating={4.5}
          genre="Sushi"
          address="123, Lagos street"
          desc="Test Decsiption"
          dishes={[]}
          long={20}
          lat={0}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
