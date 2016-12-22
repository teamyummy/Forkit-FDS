import React from 'react';
import { Link } from 'react-router';
import LikeButton from '../Restaurant/LikeButton';

const RestaurantItem = ({restaurant, idx, children}) => (
  <div className="restaurants row">
    <div className="photo-d cell-d-1-3 m-hidden">
      {/*<span className="item-num">{idx + 1}</span>*/}
      <div className="photo-carousel">
        <img src={restaurant.images[0].img_s} alt={restaurant.images[0].alt} />
      </div>
       {/*
      <div>
        <button type="button">prev</button>
        <button type="button">next</button>
      </div>
      <div>
        <span>1</span>/<span>10</span>
      </div>
      */}
    </div>
    <div className="desc-d cell-d-1-3 m-hidden">
      <em><Link to={`restaurants/${restaurant.id}`}>{restaurant.name}</Link></em>
      <p><Link to={`restaurants/${restaurant.id}`}>{restaurant.description}</Link></p>
      <ul>
        <li>
          <p>평점</p>
          <em>{   restaurant.review_average.toString().indexOf('.') > -1 
                ? parseFloat(restaurant.review_average).toFixed(1) 
                : restaurant.review_average}</em>
        </li>
        <li>
          <p>리뷰</p>
          <em>{   restaurant.review_count.toString().indexOf('.') > -1 
                ? parseFloat(restaurant.review_count).toFixed(1) 
                : restaurant.review_count}</em>
        </li>
        <li>
          <p>좋아요</p>
          <em>{   restaurant.total_like.toString().indexOf('.') > -1 
                ? parseFloat(restaurant.total_like).toFixed(1) 
                : restaurant.total_like}</em>
        </li>
      </ul>
      <LikeButton className='button' mylike={restaurant.my_like} toggleLike={null} />
    </div>
    <div className="photo-m cell-m-1-1 d-hidden">
      {/*<span className="item-num">{idx + 1}</span>*/}
      <div className="photo-carousel">
        <img src={restaurant.images[0].img_s} alt={restaurant.images[0].alt} />
      </div>
       {/*
      <div>
        <button type="button">prev</button>
        <button type="button">next</button>
      </div>
      <div>
        <span>1</span>/<span>10</span>
      </div>
      */}
      <ul>
        <li>
          <p>평점</p>
          <em>{   restaurant.review_average.toString().indexOf('.') > -1 
                ? parseFloat(restaurant.review_average).toFixed(1) 
                : restaurant.review_average}</em>
        </li>
        <li>
          <p>리뷰</p>
          <em>{   restaurant.review_count.toString().indexOf('.') > -1 
                ? parseFloat(restaurant.review_count).toFixed(1) 
                : restaurant.review_count}</em>
        </li>
        <li>
          <p>좋아요</p>
          <em>{   restaurant.total_like.toString().indexOf('.') > -1 
                ? parseFloat(restaurant.total_like).toFixed(1) 
                : restaurant.total_like}</em>
        </li>
      </ul>
    </div>
    <div className="desc-m cell-m-1-1 d-hidden">
      <em><Link to={`restaurants/${restaurant.id}`}>{restaurant.name}</Link></em>
      <p><Link to={`restaurants/${restaurant.id}`}>{restaurant.description}</Link></p>
      <LikeButton className='button' mylike={restaurant.my_like} toggleLike={null} />
    </div>
    <div className="tag-list cell-d-1-3 cell-m-1-1">
      <dl>
        <dt><i className="fa fa-tags" aria-label="태그"></i></dt>
        <dd>{restaurant.tags.map(tag => tag.name).join(', ')}</dd><br/>
        <dt><i className="fa fa-clock-o" aria-label="영업시간"></i></dt>
        <dd>{restaurant.operation_hour}</dd><br/>
        <dt><i className="fa fa-map-marker" aria-label="주소"></i></dt>
        <dd>{restaurant.address}</dd><br/>
        <dt><i className="fa fa-car" aria-label="주차"></i></dt>
        <dd>{restaurant.desc_parking}</dd><br/>
        <dt><i className="fa fa-phone" aria-label="연락처"></i></dt>
        <dd>{restaurant.phone}</dd><br/>
      </dl>
    </div>
  </div>
);

export default RestaurantItem;