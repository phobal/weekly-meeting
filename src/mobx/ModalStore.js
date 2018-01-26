import { observable, action } from 'mobx';

class ModalStore {
  @observable open = false;

  @action Open = () => {
    this.open = true;
  }

  @action Close = () => {
    this.open = false;
  }
}

export default new ModalStore;