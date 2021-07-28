import React from "react";
import { BiLike } from "react-icons/bi";
import { useSelector } from "react-redux";

const LikeButton = ({ isLike, handleLike, handleUnLike }) => {
  const { theme } = useSelector((state) => state);
  return (
    <div>
      {isLike ? (
        <div>
          <BiLike
            //style={{ filter: theme ? "invert(1)" : "invert(0)" }}
            className="icony text-liky "
            onClick={handleUnLike}
          />
          좋아요
        </div>
      ) : (
        <div>
          <BiLike className="icony" onClick={handleLike} />
          좋아요
        </div>
      )}
    </div>
  );
};
export default LikeButton;