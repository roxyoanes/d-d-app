import React from "react";
import { List } from "react-virtualized";

const listHeight = 600;
const rowHeight = 50;
const rowWidth = 1000;

const ListComponent = ({ result, displayDescription }) => {
  const isRowLoaded = ({index}) => index < result.length;

  const rowRenderer = ({index, key, style}) => {
    let content;

    if (!isRowLoaded({index})) {
      content = 'Loading...';
    } else {
      content = result[index];
    }

    return (
      <div key={key} style={style} className="categories-container">
        <button
            className="category-btn"
            onClick={() => displayDescription(content)}
          >
            {content.name}
          </button>
      </div>
    );
  };

  return (
    <div className="list">
          <List
            width={rowWidth}
            height={listHeight}
            rowHeight={rowHeight}
            rowRenderer={rowRenderer}
            rowCount={result.length}
          />
      </div>
  );
};

export default ListComponent;
