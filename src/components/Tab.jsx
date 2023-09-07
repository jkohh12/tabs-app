import React, { useState } from 'react'

const Tab = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabData = [
        { label: "Tab 1", content: 'Content for Tab 1' },
        { label: 'Tab 2', content: 'Content for Tab 2' },
        { label: 'Tab 3', content: 'Content for Tab 3' },
    ];

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
        <div>
            <u1 className = "tabs">
                {tabData.map((tab, index) => (
                    <li
                        key = {index}
                        onClick={() => handleTabClick(index)}    
                        className = {index == activeTab ? 'active' : ''} //used for styling the tab when its active. ".tabs li.active", if its active it styles according to that
                        
                    >
                        {tab.label}
                    </li>
                ))}
            </u1>
            <div className = "tab-content">
                    {tabData[activeTab].content}
            </div>
        </div>
    );
};

export default Tab