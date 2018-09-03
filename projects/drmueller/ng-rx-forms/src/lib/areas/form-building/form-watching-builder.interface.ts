import { IRxFormBuilder } from '.';

export interface IFormWatchingBuilder<T> {
  withDebounceTime(debounceMilliseconds: number): IFormWatchingBuilder<T>;
  buildFormWatcher(): IRxFormBuilder<T>;
}
