import React, { PropsWithChildren } from 'react';
import { Container } from '@northlight/ui'

type AppLayoutProps = PropsWithChildren;

const AppLayout = ({ children }: AppLayoutProps) => (
  <Container maxW="6xl" padding="4">
    {children}
  </Container>
);

export default AppLayout;
