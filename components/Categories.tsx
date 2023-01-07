import { ScrollView } from 'react-native';
import CategoryCards from './CategoryCards';
import React from 'react';

const categories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
    >
      {/* Category Cards */}
      <CategoryCards
        imgUrl="https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        title="Pizza"
      />
      <CategoryCards
        imgUrl="https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        title="Burgers"
      />
      <CategoryCards
        imgUrl="https://images.pexels.com/photos/1487511/pexels-photo-1487511.jpeg?auto=compress&cs=tinysrgb&w=800"
        title="Pasta"
      />
      <CategoryCards
        imgUrl="https://images.pexels.com/photos/2087748/pexels-photo-2087748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        title="Indian"
      />
      <CategoryCards
        imgUrl="https://images.pexels.com/photos/1052189/pexels-photo-1052189.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        title="Sushi"
      />
      <CategoryCards
        imgUrl="https://images.pexels.com/photos/628776/pexels-photo-628776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        title="Asian"
      />
      <CategoryCards
        imgUrl="https://images.pexels.com/photos/764925/pexels-photo-764925.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        title="Salad"
      />
    </ScrollView>
  );
};

export default categories;
