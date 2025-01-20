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
  FeaturesDesigns,
  TestimonialsDesigns,
} from '../../components/WebPageComponents/designs';

import HeroSection from '../../components/WebPageComponents/HeroComponent';

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
      name: 'Production Optimization',
      description:
        'Streamline your production processes with advanced scheduling and resource allocation. Maximize efficiency and reduce downtime.',
      icon: 'mdiFactory',
    },
    {
      name: 'Supply Chain Management',
      description:
        'Enhance your supply chain with real-time tracking and analytics. Ensure timely deliveries and maintain strong supplier relationships.',
      icon: 'mdiTruckDelivery',
    },
    {
      name: 'Workforce Management',
      description:
        'Manage your workforce effectively with tools for scheduling, payroll, and performance tracking. Boost productivity and employee satisfaction.',
      icon: 'mdiAccountGroupOutline',
    },
    {
      name: 'Inventory Control',
      description:
        'Maintain optimal inventory levels with automated tracking and alerts. Reduce waste and improve stock management.',
      icon: 'mdiPackageVariantClosed',
    },
    {
      name: 'Quality Assurance',
      description:
        'Implement rigorous quality checks at every stage of production. Ensure compliance and maintain high product standards.',
      icon: 'mdiCheckDecagram',
    },
    {
      name: 'Data-Driven Insights',
      description:
        'Leverage data analytics to gain insights into your operations. Make informed decisions to drive growth and innovation.',
      icon: 'mdiChartBar',
    },
  ];

  const testimonials = [
    {
      text: 'Implementing ${projectName} has been a game-changer for our production line. The efficiency and ease of use are unparalleled.',
      company: 'NextGen Manufacturing',
      user_name: 'Olivia Brown, Operations Manager',
    },
    {
      text: 'Our supply chain has never been more streamlined. ${projectName} provides the insights we need to stay ahead.',
      company: 'LogiTech Solutions',
      user_name: 'Ethan Smith, Supply Chain Director',
    },
    {
      text: "The workforce management tools in ${projectName} have improved our team's productivity and morale significantly.",
      company: 'Innovate Industries',
      user_name: 'Sophia Johnson, HR Lead',
    },
    {
      text: "With ${projectName}, our inventory control is precise and efficient. We've reduced waste and improved stock levels.",
      company: 'Precision Parts Co.',
      user_name: 'Liam Davis, Inventory Specialist',
    },
    {
      text: 'Quality assurance is now seamless with ${projectName}. We maintain high standards and ensure compliance effortlessly.',
      company: 'QualityFirst Manufacturing',
      user_name: 'Emma Wilson, Quality Manager',
    },
    {
      text: 'The data-driven insights from ${projectName} have empowered us to make informed decisions and drive growth.',
      company: 'FutureTech Enterprises',
      user_name: 'Noah Martinez, Data Analyst',
    },
  ];

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>{`Our Services - ${projectName}`}</title>
        <meta
          name='description'
          content={`Explore the comprehensive services offered by ${projectName}. Discover how our ERP solutions can enhance your manufacturing operations and drive success.`}
        />
      </Head>
      <WebSiteHeader projectName={'ERP'} pages={pages} />
      <main className={`flex-grow  ${bgColor}    rounded-none  `}>
        <HeroSection
          projectName={'ERP'}
          image={['Manufacturing process optimization tools']}
          mainText={`Transform Your Operations with ${projectName}`}
          subTitle={`Discover the range of services offered by ${projectName} to optimize your manufacturing processes. Our ERP solutions are designed to enhance efficiency and drive growth.`}
          design={HeroDesigns.IMAGE_BG || ''}
          buttonText={`Explore Our Services`}
        />

        <FeaturesSection
          projectName={'ERP'}
          image={['Advanced ERP service offerings']}
          withBg={0}
          features={features_points}
          mainText={`Comprehensive Services by ${projectName}`}
          subTitle={`Explore the key features of ${projectName} that enhance your manufacturing operations and drive success.`}
          design={FeaturesDesigns.CARDS_GRID_WITH_ICONS_DIVERSITY || ''}
        />

        <TestimonialsSection
          projectName={'ERP'}
          design={TestimonialsDesigns.MULTI_CARD_DISPLAY || ''}
          testimonials={testimonials}
          mainText={`Client Success Stories with ${projectName} `}
        />
      </main>
      <WebSiteFooter projectName={'ERP'} pages={pages} />
    </div>
  );
}

WebSite.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>;
};
