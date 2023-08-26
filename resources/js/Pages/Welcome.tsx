import { Link, Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import Guest from '@/Layouts/GuestLayout';
import { Host, PaginatedPicksResult, Pick } from '@/types/dbcPicksTypes';
import PickTable from '@/Components/PickTable';
import Hosts from '@/Components/Hosts';
import CurrentPicks from '@/Components/CurrentPicks';
import Standings from '@/Components/Standings';

export default function Welcome({ auth, picks, currentPicks, hosts, standings }: PageProps<{ picks: PaginatedPicksResult, currentPicks: Pick[], hosts: Host[], standings: Host[] }>) {
  return picks && (
    <Guest>
      <div className="space-y-12">
        <div id="current_picks">
          <CurrentPicks picks={currentPicks} />
        </div>
        <div id="standings">
          <Standings standings={standings} />
        </div>
        <div id="picks">
          <PickTable picks={picks} />
        </div>
        <div id="hosts">
          <Hosts hosts={hosts} />
        </div>
      </div>
    </Guest>
  )
}
