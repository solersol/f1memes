
// const About2 = () => {
//   return (
//     <section className="relative w-full h-screen bg-cover bg-center flex items-center justify-center">
//     <div className="text-center ">
//       <h1 className="text-black text-[50px] mb-20 font-anton">WHATS F1MEMES $F1 ?</h1>
//       <h2 className="text-white text-3xl mb-8 max-w-[500px] font-anton">PERFECT MIX FOR ALL THE MOTOR AND MEME LOVERS BUT WHOS GING TO WIN ? MAKE SURE TO COMMENT YOUR FAVORITE RACER ON THE REPLY SECTION ON PUMP FUN. WE ARE TAKING THIS PROJECT TO 1M AND BEYOND COME AND MEET THE PERFECT TEAM TO MAKE THIS HAPPEN</h2>
//       <a href="https://t.me/">      <button className="bg-[#0a2d6b] text-white px-6 py-3 rounded-full text-xl font-anton hover:bg-[#ff0000]">JOIN $DRIFT</button>
//       </a>
//     </div>
//   </section>
//   )
// }

// export default About2


import React, { useEffect, useRef } from 'react';

const About2 = () => {
  const h1Ref = useRef(null);
  const h2Ref = useRef(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const handleIntersection = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    if (h1Ref.current) observer.observe(h1Ref.current);
    if (h2Ref.current) observer.observe(h2Ref.current);

    return () => {
      if (h1Ref.current) observer.unobserve(h1Ref.current);
      if (h2Ref.current) observer.unobserve(h2Ref.current);
    };
  }, []);

  return (
    <section className="relative w-full h-screen bg-cover bg-center flex items-center justify-center">
      <div className="text-center">
        <h1 ref={h1Ref} className="text-black text-[50px] mb-20 font-anton transition-transform duration-1000 transform -translate-x-full opacity-0">
          WHATS F1MEMES $F1 ?
        </h1>
        <h2 ref={h2Ref} className="text-white text-3xl mb-8 max-w-[500px] font-anton transition-transform duration-1000 transform translate-x-full opacity-0">
          PERFECT MIX FOR ALL THE MOTOR AND MEME LOVERS BUT WHOS GOING TO WIN? MAKE SURE TO COMMENT YOUR FAVORITE RACER ON THE REPLY SECTION ON PUMP FUN. WE ARE TAKING THIS PROJECT TO 1M AND BEYOND COME AND MEET THE PERFECT TEAM TO MAKE THIS HAPPEN
        </h2>
        <a href="https://t.me/F1MEMEStoRAY">
          <button className="bg-[#0a2d6b] text-white px-6 py-3 rounded-full text-xl font-anton hover:bg-[#ff0000]">
            JOIN $F1
          </button>
        </a>
      </div>
    </section>
  );
};

export default About2;
