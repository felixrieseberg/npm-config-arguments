export interface npmConfigArgumentsOptions {
  includeAllKnown?: boolean,
  include?: Array<string>,
  useEqualsForValues?: true
}

export function assignConfigToArgs(options?: npmConfigArgumentsOptions): void;
