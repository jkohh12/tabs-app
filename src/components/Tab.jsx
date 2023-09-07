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
                        className = {index === activeTab ? 'active' : ''}
                        onClick={() => handleTabClick(index)}    
                    >
                        {tab.label}
                    </li>
                ))}
            </u1>
            <div>
                    {tabData[activeTab].content}
            </div>
        </div>
    );
};

export default Tab