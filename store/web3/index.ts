import { Module } from 'vuex';
import Web3Model from '@/models/Web3Model';
import { RootState } from '@/store/types';
import { Web3State } from '@/store/web3/types';
import { getters } from "@/store/web3/getters"
import { mutations } from "@/store/web3/mutations"


const state: Web3State = {
    web3 : new Web3Model()
}

export const web3: Module<Web3State, RootState> = {
    state,
    getters,
    mutations
}
