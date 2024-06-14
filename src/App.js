import React, { useState } from 'react';
import IconPicker from './components/IconPicker';
import * as Icons from 'feather-icons';
import './App.css';

const App = () => {
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [showPicker, setShowPicker] = useState(false);

  const handleIconClick = () => {
    setShowPicker(true);
  };

  const handleSelectIcon = (iconName) => {
    setSelectedIcon(iconName);
    setShowPicker(false);
  };

  return (
    <div className="app">
      <div className="icon-display" onClick={handleIconClick}>
        {selectedIcon ? <svg dangerouslySetInnerHTML={{ __html: Icons.icons[selectedIcon].toSvg() }} /> : 'Click to select an icon'}
      </div>
      {showPicker && (
        <IconPicker
          rowsInOnePage={4}
          columnsInOnePage={4}
          iconHeight={50}
          iconWidth={50}
          pickerHeight="400px"
          pickerWidth="400px"
          onSelectIcon={handleSelectIcon}
        />
      )}
    </div>
  );
};

export default App;
