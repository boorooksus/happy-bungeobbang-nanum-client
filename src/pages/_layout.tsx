import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
  return (
    <div>
      {/* 비동기 로딩 상태를 처리 */}
      {/* fallback 속성 : 로딩 중에 표시될 컴포넌트를 지정 */}
      <Suspense fallback={'loading...'}>
        {/* 중첩된 라우트를 렌더링하는 위치 */}
        {/* 현재 URL에 맞는 하위 라우트 컴포넌트가 이 위치에 렌더링됨 */}
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
