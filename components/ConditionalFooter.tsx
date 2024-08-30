'use client';

import { usePathname } from 'next/navigation';
import Footer from './Footer';

export default function ConditionalFooter() {
  const pathname = usePathname();
  const isNowPage = pathname === '/now';

  if (isNowPage) {
    return null;
  }

  return <Footer />;
}
