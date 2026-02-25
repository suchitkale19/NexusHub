import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
function SkeletonMovieCard() {
  return (
    <SkeletonTheme baseColor="#040409" highlightColor="#3f404c">
      <div className="h-130 w-full bg-[url(/src/assets/sliderbg.png)] bg-cover bg-center rounded-2xl ">
        <div className="h-full w-full rounded-2xl px-22  flex items-center justify-between bg-linear-to-t from-background via-transparent via-90% to-background text-text text-5xl">
          <div className="w-1/2 grid gap-4 ">
            <Skeleton height={80} width="50%" />
            <div className="flex justify-between ">
              <Skeleton height={20} width={200} />
              <Skeleton height={20} width={200} />
              <Skeleton height={20} width={200} />
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
          </div>
          <Skeleton height={350} width={300} borderRadius={12} />
        </div>
      </div>
    </SkeletonTheme>
  );
}

export default SkeletonMovieCard;

// import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";

// function SkeletonMovieCard() {
//   return (
//     <SkeletonTheme baseColor="#202020" highlightColor="#444">
//       <div className="h-[520px] w-full bg-[url(/src/assets/sliderbg.png)] bg-cover bg-center rounded-2xl">

//         <div className="h-full w-full rounded-2xl flex items-center justify-between px-20
//         bg-gradient-to-t from-background via-transparent via-90% to-background">

//           {/* Left Content */}
//           <div className="w-1/2 space-y-4">

//             {/* Title */}
//             <Skeleton height={50} width="70%" />

//             {/* Subtitle */}
//             <Skeleton height={25} width="40%" />

//             {/* Description */}
//             <Skeleton count={3} height={18} />

//             {/* Buttons */}
//             <div className="flex gap-4 mt-6">
//               <Skeleton height={45} width={150} borderRadius={8} />
//               <Skeleton height={45} width={150} borderRadius={8} />
//             </div>

//           </div>

//           {/* Poster */}
//           <Skeleton height={350} width={250} borderRadius={12} />

//         </div>
//       </div>
//     </SkeletonTheme>
//   );
// }

// export default SkeletonMovieCard;
