import React from 'react';
import {Head} from './head';
import {MainList} from './mainList';
import {Page} from './page';

import '../auction.less';

export default () => {
  return (
    <div className="main">
      <Head activityName="竞拍"/>
      <MainList />
      <Page />
    </div>
  )
}