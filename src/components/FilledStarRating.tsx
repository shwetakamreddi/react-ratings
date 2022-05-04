import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import '../styles/filled.css';

interface data {
  count: number;
  rating: number;
}

interface Props {
  data: Array<data>;
  starStyle: string;
  progressFilledColor?: string;
  ratingIconClassname?: any;
}

function FilledStarRating(props: Props) {
  const { data, starStyle, progressFilledColor, ratingIconClassname } = props;
  return (
    <>
      {
        <div className="filled" style={{ width: starStyle }}>
          {data.map((star: data) => (
            <span>
              <AiFillStar
                className={ratingIconClassname ? ratingIconClassname : 'star'}
                style={{
                  color: progressFilledColor ? progressFilledColor : '#ebcf31',
                }}
              />
            </span>
          ))}
        </div>
      }
    </>
  );
}

export default FilledStarRating;
