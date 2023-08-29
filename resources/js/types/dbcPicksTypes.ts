export type Host = {
  id: string
  first_name: string
  last_name: string
  avatar: string
  points?: number
  wins?: number
  average_pick_place?: number
}

export type Driver = {
  id: string
  first_name: string
  last_name: string
  suffix: string
  nickname: string
}

export type Track = {
  id: string
  name: string
}

export type Race = {
  id: string
  track_id: string
  track: Track
  date: string
  name: string
  laps: number
  miles: number
  regular_season: boolean
}

export type Pick = {
  id: string
  host_id: string
  driver_id: string
  race_id: string
  host: Host
  driver: Driver
  race: Race
  place?: number
}

export type PaginatedPicksResult = {
  current_page: number
  data: Pick[]
  total: number
  from: number
  to: number
  first_page_url: string
  last_page_url: string
  prev_page_url: string
  next_page_url: string
  per_page: number
  last_page: number
  links: Link[]
}

type Link = {
  url: string
  label: string
  active: boolean
}
