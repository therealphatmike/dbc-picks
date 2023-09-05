import HostPicks from "@/Components/HostPicks";
import Guest from "@/Layouts/GuestLayout";
import { PageProps } from "@/types";
import { Host, PaginatedPicksResult } from "@/types/dbcPicksTypes";
import {
  BarElement,
  BarController,
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Chart } from "react-chartjs-2";

export default function HostStats({
  hosts,
  host,
  hostStats,
  hostPicks,
  rollingAveragePosition,
  pickPlaces,
}: PageProps<{ hosts: Host[], host: Host, hostStats: any, hostPicks: PaginatedPicksResult, rollingAveragePosition: number[], pickPlaces: number[] }>) {
  ChartJS.register(
    BarController,
    BarElement,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  return (
    <Guest hosts={hosts}>
      <div>
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <img className="h-10 rounded-full" src={`/build/images/${host.avatar}`} alt="" />
          </div>
          <h2 className="ml-4 text-2xl font-semibold leading-6 text-dbc-blue">{host.first_name} {host.last_name}</h2>
        </div>
        <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {Object.keys(hostStats).map((key) => (
            <div key={key} className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6 transition ease-in-out rounded-lg border border-gray-300 px-6 py-5 shadow-sm shadow-dbc-orance/50 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-dbc-orange hover:-translate-y-1 hover:translate-x-1 hover:shadow-dbc-orange/75 hover:shadow-md">
              <dt className="truncate text-sm font-medium text-dbc-blue/50 capitalize">{key.split('_').join(' ')}</dt>
              <dd className="mt-1 text-3xl font-semibold tracking-tight text-dbc-blue">{hostStats[key] % 1 === 0 ? hostStats[key] : hostStats[key].toFixed(2)}</dd>
            </div>
          ))}
        </dl>

          <div className="mt-8 overflow-x-auto">
            <h3 className="text-dbc-blue text-xl font-semibold">Weekly Pick Place vs 4 Week Rolling Average</h3>
            <Chart
              type="bar"
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    display: true,
                    position: 'top' as const,
                  },
                  title: {
                    display: false,
                  },
                },
                scales: {
                  y: {
                    min: 1,
                    max: 4,
                    ticks: {
                      stepSize: 1,
                    },
                  },
                  x: {
                    min: 0,
                    max: 35,
                  }
                },
              }}
              data={{
                labels: rollingAveragePosition.map((wcp, idx) => idx),
                datasets: [{
                  type: 'line' as const,
                  label: '4 week rolling average',
                  data: rollingAveragePosition,
                  borderColor: '#fe5b4a',
                  backgroundColor: '#fe5b4a',
                }, {
                  type: 'bar' as const,
                  label: 'weekly position',
                  data: pickPlaces,
                  borderColor: 'rgba(110, 182, 187, 0.5)',
                  backgroundColor: 'rgba(110, 182, 187, 0.5)',
                }]
              }}
              height={100}
            />
          </div>

        <HostPicks picks={hostPicks} />
      </div>
    </Guest>
  );
};
