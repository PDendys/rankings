import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box, H1, Button, Icon } from '@northlight/ui';
import { ChevronLeftSolid } from '@northlight/icons';
import type { RouteKeysType } from '@/types';

type PageHeaderProps = {
  title: string;
  backLink?: RouteKeysType;
}

const PageHeader = ({ title, backLink }: PageHeaderProps) => {
  return (
    <Box as="header" mb={5}>
      <Box mb={1}>
        <H1>{title}</H1>
      </Box>
      {
        backLink && (
          <NavLink to={backLink}>
            <Button variant="link" size="sm" leftIcon={<Icon as={ChevronLeftSolid} />}>
              Back
            </Button>
          </NavLink>
        )
      }
      </Box>
  )
}

export default PageHeader;