export interface Crew {
  adult: false;
  // credit_id: '5de6f6f0cf4b8b00112791a3';
  department: string;
  // gender: 2;
  // id: 91161;
  // job: 'Producer';
  known_for_department: 'Production';
  name: 'Joe Hartwick Jr.';
  // original_name: 'Joe Hartwick Jr.';
  // popularity: 4.904;
  profile_path?: string;
}

export interface Cast {
  adult: false;
  character: 'Honored Elder';
  known_for_department: 'Acting';
  name: 'Andy McPhee';
  // order: 19;
  // original_name: 'Andy McPhee';
  profile_path?: string;
}

export interface CastAPIResponse {
  cast: Cast[];
  crew: Crew[];
}
