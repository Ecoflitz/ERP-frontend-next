import React, { useEffect, useState } from 'react';
import type { ReactElement } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useAppSelector } from '../../stores/hooks';
import LayoutGuest from '../../layouts/Guest';
import WebSiteHeader from '../../components/WebPageComponents/Header';
import WebSiteFooter from '../../components/WebPageComponents/Footer';
import {
  HeroDesigns,
  AboutUsDesigns,
  FeaturesDesigns,
  TestimonialsDesigns,
} from '../../components/WebPageComponents/designs';

import HeroSection from '../../components/WebPageComponents/HeroComponent';

import AboutUsSection from '../../components/WebPageComponents/AboutUsComponent';

import FeaturesSection from '../../components/WebPageComponents/FeaturesComponent';

import TestimonialsSection from '../../components/WebPageComponents/TestimonialsComponent';

export default function WebSite() {
  const cardsStyle = useAppSelector((state) => state.style.cardsStyle);
  const bgColor = useAppSelector((state) => state.style.bgLayoutColor);
  const projectName = 'ERP';

  useEffect(() => {
    const darkElement = document.querySelector('body .dark');
    if (darkElement) {
      darkElement.classList.remove('dark');
    }
  }, []);
  const pages = [
    {
      href: '/home',
      label: 'home',
    },

    {
      href: '/about',
      label: 'about',
    },

    {
      href: '/services',
      label: 'services',
    },

    {
      href: '/contact',
      label: 'contact',
    },

    {
      href: '/faq',
      label: 'FAQ',
    },
  ];

  const features_points = [
    {
      name: 'Real-Time Analytics',
      description:
        'Gain insights into your operations with real-time data analytics. Make informed decisions to enhance productivity and efficiency.',
      icon: 'mdiChartLine',
    },
    {
      name: 'Seamless Integration',
      description:
        'Integrate ${projectName} with your existing systems effortlessly. Enjoy a unified platform that enhances collaboration and workflow.',
      icon: 'mdiPuzzleOutline',
    },
    {
      name: 'Customizable Dashboards',
      description:
        'Tailor your dashboard to fit your unique needs. Access critical information at a glance and stay on top of your operations.',
      icon: 'mdiViewDashboardOutline',
    },
  ];

  const testimonials = [
    {
      text: '${projectName} has transformed our manufacturing process. The intuitive interface and robust features have made our operations more efficient.',
      company: 'GlobalTech Manufacturing',
      user_name: 'Alice Johnson, Operations Director',
    },
    {
      text: 'We are thrilled with the results since implementing ${projectName}. Our team is more productive, and our processes are streamlined.',
      company: 'Innovate Solutions Inc.',
      user_name: 'Mark Thompson, CEO',
    },
    {
      text: 'The support from ${projectName} has been exceptional. Their team is always ready to assist, ensuring a smooth experience.',
      company: 'Precision Parts Co.',
      user_name: 'Linda Green, Customer Success Manager',
    },
    {
      text: 'Thanks to ${projectName}, our inventory management is now seamless. We have better control and visibility over our stock levels.',
      company: 'Efficient Enterprises',
      user_name: 'Tom Brown, Inventory Manager',
    },
    {
      text: 'The real-time analytics feature of ${projectName} is a game-changer. We can make data-driven decisions quickly and effectively.',
      company: 'TechnoCraft Industries',
      user_name: 'Emma White, Data Analyst',
    },
    {
      text: 'Our team loves the customizable dashboards in ${projectName}. It allows us to focus on what matters most to our business.',
      company: 'FutureTech Innovations',
      user_name: 'James Black, Product Manager',
    },
  ];

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>{`About Us - ${projectName}`}</title>
        <meta
          name='description'
          content={`Learn more about ${projectName}, our mission, values, and the innovative ERP solutions we provide for the manufacturing industry.`}
        />
      </Head>
      <WebSiteHeader projectName={'ERP'} pages={pages} />
      <main className={`flex-grow  ${bgColor}    rounded-none  `}>
        <HeroSection
          projectName={'ERP'}
          image={['Team collaborating in modern office']}
          mainText={`Discover the Vision Behind ${projectName}`}
          subTitle={`Explore the journey and mission of ${projectName}. Learn how our innovative ERP solutions are transforming the manufacturing industry.`}
          design={HeroDesigns.IMAGE_LEFT || ''}
          buttonText={`Meet Our Team`}
        />

        <AboutUsSection
          projectName={'ERP'}
          image={['Dedicated team brainstorming ideas']}
          mainText={`The Heart and Soul of ${projectName}`}
          subTitle={`At ${projectName}, we are driven by innovation and excellence. Our team is committed to delivering cutting-edge ERP solutions that empower manufacturers worldwide.`}
          design={AboutUsDesigns.IMAGE_RIGHT || ''}
          buttonText={`Learn More About Us`}
        />

        <FeaturesSection
          projectName={'ERP'}
          image={['Innovative ERP solutions in action']}
          withBg={0}
          features={features_points}
          mainText={`Explore ${projectName} Core Features`}
          subTitle={`Discover the powerful features of ${projectName} that streamline manufacturing processes and drive efficiency.`}
          design={FeaturesDesigns.CARDS_GRID_WITH_ICONS || ''}
        />

        <TestimonialsSection
          projectName={'ERP'}
          design={TestimonialsDesigns.HORIZONTAL_CAROUSEL_DIVERSITY || ''}
          testimonials={testimonials}
          mainText={`Hear from Our Satisfied Clients `}
        />
      </main>
      <WebSiteFooter projectName={'ERP'} pages={pages} />
    </div>
  );
}

WebSite.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>;
};
