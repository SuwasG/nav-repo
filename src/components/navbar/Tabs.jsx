import React, { useState } from 'react';

const Tabs= () => {
  const [activeTab, setActiveTab] = useState('html');

  const tabData = [
    { id: 'html', label: 'HTML', content: 'HTML content goes here.The Hyper Text Markup Language is very easy to learn and understand for beginners as well.' },
    { id: 'css', label: 'CSS', content: 'CSS content goes here. The Cascading Style Sheets is slightly difficult to understand at the beginning but later, it will be easy to learn and understand.' },
    { id: 'js', label: 'JS', content: 'JS content goes here. The JavaScript is the brain of the Web Development. JavaScript is also call EcmaScript of ES nowdays. It is the main programming language of the Web Development.' },
    { id: 'react', label: 'React', content: 'React content goes here. The React framework is developed by Meta company and it is very useful framework for Front-end developer as it makes most of the web development activities reactive.' },
  ];

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="p-4">
      <div className="flex border-b">
        {tabData.map((tab) => (
          <div
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={`cursor-pointer p-4 ${
              activeTab === tab.id ? 'border-b-2 border-blue-500' : ''
            }`}
          >
            {tab.label}
          </div>
        ))}
      </div>
      <div className="mt-4 justify-center bg-blue-500 text-yellow-300 sm:w-1/2">{tabData.find((tab) => tab.id === activeTab)?.content}</div>
    </div>
  );
};


export default Tabs;