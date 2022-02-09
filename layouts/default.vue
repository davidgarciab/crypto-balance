/* eslint-disable vue/multi-word-component-names */
<template>
 <div class="p-4">
    <Metamask @connect="initWeb3" />
    <div>
      <p>Network: {{ web3.networkId }}</p>
      <p>Account: {{ web3.coinbase }}</p>
      <p>Balance: {{ web3.balance }}</p>
    </div>
    <p class="italic text-red-600">{{ errorMessage }}</p>
    <Nuxt />
  </div>  
</template>

<script lang="ts">
import Vue from 'vue'
import Web3 from 'web3'
import { mapGetters, mapMutations } from 'vuex';
import Web3Model from '@/models/Web3Model'
import { Web3Mutations } from "@/store/web3/mutations"
declare const window: any

export default Vue.extend({
  data () {
    return {
      errorMessage: ''
    }
  },
  computed: {
    ...mapGetters(['getInstance']),
    web3 () : Web3Model {
      return this.getInstance
    }
  },  
  methods: {
    ...mapMutations( { registerWeb3Instance : Web3Mutations.REGISTER_WEB3_INSTANCE } ),

    async initWeb3() : Promise<void> {
      // Check for web3 provider
      if (typeof window.ethereum !== 'undefined') {
        try {
          // Ask to connect
          await window.ethereum.send('eth_requestAccounts')
          const instance = new Web3(window.ethereum)
          // Get necessary info on your node
          const web3Model = new Web3Model();
          web3Model.networkId = await instance.eth.net.getId()
          web3Model.coinbase = await instance.eth.getCoinbase()
          web3Model.balance = parseInt(await instance.eth.getBalance(web3Model.coinbase), 10)
          // Save it to store
          this.registerWeb3Instance(web3Model)
        } catch (error) {
          // User denied account access
          console.error('User denied web3 access', error)
        }
      }
      // No web3 provider
      else {
        console.error('No web3 provider detected')
      }
    },
  },
})
</script>
