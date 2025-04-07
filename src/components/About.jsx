import React from 'react';
import bgimg from "../assets/creativity.jpg"; // Import your background image

function About() {
  return (
    <div className="pt-50 p-10 flex flex-col gap-20">
      {/* Description Text */}
      <p>
        We’re more than just developers; we’re dedicated collaborators committed to helping your business thrive. As a Full-Stack Software Developer with expertise in the MERN stack, JavaScript, and Flutter, we focus on delivering seamless, scalable web and mobile applications tailored to your needs. With both front-end and back-end development experience, we bring an integrated approach that ensures all aspects of your project are aligned and working together harmoniously.
        We take the time to understand your goals, challenges, and vision, and we work closely with you at every step of the process. By combining technical expertise with creative thinking, we craft innovative solutions designed to make your brand stand out and succeed. Our approach is collaborative, ensuring that we’re always in sync with your expectations.
        We believe in working closely with our clients, ensuring clear communication and a shared vision throughout every project. With our combined technical expertise and creative approach, we create reliable, innovative solutions that help your business grow in today’s competitive landscape.
        If you're looking for a dedicated partner who’s invested in your success, let's connect and discuss how we can bring your project to life!
      </p>

      {/* Image Hover Effect */}
      <div className="relative group">
        {/* Image Container */}
        <div
          className="w-full h-96 bg-cover bg-center"
          style={{ backgroundImage: `url(${bgimg})` }}
        ></div>

        {/* Details on Hover */}
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 text-white flex items-center justify-center p-4 transition-opacity duration-300">
          <div className="text-center">
            <h2 className="text-4xl font-bold">Creative Innovation</h2>
            <p className="mt-4 text-xl">We make your vision a reality with innovative solutions and creative design.</p>
          </div>
        </div>
      </div>

      {/* second image */}
      <div className="relative group">
        {/* Image Container */}
        <div
          className="w-full h-96 bg-cover bg-center"
          style={{ backgroundImage: `url(${bgimg})` }}
        ></div>

        {/* Details on Hover */}
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 text-white flex items-center justify-center p-4 transition-opacity duration-300">
          <div className="text-center">
            <h2 className="text-4xl font-bold">Creative Innovation Two</h2>
            <p className="mt-4 text-xl">We make your vision a reality with innovative solutions and creative design.</p>
          </div>
        </div>
      </div>

          {/* third image */}
          <div className="relative group">
        {/* Image Container */}
        <div
          className="w-full h-96 bg-cover bg-center"
          style={{ backgroundImage: `url(${bgimg})` }}
        ></div>

        {/* Details on Hover */}
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 text-white flex items-center justify-center p-4 transition-opacity duration-300">
          <div className="text-center">
            <h2 className="text-4xl font-bold">Creative Innovation Three</h2>
            <p className="mt-4 text-xl">We make your vision a reality with innovative solutions and creative design.</p>
          </div>
        </div>
      </div>

           {/*Fourth image */}
           <div className="relative group">
        {/* Image Container */}
        <div
          className="w-full h-96 bg-cover bg-center"
          style={{ backgroundImage: `url(${bgimg})` }}
        ></div>

        {/* Details on Hover */}
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 text-white flex items-center justify-center p-4 transition-opacity duration-300">
          <div className="text-center">
            <h2 className="text-4xl font-bold">Creative Innovation Four</h2>
            <p className="mt-4 text-xl">We make your vision a reality with innovative solutions and creative design.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
