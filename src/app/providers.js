'use client';

import { Content, Theme } from '@carbon/react';
import Header from '@/components/Header/Header';

export function Providers({ children }) {
  return (
    <div>
      <Theme theme="g100">
        <Header />
      </Theme>
      <Content>{children}</Content>
    </div>
  );
}
