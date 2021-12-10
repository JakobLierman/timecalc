// { hours: number, minutes: number }
export type TTime = Required<Pick<Duration, 'hours' | 'minutes'>>;
