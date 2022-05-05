import React from 'react';
import { AiOutlineStar } from 'react-icons/ai';
import FilledStarRating from './FilledStarRating';
import '../styles/Unfilled.css';

interface data {
  count: number;
  rating: number;
}

interface Props {
  data: Array<data>;
  starStyle: string;
  progressFilledColor?: string;
  progressUnfilledColor?: string;
  ratingIconClassname?: any;
}

const StarRating = (props: Props) => {
  const {
    data,
    starStyle,
    progressFilledColor,
    progressUnfilledColor,
    ratingIconClassname
  } = props;
  return (
    <>
      {
        <div className="unfilled">
          {data.map(star => (
            <AiOutlineStar
              className={ratingIconClassname ? ratingIconClassname : 'star'}
              style={{
                color: progressUnfilledColor ? progressUnfilledColor : '#ebcf31'
              }}
            />
          ))}
          <FilledStarRating
            data={data}
            starStyle={starStyle}
            progressFilledColor={progressFilledColor}
            ratingIconClassname={ratingIconClassname}
          />
        </div>
      }
    </>
  );
};

export default StarRating;
