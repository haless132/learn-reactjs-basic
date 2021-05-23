import React from 'react';
import PropTypes from 'prop-types';

AlbumItem.propTypes = {
  album: PropTypes.object,
};

function AlbumItem({ album = {} }) {
  return (
    <div>
      <h2>{album.title}</h2>
      <img src={album.thumbnail} alt="thumbnail" />
    </div>
  );
}

export default AlbumItem;
