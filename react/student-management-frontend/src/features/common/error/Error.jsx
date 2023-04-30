import React from "react";

const Error = ({ messages }) => {
  console.log(messages);
  return (
    <div role="alert" class="rounded border-s-4 border-red-500 bg-red-50 p-4">
      <strong class="block font-medium text-red-800">
        Something went wrong
      </strong>

      <ul>
        {messages.map((message) => (
          <ul class="mt-2 text-sm text-red-700">{message}</ul>
        ))}
      </ul>
    </div>
  );
};

export default Error;
