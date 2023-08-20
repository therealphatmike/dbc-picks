import { Link, Head } from '@inertiajs/react';
import { Pick } from '@/types/dbcPicksTypes';

export default function PickTable({ picks }: { picks: Pick[] }) {
    return (
        <>
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h2 className="text-xl font-semibold leading-6 text-gray-900">Picks</h2>
                    <p className="text-sm text-gray-900">This table shows the last 4 races of picks. A more detailed view will be implemented in the future.</p>
                </div>
            </div>
            <div className="mt-4 flow-root">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <div className="overflow-hidden shadow shadow-dbc-teal/50 ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-dbc-teal/75">
                                <thead className="bg-dbc-teal/50">
                                    <tr>
                                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                            Host
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Race
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Driver
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-dbc-teal/50 bg-white">
                                    {picks.map((pick) => (
                                        <tr key={pick.id} className="transition ease-in-out hover:bg-dbc-teal/25">
                                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                                {pick.host.first_name}
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{pick.race.name}</td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{pick.driver.nickname || pick.driver.first_name} {pick.driver.last_name} {pick.driver.suffix || ''}</td>
                                        </tr>
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
