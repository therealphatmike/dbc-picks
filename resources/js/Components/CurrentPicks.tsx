import { Pick } from '@/types/dbcPicksTypes'

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

export default function CurrentPicks({ picks }: { picks: Pick[] }) {
  return picks.length > 0 && (
    <>
      <h2 className="text-xl font-semibold leading-6 text-dbc-blue">
        Current Picks
      </h2>
      <p className="text-sm text-dbc-blue">Picks for the upcoming race. Updated each week after the podcast is released.</p>
      <div className="mt-4 divide-y divide-dbc-teal bg-dbc-teal overflow-hidden rounded-lg shadow shadow-dbc-teal/50 sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0">
        {picks.map((pick, pickIdx) => (
          <div
            key={`current-${pick.id}-${pickIdx}`}
            className={classNames(
              pickIdx === 0 ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none' : '',
              pickIdx === 1 ? 'sm:rounded-tr-lg' : '',
              pickIdx === picks.length - 2 ? 'sm:rounded-bl-lg' : '',
              pickIdx === picks.length - 1 ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none' : '',
              'transition ease-in-out group relative bg-white p-6 hover:bg-opacity-75',
            )}
          >
            <div className="flex-shrink-0">
              <img className="h-10 w-10 rounded-full float-left mr-4" src={`build/images/${pick.host.avatar}`} alt="" />
            </div>
            <div className="align-content-bottom">
              {pick.host.first_name} {pick.host.last_name}
            </div>
            <div className="mt-6">
              <p className="mt-2 text-sm text-gray-500">
                Driver: {pick.driver.nickname || pick.driver.first_name} {pick.driver.last_name}
              </p>
              <p className="mt-2 text-sm text-gray-500">
                Race: {pick.race.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
