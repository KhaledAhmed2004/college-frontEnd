// // import Image from "next/image";
// // import React from "react";
// // import img1 from "../assets/man.jpg";
// // import img2 from "../assets/man2.jpg";
// // import img3 from "../assets/man3.jpg";

// // const SideBarSection = () => {
// //   // Data array for the sidebar items
// //   const sidebarData = [
// //     {
// //       image: img1,
// //       title: "মাননীয় শিক্ষা উপদেষ্টা",
// //       name: "ওয়াহিদউদ্দিন মাহমুদ",
// //       subtitle: "শিক্ষামন্ত্রনালয়, গণপ্রজাতন্ত্রী বাংলাদেশ সরকার",
// //     },
// //     {
// //       image: img2,
// //       title: "মাননীয় প্রদান উপদেষ্টা",
// //       name: "ডাক্তার মোহাম্মদ ইউনুস",
// //       subtitle: "গণপ্রজাতন্ত্রী বাংলাদেশ সরকার",
// //     },
// //     {
// //       image: img3,
// //       title: "সম্মানিত অধ্যক্ষ",
// //       name: "সিদ্দিক জোবায়ের",
// //       subtitle: "অধ্যক্ষ, রাজবাড়ী সরকারি কলেজ, রাজবাড়ী",
// //     },
// //   ];
// //   return (
// //     <div className="flex flex-col gap-4 my-4">
// //       {sidebarData.map((item, index) => (
// //         <div
// //           key={index}
// //           className="max-w-[300px] mx-auto bg-white shadow-md rounded-lg overflow-hidden"
// //         >
// //           {/* Header */}
// //           <div className="bg-gray-100 text-center py-2">
// //             <h2 className="text-sm font-semibold text-gray-700">
// //               {item.title}
// //             </h2>
// //           </div>

// //           {/* Image Section */}

// //           <div className="relative w-full h-60 mb-2">
// //             <Image
// //               src={item.image}
// //               alt={item.name}
// //               layout="fill"
// //               objectFit="cover"
// //             />
// //           </div>

// //           {/* Content Section */}
// //           <div className="text-center px-2 pb-4">
// //             <h3 className="text-base font-bold text-gray-800">{item.name}</h3>
// //             <p className="text-gray-600 text-xs mt-2">{item.subtitle}</p>
// //           </div>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // export default SideBarSection;

// import Image from "next/image";
// import React from "react";
// import img1 from "../assets/man.jpg";
// import img2 from "../assets/man2.jpg";
// import img3 from "../assets/man3.jpg";

// const SideBarSection = () => {
//   // Data array for the sidebar items
//   const sidebarData = [
//     {
//       image: img1,
//       title: "মাননীয় শিক্ষা উপদেষ্টা",
//       name: "ওয়াহিদউদ্দিন মাহমুদ",
//       subtitle: "শিক্ষামন্ত্রনালয়, গণপ্রজাতন্ত্রী বাংলাদেশ সরকার",
//     },
//     {
//       image: img2,
//       title: "মাননীয় প্রদান উপদেষ্টা",
//       name: "ডাক্তার মোহাম্মদ ইউনুস",
//       subtitle: "গণপ্রজাতন্ত্রী বাংলাদেশ সরকার",
//     },
//     {
//       image: img3,
//       title: "সম্মানিত অধ্যক্ষ",
//       name: "সিদ্দিক জোবায়ের",
//       subtitle: "অধ্যক্ষ, রাজবাড়ী সরকারি কলেজ, রাজবাড়ী",
//     },
//   ];

//   return (
//     <div className="flex flex-col gap-4 my-4 md:max-w-xs lg:max-w-sm xl:max-w-md mx-auto">
//       {sidebarData.map((item, index) => (
//         <div
//           key={index}
//           className="w-full bg-white shadow-md rounded-lg overflow-hidden"
//         >
//           {/* Header */}
//           <div className="bg-gray-100 text-center py-2">
//             <h2 className="text-sm font-semibold text-gray-700">
//               {item.title}
//             </h2>
//           </div>

//           {/* Image Section */}
//           <div className="relative w-full h-60 mb-2">
//             <Image
//               src={item.image}
//               alt={item.name}
//               layout="fill"
//               objectFit="cover"
//             />
//           </div>

//           {/* Content Section */}
//           <div className="text-center px-2 pb-4">
//             <h3 className="text-base font-bold text-gray-800">{item.name}</h3>
//             <p className="text-gray-600 text-xs mt-2">{item.subtitle}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default SideBarSection;

import Image from "next/image";
import React from "react";
import img1 from "../assets/man.jpg";
import img2 from "../assets/man2.jpg";
import img3 from "../assets/man3.jpg";

const SideBarSection = () => {
  // Sidebar data array
  const sidebarData = [
    {
      image: img1,
      title: "মাননীয় শিক্ষা উপদেষ্টা",
      name: "ওয়াহিদউদ্দিন মাহমুদ",
      subtitle: "শিক্ষামন্ত্রনালয়, গণপ্রজাতন্ত্রী বাংলাদেশ সরকার",
    },
    {
      image: img2,
      title: "মাননীয় প্রদান উপদেষ্টা",
      name: "ডাক্তার মোহাম্মদ ইউনুস",
      subtitle: "গণপ্রজাতন্ত্রী বাংলাদেশ সরকার",
    },
    {
      image: img3,
      title: "সম্মানিত অধ্যক্ষ",
      name: "সিদ্দিক জোবায়ের",
      subtitle: "অধ্যক্ষ, রাজবাড়ী সরকারি কলেজ, রাজবাড়ী",
    },
  ];

  return (
    <div className="flex flex-col gap-6 my-6 px-4 md:px-0">
      {sidebarData.map((item, index) => (
        <article
          key={index}
          className="bg-white shadow-lg rounded-lg overflow-hidden"
        >
          {/* Header */}
          <header className="bg-gray-100 text-center py-3">
            <h2 className="text-sm font-semibold text-gray-700">
              {item.title}
            </h2>
          </header>

          {/* Image Section */}
          <div className="relative w-full h-64">
            <Image
              src={item.image}
              alt={`Image of ${item.name}`}
              layout="fill"
              objectFit="cover"
            />
          </div>

          {/* Content Section */}
          <div className="text-center px-4 py-4">
            <h3 className="text-lg font-bold text-gray-800">{item.name}</h3>
            <p className="text-gray-600 text-sm mt-2">{item.subtitle}</p>
          </div>
        </article>
      ))}
    </div>
  );
};

export default SideBarSection;
