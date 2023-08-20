export type Host = {
    id: string
    first_name: string
    last_name: string
    avatar: string
    points?: number
    wins?: number
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
    regular_season: boolean
}
