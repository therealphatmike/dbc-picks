import { Link, Head } from '@inertiajs/react';
import { Pick } from '@/types/dbcPicksTypes';
import { Fragment } from 'react';

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

export default function PickTable({ picks }: { picks: Pick[] }) {
    return (
        <>
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h2 className="text-xl font-semibold leading-6 text-dbc-blue">Picks</h2>
                    <p className="text-sm text-dbc-blue">This table shows the last 4 races of picks. A more detailed view will be implemented in the future.</p>
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
                                    </tr>
                                </thead>
                                <tbody className="bg-white">
                                    {picks.map((pick, pickIdx) => (
                                        <Fragment key={`pick-table-${pick.race.name}-${pick.id}`}>
                                            {pickIdx === 0 || pick.race.name !== picks[pickIdx - 1].race.name ? (
                                                <tr className="border-t border-gray-200">
                                                    <th
                                                        colSpan={5}
                                                        scope="colgroup"
                                                        className="bg-gray-50 py-2 pl-4 pr-3 text-left text-sm font-semibold text-dbc-blue sm:pl-3"
                                                    >
                                                        {pick.race.name}
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
                                            </tr>
                                        </Fragment>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
