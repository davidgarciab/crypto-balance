export default class Web3Model {
    networkId: number;
    coinbase: string;
    balance: number;
 
    constructor() {
      this.networkId = 0;
      this.coinbase = '';
      this.balance = 0;
    }
  }