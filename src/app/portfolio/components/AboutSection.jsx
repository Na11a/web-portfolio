"use client"
import Image from "next/image";
import Tech  from "./Tech";

import { motion } from "framer-motion";

import { styles } from './styles'


const AboutSection = () => {
  return (
    <section className="text-white">
      <h2 className={`${styles.sectionHeadText} text-center`}>About Me</h2>
      <div id="about" className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16" >
        <Image src="/images/about-image.png" alt='about' width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left h-full flex flex-col justify-center">
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Nextjs Express, PostgreSQL,
            MongoDB, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>  
        </div>
      </div>
      <motion.div className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full bg-gray-500 '>
        <div className='mt-1'>
          <div className='text-white tracking-wider text-[18px] space-y-2 '>
            <p>I have had the pleasure of working closely with Maksym more than 1 year when he occupied position of Middle Frontend Engineer. I can confidently attest to his exceptional technical skillset, strong work ethic, and valuable contributions to our development team.</p>

            <p>Maksym is product and client oriented engineer and he consistently exhibited a proactive approach to identifying and addressing potential issues, often proposing innovative solutions that improved overall application performance and user experience. His dedication to continuous learning and self-improvement was evident in their pursuit of new technologies. Even though his main responsibility was frontend engineering, he was able to growth as full-stack, working with such modern technologies like Supabase Cloud Backend infrastructure.</p>

            <p>Beyond his technical aptitude, Maksym consistently demonstrated a positive attitude, professionalism, and a strong sense of accountability. He embraced challenges with enthusiasm and consistently delivered results, even under pressure. His natural leadership abilities, combined with his ability to foster a collaborative and inclusive work environment, made him a valuable asset to our team.</p>
          </div>

          <div className='mt-7 flex justify-between items-center gap-1'>
            <div className='flex-1 flex flex-col'>
              <p className='text-white font-medium text-[16px]'>
                <span className='blue-text-gradient'>@</span> Andriy Vasylytsya
              </p>
              <p className='mt-1 text-secondary text-[12px]'>
                Co-founder of Softonix
              </p>
            </div>

            <img
              src={'/vasilitsa.jpeg'}
              alt={`feedback_by-Andriy`}
              className='w-20 h-20 rounded-full object-cover'
            />
          </div>
        </div>
      </motion.div>
      <div id="skillset">
        <h2 className={`${styles.sectionHeadText} text-center mt-8`}>
          Skillset
        </h2>
        <div className='flex flex-row flex-wrap justify-center gap-10'>
          <Tech />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
