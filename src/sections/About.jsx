import React from 'react';
import { about } from "../assets/images";

const About = () => {
  return (
    <section id="about" className="w-full flex flex-col lg:flex-row justify-center items-center min-h-screen gap-10 px-5 pt-0 mt-0 pb-0 mb-0">
      <div className="lg:w-7/12 p-4">
        <h1 className="font-anton text-[50px] mb-4">WHO's $INVSTGTR</h1>
        <h2 className="font-anton text-[30px] mb-4">
          We have all been asking for it ... $GATOR is the first detective of his kind - RUG DETECTIVE<br/>
          <br/>$INVSTGTR has caught all kind of  greedy malicious devs <br/>From Indian devs to Retarded devs even MCdonalds devs<br/><br/>
          $INVSTGTR's mission is to make solana great again and lock up all the indian devs for eternity   </h2>
      </div>
      <div className="lg:w-5/12 p-4">
        <img src={about} alt="New Section" className="w-full" />
      </div>
    </section>
  );
};

export default About;
