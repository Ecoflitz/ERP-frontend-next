import React from 'react';

type Props = {
  className?: string;
};

export default function Logo({ className = '' }: Props) {
  return (
    <img
      src={'https://ecoflitz.com/logo.svg'}
      className={className}
      alt={'ecoflitz logo'}
    ></img>
  );
}
