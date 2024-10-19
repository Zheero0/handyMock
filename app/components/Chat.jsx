"use client"; 

import Link from "next/link";
import conversations from "../utils/conversations";
import { useRouter } from "next/navigation";
import { FiArrowLeft } from "react-icons/fi";

export default function Chat() {
  const router = useRouter();

  return (
    <div className="p-8 pb-2   w-full rounded-[1rem] grid grid-cols-[auto_1fr] gap-10 ">
      <div>
              <button
        onClick={() => {
          router.back();
        }}
      >
        <FiArrowLeft
          className="text-blue-600 duration-[0.5s] hover:scale-125"
          size={30}
        />
      </button>
      </div>
      <div>

         <h1 className="text-2xl mb-4 font-bold text-blue-600">Conversations</h1>
      <ul className=" p-2">
        {conversations.map((conversation, index) => {
          const lastMessage =
            conversation.messages[conversation.messages.length - 1];

          return (
            <div key={index} className="grid grid-cols[auto_3fr]">
              <li className="mb-2 py-2 px-2 pl-6 rounded-full bg-blue-100 duration-200 hover:scale-105">
                <Link href={`/chat/${conversation.id}`} className="p-0 m-0 ">
                  <h3 className="font-bold text-xl py-2 pt-1 text-blue-600">
                    {conversation.participants[1]}
                  </h3>
                  <p className="text-gray-500">
                    {lastMessage ? lastMessage.text : "No messages yet"}
                  </p>
                </Link>
              </li>
            </div>
          );
        })}
      </ul>
    </div>

    </div>
  );
}





// "use client"; // Indicates this component can use client-side features

// import Link from "next/link";
// import conversations from "../utils/conversations";
// import { useRouter } from "next/navigation";
// import { FiArrowLeft } from "react-icons/fi";
// import { useState } from "react";

// export default function Chat() {
//   const router = useRouter();
//   const [convoToggle, setConvoToggle] = useState(false);

//   let children = <div>lol div</div>;

//   if (convoToggle) {
//     children = <div>kmn div</div>;
//   }

//   return (
//     <div className="p-8 pb-2   w-full rounded-[1rem] grid grid-cols-[auto_1fr_auto] gap-10 ">
//       <div>
//         <button
//           onClick={() => {
//             router.back();
//           }}
//         >
//           <FiArrowLeft
//             className="text-blue-600 duration-[0.5s] hover:scale-125"
//             size={30}
//           />
//         </button>
//       </div>
//       <div>
//         <h1 className="text-2xl mb-4 font-bold text-blue-600">Conversations</h1>
//         <ul className=" p-2">
//           {conversations.map((conversation, index) => {
//             const lastMessage =
//               conversation.messages[conversation.messages.length - 1];

//             return (
//               <div key={index} className="grid grid-cols[auto_3fr]">
//                 <li className="mb-2 py-1 px-2 pl-5 rounded-full bg-blue-100 duration-200 hover:scale-105">
//                   <button
//                     href={`/chat/${conversation.id}`}
//                     className="p-0 m-0 "
//                   >
//                     <h3 className="font-bold text-left text-xl py-2 pt-1 text-blue-600">
//                       {conversation.participants[1]}
//                     </h3>
//                     <p className="text-gray-500">
//                       {lastMessage ? lastMessage.text : "No messages yet"}
//                     </p>
//                   </button>
//                 </li>
//               </div>
//             );
//           })}
//         </ul>
//       </div>
//       <div> {children}</div>
//     </div>
//   );
// }