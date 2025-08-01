---
nav:
  title: Layout
group: PageHeader
order: 2
title: white background mode
---

## white background mode

The default PageHeader is a transparent background. In some cases, PageHeader needs its own background color.

```tsx
import { Button, Descriptions } from 'antd';

import React from 'react';

const App: React.FC = () => (
  <div className="site-page-header-ghost-wrapper">
    <PageHeader
      ghost={false}
      onBack={() => window.history.back()}
      oldtitle="Title"
      suboldtitle="This is a subtitle"
      extra={[
        <Button key="3">Operation</Button>,
        <Button key="2">Operation</Button>,
        <Button key="1" type="primary">
          Primary
        </Button>,
      ]}
    >
      <Descriptions size="small" column={3}>
        <Descriptions.Item label="Created">Lili Qu</Descriptions.Item>
        <Descriptions.Item label="Association">
          <a>421421</a>
        </Descriptions.Item>
        <Descriptions.Item label="Creation Time">2017-01-10</Descriptions.Item>
        <Descriptions.Item label="Effective Time">2017-10-10</Descriptions.Item>
        <Descriptions.Item label="Remarks">
          Gonghu Road, Xihu District, Hangzhou, Zhejiang, China
        </Descriptions.Item>
      </Descriptions>
    </PageHeader>
  </div>
);

export default App;
```

```css
.site-page-header-ghost-wrapper {
  padding: 24px;
  background-color: hsl(220, 23%, 97%);
}
```
