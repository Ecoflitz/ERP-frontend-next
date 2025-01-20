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
  FaqDesigns,
} from '../../components/WebPageComponents/designs';

import HeroSection from '../../components/WebPageComponents/HeroComponent';

import FaqSection from '../../components/WebPageComponents/FaqComponent';

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

  const faqs = [
    {
      question: 'What industries can benefit from ${projectName}?',
      answer:
        '${projectName} is designed for the manufacturing industry, but its flexible features can be adapted to various sectors, including automotive, electronics, and consumer goods.',
    },
    {
      question: 'How does ${projectName} improve production efficiency?',
      answer:
        '${projectName} streamlines production processes by automating work orders, optimizing resource allocation, and providing real-time analytics to identify bottlenecks and improve workflow.',
    },
    {
      question: 'Is ${projectName} compatible with existing systems?',
      answer:
        'Yes, ${projectName} is designed to integrate seamlessly with your existing systems, ensuring a smooth transition and minimal disruption to your operations.',
    },
    {
      question: 'What kind of support does ${projectName} offer?',
      answer:
        'We provide comprehensive support, including onboarding, training, and ongoing assistance. Our team is available to help you maximize the benefits of ${projectName}.',
    },
    {
      question: 'Can ${projectName} be customized to fit our needs?',
      answer:
        'Absolutely! ${projectName} offers customizable dashboards and features, allowing you to tailor the system to meet your specific operational requirements.',
    },
    {
      question: 'How does ${projectName} handle data security?',
      answer:
        '${projectName} employs robust security measures, including encryption and access controls, to protect your data and ensure compliance with industry standards.',
    },
    {
      question: 'What is the pricing model for ${projectName}?',
      answer:
        '${projectName} offers flexible pricing plans based on the size and needs of your business. Contact us for a personalized quote and to discuss the best plan for you.',
    },
  ];

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>{`Frequently Asked Questions - ${projectName}`}</title>
        <meta
          name='description'
          content={`Find answers to common questions about ${projectName}. Learn more about our ERP solutions and how they can benefit your manufacturing operations.`}
        />
      </Head>
      <WebSiteHeader projectName={'ERP'} pages={pages} />
      <main className={`flex-grow  ${bgColor}    rounded-none  `}>
        <HeroSection
          projectName={'ERP'}
          image={['FAQ section with helpful answers']}
          mainText={`Your Questions Answered with ${projectName}`}
          subTitle={`Explore our comprehensive FAQ section to find answers to your questions about ${projectName}. Learn how our ERP solutions can transform your manufacturing operations.`}
          design={HeroDesigns.IMAGE_RIGHT || ''}
          buttonText={`Explore FAQs`}
        />

        <FaqSection
          projectName={'ERP'}
          design={FaqDesigns.ACCORDION || ''}
          faqs={faqs}
          mainText={`Frequently Asked Questions About ${projectName} `}
        />
      </main>
      <WebSiteFooter projectName={'ERP'} pages={pages} />
    </div>
  );
}

WebSite.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>;
};
