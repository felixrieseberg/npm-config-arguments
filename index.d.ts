export interface npmConfigArgumentsOptions {
  includeAllKnown?: boolean,
  include?: Array<string>
}

export function assignConfigToArgs(options?: npmConfigArgumentsOptions): void;
