import React from 'react';

interface FooterProps {
  author: string;
  twitter: string;
}

const Footer: React.FC<FooterProps> = ({ author, twitter }) => {
  return (
    <footer className="absolute bottom-0 py-8">
      <p className="text-center text-zinc-300 text-sm sm:text-base">
        Made with 🤍 by{' '}
        <a href={`https://twitter.com/${twitter}`} className="text-blue-400 hover:underline underline-offset-2">
          {author}
        </a>
      </p>
    </footer>
  );
};

export default Footer;
