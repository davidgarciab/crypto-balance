import {GetterTree} from "vuex"
import { RootState } from "@/store/types"
import { Web3State } from "@/store/web3/types"
import Web3Model from "~/models/Web3Model"

export const getters: GetterTree<Web3State, RootState> = {
    getInstance (state) : Web3Model {
        return state.web3
    }
}