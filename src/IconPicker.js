import React, { useState } from 'react';
import './styles.css';

const IconPicker = ({
  rowsInOnePage,
  columnsInOnePage,
  iconHeight,
  iconWidth,
  pickerHeight = 500,
  pickerWidth = 500,
  onIconSelect,
}) => {
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const icons = [
    // All Feather icons
    // ...
  ];
  const iconsPerPage = rowsInOnePage * columnsInOnePage;
  const totalPages = Math.ceil(icons.length / iconsPerPage);
  const startIconIndex = (currentPage - 1) * iconsPerPage;
  const endIconIndex = Math.min(startIconIndex + iconsPerPage, icons.length);
  const iconsToDisplay = icons.slice(startIconIndex, endIconIndex);

  const handleIconClick = (icon) => {
    setSelectedIcon(icon);
    onIconSelect(icon);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div
      className="icon-picker"
      style={{ height: pickerHeight, width: pickerWidth }}
    >
      <div className="icon-grid">
        {iconsToDisplay.map((icon, index) => (
          <div
            key={index}
            className="icon-item"
            style={{ height: iconHeight, width: iconWidth }}
            onClick={() => handleIconClick(icon)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={iconWidth}
              height={iconHeight}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={selectedIcon === icon ? 'selected' : ''}
            >
              <path d={icon.path} />
            </svg>
          </div>
        ))}
      </div>
      <div className="pagination">
        {currentPage > 1 && (
          <button onClick={() => handlePageChange(currentPage - 1)}>
            Previous
          </button>
        )}
        {currentPage < totalPages && (
          <button onClick={() => handlePageChange(currentPage + 1)}>
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default IconPicker;
