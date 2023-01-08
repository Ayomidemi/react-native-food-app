import { ScrollView } from 'react-native';
import CategoryCards from './CategoryCards';
import React, { useEffect, useState } from 'react';
import groq from 'groq';
import client from '../sanity';

const Categories = () => {
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    client
      .fetch(
        groq`
    *[_type == 'category'] {
      ...,
      image {
        asset -> {
          _id,
          url
        },
        alt
      }
    }`,
      )
      .then((data: React.SetStateAction<never[]>) => {
        setFeatured(data);
      });
  }, []);

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
    >
      {/* Category Cards */}
      {featured?.map((cat: any) => (
        <CategoryCards
          key={cat._id}
          imgUrl={cat.image.asset.url}
          title={cat.name}
        />
      ))}
    </ScrollView>
  );
};

export default Categories;
