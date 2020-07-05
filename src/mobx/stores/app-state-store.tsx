import { observable } from 'mobx';

export class AppStateStore {
  @observable
  isLoading: boolean = false;
}
