import React from "react";
import ReactPaginate from "react-paginate";
import { useGetStudentsQuery } from "../../api/students";

const Students = () => {
  const { data, isLoading } = useGetStudentsQuery();
  console.log(data?.data[0].isActive);
  return (
    <div class="overflow-x-auto mt-16">
      <div className="flex gap-8">
        <div className="relative">
          <details className="group [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600">
              <span className="text-sm font-medium"> Name </span>

              <span className="transition group-open:-rotate-180">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </summary>

            <div className="z-50 group-open:absolute group-open:start-0 group-open:top-auto group-open:mt-2">
              <div className="w-96 rounded border border-gray-200 bg-white">
                <header className="flex items-center justify-between p-4">
                  <span className="text-sm text-gray-700">
                    {" "}
                    Search by image{" "}
                  </span>

                  <button
                    type="button"
                    className="text-sm text-gray-900 underline underline-offset-4"
                  >
                    Reset
                  </button>
                </header>

                <input
                  type="text"
                  placeholder="text"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                />
              </div>
            </div>
          </details>
        </div>

        <div className="relative">
          <details className="group [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600">
              <span className="text-sm font-medium"> Age </span>

              <span className="transition group-open:-rotate-180">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </summary>

            <div className="z-50 group-open:absolute group-open:start-0 group-open:top-auto group-open:mt-2">
              <div className="w-96 rounded border border-gray-200 bg-white">
                <header className="flex items-center justify-between p-4">
                  <span className="text-sm text-gray-700">Age Range</span>

                  <button
                    type="button"
                    className="text-sm text-gray-900 underline underline-offset-4"
                  >
                    Reset
                  </button>
                </header>

                <div className="border-t border-gray-200 p-4">
                  <div className="flex justify-between gap-4">
                    <label
                      htmlFor="FilterPriceFrom"
                      className="flex items-center gap-2"
                    >
                      <span className="text-sm text-gray-600"></span>

                      <input
                        type="number"
                        id="FilterPriceFrom"
                        placeholder="From"
                        className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                      />
                    </label>

                    <label
                      htmlFor="FilterPriceTo"
                      className="flex items-center gap-2"
                    >
                      <span className="text-sm text-gray-600"></span>

                      <input
                        type="number"
                        id="FilterPriceTo"
                        placeholder="To"
                        className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </details>
        </div>

        <div className="relative">
          <details className="group [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600">
              <span className="text-sm font-medium"> Grade </span>

              <span className="transition group-open:-rotate-180">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </summary>

            <div className="z-50 group-open:absolute group-open:start-0 group-open:top-auto group-open:mt-2">
              <div className="w-96 rounded border border-gray-200 bg-white">
                <header className="flex items-center justify-between p-4">
                  <span className="text-sm text-gray-700">Grade Range</span>

                  <button
                    type="button"
                    className="text-sm text-gray-900 underline underline-offset-4"
                  >
                    Reset
                  </button>
                </header>

                <div className="border-t border-gray-200 p-4">
                  <div className="flex justify-between gap-4">
                    <label
                      htmlFor="FilterPriceFrom"
                      className="flex items-center gap-2"
                    >
                      <span className="text-sm text-gray-600"></span>

                      <input
                        type="number"
                        id="FilterPriceFrom"
                        placeholder="From"
                        className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                      />
                    </label>

                    <label
                      htmlFor="FilterPriceTo"
                      className="flex items-center gap-2"
                    >
                      <span className="text-sm text-gray-600"></span>

                      <input
                        type="number"
                        id="FilterPriceTo"
                        placeholder="To"
                        className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </details>
        </div>

        <div className="relative">
          <details className="group [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600">
              <span className="text-sm font-medium"> is active </span>

              <span className="transition group-open:-rotate-180">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </summary>

            <div className="z-50 group-open:absolute group-open:start-0 group-open:top-auto group-open:mt-2">
              <div className="w-96 rounded border border-gray-200 bg-white">
                <header className="flex items-center justify-between p-4">
                  <span className="text-sm text-gray-700"> 0 Selected </span>

                  <button
                    type="button"
                    className="text-sm text-gray-900 underline underline-offset-4"
                  >
                    Reset
                  </button>
                </header>

                <ul className="space-y-1 border-t border-gray-200 p-4">
                  <li>
                    <label
                      htmlFor="FilterInStock"
                      className="inline-flex items-center gap-2"
                    >
                      <input
                        type="checkbox"
                        id="FilterInStock"
                        className="h-5 w-5 rounded border-gray-300"
                      />

                      <span className="text-sm font-medium text-gray-700">
                        True
                      </span>
                    </label>
                  </li>

                  <li>
                    <label
                      htmlFor="FilterPreOrder"
                      className="inline-flex items-center gap-2"
                    >
                      <input
                        type="checkbox"
                        id="FilterPreOrder"
                        className="h-5 w-5 rounded border-gray-300"
                      />

                      <span className="text-sm font-medium text-gray-700">
                        False
                      </span>
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </details>
        </div>
      </div>
      <table class="min-w-full divide-y-2 divide-gray-200 bg-white text-sm my-8">
        <thead class="ltr:text-left rtl:text-right">
          <tr>
            <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Name
            </th>
            <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Age
            </th>
            <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Stage
            </th>
            <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Is Active
            </th>
          </tr>
        </thead>

        <tbody class="divide-y divide-gray-200">
          {isLoading ? (
            <p>loading...</p>
          ) : (
            data.data.map((student) => (
              <tr>
                <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  {student.fullname}
                </td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                  {student.age}
                </td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                  {student.stage}
                </td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                  {student.isActive.toString()}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={(e) => {
          console.log(e.selected);
        }}
        className="flex justify-center gap-1 text-xs font-medium"
        pageLinkClassName="block h-8 w-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
        activeClassName="block h-8 w-8 rounded border-teal-600 bg-teal-600 text-center leading-8 text-white"
        nextClassName="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
        previousClassName="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
        pageRangeDisplayed={3}
        pageCount={10}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default Students;
