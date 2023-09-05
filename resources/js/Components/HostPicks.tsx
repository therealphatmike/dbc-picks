import { Link, Head } from '@inertiajs/react';
import { PaginatedPicksResult, Pick } from '@/types/dbcPicksTypes';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

export default function HostPicks({ picks }: { picks: PaginatedPicksResult }) {
  return (
    <>
      <div className="sm:flex sm:items-center mt-8">
        <div className="sm:flex-auto">
          <h2 className="text-xl font-semibold leading-6 text-dbc-blue">Picks</h2>
          <p className="text-sm text-dbc-blue">A searchable and filterable view will be implemented in the future.</p>
        </div>
      </div>
      <div className="mt-2 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-dbc-teal/25">
                  <tr>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-dbc-blue sm:pl-6">
                      Race
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-dbc-blue">
                      Driver
                    </th>
                    {/* <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-dbc-blue">
                        Driver Result
                      </th> */}
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-dbc-blue">
                      Host Result
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {picks.data.map((pick) => (
                    <tr key={pick.id}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-dbc-blue sm:pl-6">
                        {pick.race.name}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{pick.driver.nickname || pick.driver.first_name} {pick.driver.last_name} {pick.driver.suffix || ''}</td>
                      {/* <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{pick.driver.result}</td> */}
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{pick.place}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
        <div className="flex flex-1 justify-between sm:hidden">
          <a
            href={picks.prev_page_url}
            className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Previous
          </a>
          <a
            href={picks.next_page_url}
            className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Next
          </a>
        </div>
        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700">
              Showing <span className="font-medium">{picks.from}</span> to <span className="font-medium">{picks.to}</span> of
              <span className="font-medium ms-1">{picks.total}</span> results
            </p>
          </div>
          <div>
            <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
              {
                picks.links.map((link, idx) => {
                  if (idx === 0) {
                    return (
                      <a
                        href={`${picks.prev_page_url}`}
                        className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                      >
                        <span className="sr-only">Previous</span>
                        <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                      </a>
                    )
                  }

                  if (idx + 1 === picks.links.length) {
                    return (
                      <a
                        href={`${picks.prev_page_url}`}
                        className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                      >
                        <span className="sr-only">Next</span>
                        <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                      </a>
                    )
                  }

                  return (
                    <a
                      href={`${link.url}`}
                      className={`relative z-10 inline-flex items-center px-4 py-2 text-sm font-semibold focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${link.active ? 'bg-dbc-teal text-white' : 'bg-white text-dbc-blue ring-1 ring-inset ring-gray-300'}`}
                    >
                      {link.label}
                    </a>
                  )
                })
              }
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}
