import {Offer} from '../../types/offer.ts';
import {MouseEvent} from 'react';
import {AppRoute, housing} from '../../const.ts';
import {getRatingStarsStyle} from '../../utils/utils.ts';
import {generatePath, Link} from 'react-router-dom';

type CardProps = {
  offer: Offer;
  onMouseOver?: (evt: MouseEvent) => void;
};

export default function Card({offer, onMouseOver}: CardProps): JSX.Element {
  const {previewImage, price, title, type, rating} = offer;
  return (
    <article className='cities__card place-card' onMouseOver={onMouseOver}>
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={generatePath(AppRoute.Offer, {id: offer.id})}>
          <img
            className="place-card__image"
            src={previewImage}
            width={260}
            height={200}
            alt='Place image'
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button
            className="place-card__bookmark-button button"
            type="button"
          >
            <svg
              className="place-card__bookmark-icon"
              width={18}
              height={19}
            >
              <use xlinkHref="#icon-bookmark"/>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: getRatingStarsStyle(rating)}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={generatePath(AppRoute.Offer, {id: offer.id})}>{title}</Link>
        </h2>
        <p className="place-card__type">{housing[type]}</p>
      </div>
    </article>
  );
}

