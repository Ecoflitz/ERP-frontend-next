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
  AboutUsDesigns,
  TestimonialsDesigns,
  ContactFormDesigns,
} from '../../components/WebPageComponents/designs';

import HeroSection from '../../components/WebPageComponents/HeroComponent';

import FeaturesSection from '../../components/WebPageComponents/FeaturesComponent';

import AboutUsSection from '../../components/WebPageComponents/AboutUsComponent';

import TestimonialsSection from '../../components/WebPageComponents/TestimonialsComponent';

import ContactFormSection from '../../components/WebPageComponents/ContactFormComponent';

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
      name: 'Inventory Management',
      description:
        'Efficiently track and manage raw materials and finished goods. Set reorder levels to ensure optimal stock levels at all times.',
      icon: 'mdiWarehouse',
    },
    {
      name: 'Work Order Automation',
      description:
        'Create and manage work orders seamlessly. Allocate resources, track progress, and ensure timely completion of production runs.',
      icon: 'mdiClipboardCheck',
    },
    {
      name: 'Quality Control',
      description:
        'Implement rigorous quality checks at every production stage. Maintain compliance records and ensure product excellence.',
      icon: 'mdiCheckCircleOutline',
    },
  ];

  const testimonials = [
    {
      text: '${projectName} has revolutionized our production process. The seamless integration and user-friendly interface have significantly boosted our efficiency.',
      company: 'TechnoCraft Industries',
      user_name: 'John Doe, Production Manager',
    },
    {
      text: "Thanks to ${projectName}, our inventory management is now more organized than ever. It's a game-changer for our operations.",
      company: 'Innovate Manufacturing Co.',
      user_name: 'Jane Smith, Inventory Manager',
    },
    {
      text: 'The quality control features of ${projectName} have helped us maintain high standards and compliance effortlessly. Highly recommend!',
      company: 'Precision Parts Ltd.',
      user_name: 'Michael Brown, Quality Control Officer',
    },
    {
      text: 'With ${projectName}, managing our workforce has become a breeze. The HR tools are intuitive and save us a lot of time.',
      company: 'Efficient Enterprises',
      user_name: 'Emily White, HR Manager',
    },
    {
      text: 'Our relationship with suppliers has improved thanks to ${projectName}. The system keeps everything organized and transparent.',
      company: 'SupplyChain Solutions',
      user_name: 'Robert Green, Procurement Specialist',
    },
    {
      text: "The comprehensive dashboard of ${projectName} gives us a 360-degree view of our operations. It's an indispensable tool for our business.",
      company: 'FutureTech Manufacturing',
      user_name: 'Sarah Johnson, CEO',
    },
  ];

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>{`Comprehensive ERP Solutions for Manufacturing`}</title>
        <meta
          name='description'
          content={`Discover our robust ERP solution tailored for the manufacturing industry. Simplify production, inventory, and workforce management with our all-in-one platform.`}
        />
      </Head>
      <WebSiteHeader projectName={'ERP'} pages={pages} />
      <main className={`flex-grow  ${bgColor}    rounded-none  `}>
        <HeroSection
          projectName={'ERP'}
          image={['Efficient factory floor operations']}
          mainText={`Revolutionize Manufacturing with ${projectName} ERP`}
          subTitle={`Streamline your manufacturing operations with ${projectName}. Manage production, inventory, and workforce effortlessly from a single dashboard.`}
          design={HeroDesigns.IMAGE_BG || ''}
          buttonText={`Get Started Now`}
        />

        <FeaturesSection
          projectName={'ERP'}
          image={['Streamlined production management dashboard']}
          withBg={0}
          features={features_points}
          mainText={`Unlock Manufacturing Excellence with ${projectName}`}
          subTitle={`Discover the powerful features of ${projectName} that streamline your manufacturing processes and boost efficiency.`}
          design={FeaturesDesigns.CARDS_GRID_WITH_ICONS || ''}
        />

        <AboutUsSection
          projectName={'ERP'}
          image={['Team collaborating on innovative solutions']}
          mainText={`Empowering Manufacturing with ${projectName}`}
          subTitle={`At ${projectName}, we are dedicated to transforming the manufacturing industry. Our ERP solution is designed to simplify complex operations, enhance productivity, and drive growth.`}
          design={AboutUsDesigns.IMAGE_RIGHT || ''}
          buttonText={`Learn More About Us`}
        />

        <TestimonialsSection
          projectName={'ERP'}
          design={TestimonialsDesigns.MULTI_CARD_DISPLAY || ''}
          testimonials={testimonials}
          mainText={`What Our Clients Say About ${projectName} `}
        />

        <ContactFormSection
          projectName={'ERP'}
          design={ContactFormDesigns.WITH_IMAGE || ''}
          image={['Contact support team available 24/7']}
          mainText={`Get in Touch with ${projectName} `}
          subTitle={`Reach out to us anytime. Our team is ready to assist you with any inquiries or support you need. Expect a prompt response from ${projectName}.`}
        />
      </main>
      <WebSiteFooter projectName={'ERP'} pages={pages} />
    </div>
  );
}

WebSite.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>;
};
