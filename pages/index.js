import React from 'react';
import Header from '../components/Header';

const style = {
  wrapper: 'h-screen max-h-screen h-min-screen w-screen bg-[#2D242F] text-white select-none flex flex-col justify-between',
};

const Home = () => {
  return (
    <div className={style.wrapper}>
      <Header />
    </div>
  );
};

export default Home;
