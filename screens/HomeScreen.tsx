import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
import client from '../sanity';
import groq from 'groq';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [featured, setFeatured] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  useEffect(() => {
    client
      .fetch(
        groq`
    *[_type == 'featured'] {
      ...,
      restaurant[]->{
        ...,
        dishes[]->
      }
    }`,
      )
      .then((data: React.SetStateAction<never[]>) => {
        setFeatured(data);
      });
  }, []);

  return (
    <SafeAreaView className="bg-white pt-5">
      {/* Header */}
      <View className="my-5 flex-row items-center mx-4 space-x-2 ">
        <Image
          source={{ uri: 'https://links.papareact.com/wru' }}
          className="h-7 w-7 bg-red-300 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl">
            Current Location
            <Ionicons name="chevron-down-outline" size={20} color="#00ccbb" />
          </Text>
        </View>

        <Ionicons name="person-outline" size={35} color="#00ccbb" />
      </View>

      {/* Search */}
      <View className="flex-row space-x-2 items-center pb-2 mx-4">
        <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3 items-center">
          <Ionicons name="search-outline" size={20} color="gray" />
          <TextInput
            placeholder="Restaurants and cuisines"
            keyboardType="default"
          />
        </View>

        <Ionicons name="filter-outline" size={25} color="#00ccbb" />
      </View>

      {/* Body */}
      <ScrollView>
        {/* Categories */}
        <Categories />

        {/* Featured */}
        {featured?.map((cat: any) => (
          <FeaturedRow
            key={cat._id}
            id={cat._id}
            title={cat.name}
            description={cat.desc}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
