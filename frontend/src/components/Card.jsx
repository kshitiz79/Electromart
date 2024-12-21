import React from 'react'
import { Link } from "react-router-dom"

const Card = ({ card }) => { 

  return (
    <Link to="/singleProduct" >
      <div className="flex flex-col min-w-[240px]   w-[270px]">
      <div className="flex overflow-hidden gap-1 items-start px-3 pt-3 hover:bg-slate-500 pb-12 max-w-full rounded bg-neutral-100 w-[270px]">
        <div className="flex flex-col text-xs whitespace-nowrap text-neutral-50">
          <div className="gap-2.5 self-start px-3 py-1 bg-red-500 rounded">
            -{card.discount}%
          </div>
          <img
            loading="lazy"
            src={card.image}
            alt={card.name}
            className="object-contain self-end mt-3 max-w-full aspect-[1.13] w-[172px]"
          />
        </div>
        <div className="flex flex-col">
          <img
            loading="lazy"
            src="/image/FillHeart.png"
            alt=""
            className="object-contain aspect-square w-[34px]"
          />
          <img
            loading="lazy"
            src="/image/FillEye.png"
            alt=""
            className="object-contain mt-2 aspect-square w-[34px]"
          />
        </div>
      </div>
      <div className="flex flex-col items-start self-start mt-4 text-base font-medium">
        <div className="self-stretch text-black">{card.name}</div>
        <div className="flex gap-3 items-start mt-2 whitespace-nowrap">
          <div className="text-red-500">${card.currentPrice}</div>
          <div className="text-black line-through opacity-50">${card.originalPrice}</div>
        </div>
        <div className="flex gap-2 items-start mt-2 text-sm font-semibold text-black whitespace-nowrap">
          <img
            loading="lazy"
            src="/image/Fivestar.png"
            alt={`${card.rating} star rating`}
            className="object-contain shrink-0 aspect-[5] w-[100px]"
          />
          <div className="w-8 opacity-50">({card.reviews})</div>
        </div>
      </div>
    </div>
    </Link>
  );
}

export default Card