import React from 'react'

export default function Button(props) {
  const { text, dark, full } = props;

  return (
    <button className={"rounded-full overflow-hidden duration-200 hover:opacity-60 border-2 border-solid border-blue-500  " + (dark ? "text-white bg-blue-600 " : " text-blue-500 ") + 
      (full ? " grid place-items-center w-full" : " ")
      }>
      <p className={"px-6 sm:px-10 whitespace-nowrap py-2 sm:py-3 "}>
        {text}
      </p>
    </button>
  )
}
