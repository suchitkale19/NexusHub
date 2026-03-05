import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function SkeletonDetailPage() {
  return (
    <SkeletonTheme baseColor="#040409" highlightColor="#3f404c">
      <div className="bg-background">
        <div className=" flex gap-20 text-text px-44 py-10">
          <div className="">
            <Skeleton height={444} width={350} borderRadius={20} />
          </div>
          <div className="flex flex-col gap-4 w-3/4">
            <div className="flex  justify-between items-center">
              <div className="grid gap-4">
                <Skeleton width={500} height={50} />
                <div className="flex justify-between ">
                  <Skeleton height={20} width={100} />
                  <Skeleton height={20} width={100} />
                  <Skeleton height={20} width={100} />
                </div>
              </div>
              <div>
                <Skeleton height={40} width={100} />
              </div>
            </div>

            <div className="grid m-0 p-0 gap-0">
              <Skeleton height={20} />
              <Skeleton height={20} width="90%" />
              <Skeleton height={20} width="80%" />
            </div>
            <div className="flex flex-0.5 gap-6">
              <Skeleton height={40} width={200} />
              <Skeleton height={40} width={200} />
            </div>
            <div className="flex gap-4">
              <Skeleton height={40} width={150} />
              <Skeleton height={40} width={150} />
              <Skeleton height={40} width={150} />
            </div>
            <div className=" flex text-text justify-between border-y border-border py-4">
              <Skeleton height={80} width={200} />
              <Skeleton height={80} width={200} />
              <Skeleton height={80} width={200} />
              <Skeleton height={80} width={200} />
            </div>
          </div>
        </div>
      </div>
    </SkeletonTheme>
  );
}

export default SkeletonDetailPage;
