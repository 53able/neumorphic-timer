'use client';

import './globals.css';
import { useEffect } from 'react';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    document.documentElement.classList.add('dark'); // 常にダークモードを適用
  }, []);

  return (
    <html lang="ja">
      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
