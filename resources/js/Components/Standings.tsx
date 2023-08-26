import { Host } from "@/types/dbcPicksTypes";

export default function Standings({ standings }: { standings: Host[] }) {
  return (
    <>
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold leading-6 text-dbc-blue">Standings</h1>
          <p className="text-sm text-dbc-blue">
            DBC does not track points, only wins. Points are my own system.
            I added points to find a fun alternative way to view consistency among picks instead of just outright wins.
            A win gets 10 points, 2nd place gets 8 points, 3rd place gets 4 points, and last gets 0 points.
          </p>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-1">
        {standings.map((host, idx) => (
          <div
            key={`standings-${host.id}`}
            className="transition ease-in-out relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm shadow-dbc-teal/50 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-dbc-orange hover:-translate-y-1 hover:translate-x-1 hover:shadow-dbc-orange/75 hover:shadow-md"
          >
            <div className="flex-shrink-0">
              <span className="text-xl">{idx + 1}.</span>
            </div>
            <div className="flex-shrink-0">
              <img className="h-10 w-10 rounded-full" src={`build/images/${host.avatar}`} alt="" />
            </div>
            <div className="min-w-0 flex-1">
              <a href="#" className="focus:outline-none">
                <span className="absolute inset-0" aria-hidden="true" />
                <p className="text-sm font-medium text-dbc-blue">{host.first_name} {host.last_name}</p>
                <p className="truncate text-sm text-gray-700">wins: {host.wins}</p>
                <p className="truncate text-sm text-gray-700">points: {host.points}</p>
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
