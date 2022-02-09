import Vue from 'vue';
import Vuex, {Store, StoreOptions} from 'vuex';
import { RootState } from './types';
import { web3 } from '@/store/web3'

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
    state: {
    },
    modules: {
        web3
    }
}

export default () => new Store<RootState>(store);