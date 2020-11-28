import React, { FC, ReactNode } from 'react';
import { ContentWrapper } from '@test-project/ui';

import HeaderBar from './HeaderBar';

interface PageProps {
  children: ReactNode;
  title?: string;
}

/**
 * Layout of a page.
 */
const Page: FC<PageProps> = ({ children, title }) => (
  <>
    <HeaderBar title={title} />
    <ContentWrapper fullWidth>{children}</ContentWrapper>
  </>
);

export default Page;
