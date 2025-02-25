import React, { PropsWithChildren } from 'react';
import PageHeader from '@/components/page-header';
import { RouteKeysType } from '@/types';

type PageLayoutProps = PropsWithChildren<{
  title: string;
  backLink?: RouteKeysType;
}>;

const PageLayout = ({ children, title, backLink }: PageLayoutProps) => (
  <>
    <PageHeader title={title} backLink={backLink} />
    <main>
      {children}
    </main>
  </>
);

export default PageLayout;
