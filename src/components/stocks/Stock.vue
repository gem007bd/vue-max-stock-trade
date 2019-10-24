<template>
    <div class="col-sm-4">
        <div class="card border-succes">
        <div class="card-header bg-transparent border-succes">
            {{stock.name}} <span class="small">Price: {{stock.price | currency}}</span>
        </div>
        <div class="card-body">
            <div class="input-group">
            <input type="number" 
                class="form-control" 
                placeholder="Quantity"
                v-model="quantity"
                :class="{'border border-danger': insufficientFunds}">
            <div class="input-group-append">
                <button class="btn btn-success"
                    type="button" 
                    @click="buyOnStock" 
                    :disabled="insufficientFunds || quantity <=0 || Number.isInteger(quantity)"
                    >{{ insufficientFunds ? 'insufficient Funds' : 'Buy'}}</button>
            </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['stock'],
    data() {
        return {
            quantity: 0
        }
    },
    computed: {
        funds() {
            return this.$store.getters.funds;
        },
        insufficientFunds() {
            return this.quantity * this.stock.price > this.funds;
        }
    },
    methods: {
        buyOnStock() {
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: parseInt(this.quantity)
            }; 
            this.quantity = 0;
            console.log(order);
            this.$store.dispatch('buyStock', order);
        }
    }

}
</script>

<style scoped>
    .small {
        font-size: 12px;
        color: green
    }
</style>
