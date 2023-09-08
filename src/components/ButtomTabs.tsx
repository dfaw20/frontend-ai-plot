import React, { useState } from "react";
import styled from 'styled-components';

const TabsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #FFF;
  color: #0f1419;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  z-index: 1;
`;

const TabItem = styled.div`
  padding: 10px;
  cursor: pointer;
`;

const ContentContainer = styled.div`
  padding: 20px;
  background-color: #f0f0f0;
  height: calc(100vh - 60px); /* 画面下部のタブの高さを除外 */
`;

type TabCode = 'tab1' | 'tab2' | 'tab3'

const BottomTabs = () => {
	const [activeTab, setActiveTab] = useState<TabCode>('tab1'); // 初期のアクティブタブ

	const handleTabClick = (tabCode: TabCode) => {
		setActiveTab(tabCode);
	};

	return (
		<>
			<TabsContainer>
				<TabItem onClick={() => handleTabClick('tab1')} style={{ color: activeTab === 'tab1' ? 'blue' : '#0f1419' }}>
				Tale
				</TabItem>
				<TabItem onClick={() => handleTabClick('tab2')} style={{ color: activeTab === 'tab2' ? 'blue' : '#0f1419' }}>
          History
				</TabItem>
				<TabItem onClick={() => handleTabClick('tab3')} style={{ color: activeTab === 'tab3' ? 'blue' : '#0f1419' }}>
          Characters
				</TabItem>
			</TabsContainer>
			<ContentContainer>
				{activeTab === 'tab1' && <div>Tale</div>}
				{activeTab === 'tab2' && <div>History</div>}
				{activeTab === 'tab3' && <div>Characters</div>}
			</ContentContainer>
		</>
	);
};

export default BottomTabs;

