import { Link, Head } from '@inertiajs/react';
import { PaginatedPicksResult, Pick } from '@/types/dbcPicksTypes';
import { Fragment } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function PickTable({ picks }: { picks: PaginatedPicksResult }) {
  return (
    <>
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h2 className="text-xl font-semibold leading-6 text-dbc-blue">Picks</h2>
          <p className="text-sm text-dbc-blue">This table shows the last 3 races of picks. A searchable and filterable view will be implemented in the future.</p>
        </div>
      </div>
      <div className="mt-4 flow-root">
        <div className="mx-2 -my-2 overflow-x-auto lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle lg:px-8">
            <div className="overflow-hidden shadow shadow-dbc-teal/50 ring-1 ring-black ring-opacity-5 rounded-lg">
              <table className="min-w-full">
                <thead className="bg-dbc-teal/50">
                  <tr>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-dbc-blue sm:pl-3">
                      Host
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-dbc-blue">
                      Driver
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-dbc-blue">
                      Result
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {picks.data.map((pick, pickIdx) => (
                    <Fragment key={`pick-table-${pick.race.name}-${pick.id}`}>
                      {pickIdx === 0 || pick.race.name !== picks.data[pickIdx - 1].race.name ? (
                        <tr className="border-t border-gray-200">
                          <th
                            colSpan={5}
                            scope="colgroup"
                            className="bg-gray-50 py-2 pl-4 pr-3 text-left text-sm font-semibold text-dbc-blue sm:pl-3"
                          >
                            {pick.race.name} - {new Date(pick.race.date).toLocaleDateString()}
                          </th>
                        </tr>
                      ) : (
                        <></>
                      )}
                      <tr
                        key={pick.id}
                        className={classNames(pickIdx === 0 ? 'border-gray-300' : 'border-gray-200', 'border-t')}
                      >
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-dbc-blue sm:pl-3">
                          {pick.host.first_name}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-dbc-blue/75">{pick.driver.nickname || pick.driver.first_name} {pick.driver.last_name} {pick.driver.suffix || ''}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-dbc-blue/75">{pick.place ? pick.place : "TBD"}</td>
                      </tr>
                    </Fragment>
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
