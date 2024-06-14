import React, { useState } from 'react';
import './IconPicker.css';
import * as Icons from 'feather-icons';

const IconPicker = ({ rowsInOnePage, columnsInOnePage, iconHeight, iconWidth, pickerHeight = '500px', pickerWidth = '500px', onSelectIcon }) => {
  const icons = Object.keys(Icons.icons);
  const iconsPerPage = rowsInOnePage * columnsInOnePage;
  const [currentPage, setCurrentPage] = useState(0);

  const handleIconClick = (iconName) => {
    onSelectIcon(iconName);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const startIndex = currentPage * iconsPerPage;
  const endIndex = Math.min(startIndex + iconsPerPage, icons.length);
  const currentIcons = icons.slice(startIndex, endIndex);

  return (
    <div className="icon-picker" style={{ width: pickerWidth, height: pickerHeight }}>
      <div className="icon-grid" style={{ gridTemplateRows: `repeat(${rowsInOnePage}, ${iconHeight}px)`, gridTemplateColumns: `repeat(${columnsInOnePage}, ${iconWidth}px)` }}>
        {currentIcons.map((iconName, index) => (
          <div key={index} className="icon-item" onClick={() => handleIconClick(iconName)} style={{ width: iconWidth, height: iconHeight }}>
            <svg dangerouslySetInnerHTML={{ __html: Icons.icons[iconName].toSvg() }} />
          </div>
        ))}
      </div>
      <div className="pagination">
        {currentPage > 0 && <button onClick={handlePrevPage}>Previous</button>}
        {endIndex < icons.length && <button onClick={handleNextPage}>Next</button>}
      </div>
    </div>
  );
};

export default IconPicker;
