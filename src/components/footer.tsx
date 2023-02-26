import React from 'react';

interface FooterProps {
  author: string;
  twitter: string;
}

const Footer: React.FC<FooterProps> = ({ author, twitter }) => {
  return (
    <footer className="absolute bottom-0 py-8">
      <p className="text-center text-gray-500 text-sm">
        Made with ❤️ by{' '}
        <a href={`https://twitter.com/${twitter}`} className="text-blue-500">
          {author}
        </a>
      </p>
    </footer>
  );
};

export default Footer;
