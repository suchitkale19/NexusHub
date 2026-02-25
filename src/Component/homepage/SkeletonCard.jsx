import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
function SkeletonCard() {
  return (
    <SkeletonTheme baseColor="#040409" highlightColor="#3f404c">
      <div className="h-fit w-64  rounded-2xl text-text">
        <Skeleton height={310} borderRadius={18} />
        <div className=" px-2 py-1 ">
          <Skeleton height={25} />
          <div className="flex w-full justify-between text-lg text-lightText">
            <Skeleton height={20} width={50} />
            <Skeleton height={20} width={50} />
            <Skeleton height={20} width={50} />
          </div>
        </div>
      </div>
    </SkeletonTheme>
  );
}

export default SkeletonCard;
