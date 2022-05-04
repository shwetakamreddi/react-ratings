import React from 'react';
import UnfilledStartRating from './UnfilledStartRating';

interface data {
  count: number;
  rating: number;
}

interface Props {
  data: Array<data>;
  starStyle: string;
  showRatingHeader: boolean;
  progressFilledColor: string;
  progressUnfilledColor: string;
  ratingIconClassname?: any;
}

function StarRating(props: Props) {
  const {
    data,
    starStyle,
    showRatingHeader,
    progressFilledColor,
    progressUnfilledColor,
    ratingIconClassname,
  } = props;
  return (
    <>
      {showRatingHeader && (
        <div>
          <UnfilledStartRating
            data={data}
            starStyle={starStyle}
            progressFilledColor={progressFilledColor}
            progressUnfilledColor={progressUnfilledColor}
            ratingIconClassname={ratingIconClassname}
          />
        </div>
      )}
    </>
  );
}

export default StarRating;
