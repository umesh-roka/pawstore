import React from 'react';

const About = () => {
  return (
    <div className="p-6 bg-orange-100 my-3 text-center">
      <h1 className="text-4xl font-bold text-orange-500 mb-4">About Our Store</h1>
      <p className="text-lg text-gray-700 lg:mx-[300px] text-justify  mb-6">
        Welcome to PawStore, your go-to destination for all things pets! We’re passionate about providing
        the best products, care, and advice for your beloved furry companions. From premium pet food to 
        toys, grooming essentials, and more, we’re committed to making pet parenting a breeze. At PawStore, 
        we believe that pets are family, and we strive to ensure every pet receives the love and care they deserve.
      </p>
      <p className="text-lg text-gray-700 lg:mx-[300px]  text-justify mb-6">
        Our mission is to create a community where pets and their owners can find high-quality products, 
        trusted advice, and heartfelt support. Whether you're a new pet owner or an experienced one, 
        we're here to guide you every step of the way!
      </p>
      <p className="text-lg text-gray-700">
        Thank you for choosing PawStore, where every paw matters!
      </p>
    </div>
  );
}

export default About;
