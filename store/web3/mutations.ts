import { MutationTree} from "vuex";
import { Web3State } from "@/store/web3/types";
import Web3Model from "~/models/Web3Model";

export enum Web3Mutations {
    REGISTER_WEB3_INSTANCE = "REGISTER_WEB3_INSTANCE"
}

export const mutations: MutationTree<Web3State> = {
    [Web3Mutations.REGISTER_WEB3_INSTANCE] (state, payload: Web3Model) : void {
        console.log('registerWeb3instance Mutation being executed', payload);
        const result = payload;
        const web3Copy = new Web3Model();
        web3Copy.coinbase = result.coinbase;
        web3Copy.networkId = result.networkId;
        web3Copy.balance = result.balance;
        state.web3 = web3Copy;
    }    
}