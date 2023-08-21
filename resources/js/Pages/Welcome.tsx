import { Link, Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import Guest from '@/Layouts/GuestLayout';
import { Host, Pick } from '@/types/dbcPicksTypes';
import PickTable from '@/Components/PickTable';
import Hosts from '@/Components/Hosts';
import CurrentPicks from '@/Components/CurrentPicks';
import Standings from '@/Components/Standings';

function getDate() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0')
    var mm = String(today.getMonth() + 1).padStart(2, '0')
    var yyyy = today.getFullYear()

    return yyyy + '-' + mm + '-' + dd
}

export default function Welcome({ auth, picks, hosts, standings }: PageProps<{ picks: Pick[], hosts: Host[], standings: Host[] }>) {
    return picks && (
        <Guest>
            <div className="space-y-12">
                <div id="current_picks">
                    <CurrentPicks picks={picks.filter(pick => new Date(pick?.race?.date) >= new Date(getDate()))} />
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
