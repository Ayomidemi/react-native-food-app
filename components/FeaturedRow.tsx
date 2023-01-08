import { View, Text, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import RestaurantCard from './RestaurantCard';
import client from '../sanity';
import groq from 'groq';

type Props = {
  title: string;
  description: string;
  id?: string;
};

const FeaturedRow = ({ id, title, description }: Props) => {
  const [restaurants, setRestaurants] = useState<any>([]);

  useEffect(() => {
    client
      .fetch(
        groq`
    *[_type == 'featured' && _id == $id] {
      ...,
      restaurant[]->{
        ...,
        dishes[]->,
        type -> {
          name
        },
        image {
          asset -> {
            _id,
            url
          },
          alt
        }
      }
    }[0].restaurant`,
        { id },
      )
      .then((data: React.SetStateAction<never[]>) => {
        setRestaurants(data);
      });
  }, [id]);

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

        {restaurants?.map((rest: any) => (
          <RestaurantCard
            key={rest._id}
            id={rest._id}
            imgUrl={rest?.image.asset.url}
            title={rest?.name}
            rating={rest?.rating}
            genre={rest?.type.name}
            address={rest?.address}
            desc={rest?.desc}
            dishes={[]}
            long={rest?.long}
            lat={rest?.lat}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
