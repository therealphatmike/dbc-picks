import { Link, Head } from '@inertiajs/react';
import { Host } from '@/types/dbcPicksTypes';

export default function Hosts({ hosts }: { hosts: Host[] }) {
    return (
        <div className="bg-white py-24">
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-1">
                <div className="mx-auto max-w-2xl lg:mx-0 xs:px-0 lg:flex lg:d-inline items-center">
                    <img src="build/images/dbc_logo_big.jpeg" className="w-96"></img>
                    <h2 className="ml-2 text-3xl font-bold tracking-tight text-dbc-blue sm:text-4xl text-center">is...</h2>
                </div>
                <ul
                    role="list"
                    className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-8 xl:col-span-2"
                >
                    {hosts.map((host) => (
                        <li key={host.id}>
                            <img className="aspect-[3/2] w-full rounded-2xl object-cover" src={`build/images/${host.avatar}`} alt="" />
                            <h3 className="mt-6 text-lg font-semibold leading-8 text-dbc-blue">{host.first_name} {host.last_name}</h3>
                            {/* <p className="mt-4 text-base leading-7 text-gray-600">{host.bio}</p> */}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
