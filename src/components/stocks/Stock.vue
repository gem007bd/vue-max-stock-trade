<template>
    <div class="col-sm-4">
        <div class="card border-succes">
        <div class="card-header bg-transparent border-succes">
            {{stock.name}} <span class="small">Price: {{stock.price}}</span>
        </div>
        <div class="card-body">
            <div class="input-group">
            <input type="number" 
                class="form-control" 
                placeholder="Quantity"
                v-model="quantity">
            <div class="input-group-append">
                <button class="btn btn-success"
                    type="button" 
                    @click="buyStock" 
                    :disabled="quantity <=0 || Number.isInteger(quantity)"
                    >Buy</button>
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
    methods: {
        buyStock() {
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: this.quantity
            }; 
            this.quantity = 0;
            console.log(order);
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
