import React from 'react';
import AlbumList from './components/AlbumList';

AlbumFeature.propTypes = {};

function AlbumFeature(props) {
  const albumList = [
    {
      id: 1,
      title: 'top 100 Âu Mỹ',
      thumbnail:
        'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/e/9/f/6/e9f6c74d1651a3dcf0be456822f1eefd.jpg',
    },
    {
      id: 2,
      title: 'top 100 nhạc trẻ',
      thumbnail:
        'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/b/f/b/f/bfbfbdb38f8ad75d575228b2d72e4246.jpg',
    },
    {
      id: 3,
      title: 'top 1000 rap Việt',
      thumbnail:
        'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/1/8/8/e/188e45098127c7f75cc4b715bf01bcd6.jpg',
    },
  ];

  return (
    <div>
      <h2>Album Feauture</h2>
      <AlbumList albumList={albumList} />
    </div>
  );
}

export default AlbumFeature;
