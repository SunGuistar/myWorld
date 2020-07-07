import React from 'react';
import {Head} from './head';
import {MainList} from './mainList';
import {Page} from './page';
import {listData} from '../data';
import {ListContext} from './index';

import '../auction.less';

export default () => {
  return (
    <ListContext.Provider value={listData}>
      <div className="main">
        <Head activityName="竞拍"/>
        <MainList />
        <Page />
      </div>
    </ListContext.Provider>
  )
}