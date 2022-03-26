import React from 'react';

import * as s from './Layout.styled';

export default function Layout({ children }: any) {
  return (
    <s.LayoutContainer>
      <s.SidebarMock/>
      <s.ViewContainer>
          {children}
      </s.ViewContainer>
      {/*<s.SystemIconColumn/>*/}
    </s.LayoutContainer>
  );
}
