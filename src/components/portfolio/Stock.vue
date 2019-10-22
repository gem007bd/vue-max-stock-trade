<template>
    <div class="col-sm-4">
        <div class="card border-info">
        <div class="card-header bg-transparent border-info">
            {{stock.name}} <span class="small">Price: {{stock.price}} | Quantity:  {{stock.quantity}} </span>
        </div>
        <div class="card-body">
            <div class="input-group">
            <input type="number" 
                class="form-control" 
                placeholder="Quantity"
                v-model="sellQuantity">
            <div class="input-group-append">
                <button class="btn btn-info"
                    type="button" 
                    @click="sellStock" 
                    :disabled="quantity <=0 || Number.isInteger(quantity)"
                    >Sell</button>
            </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";
export default {    
    props:['stock'],
    data() {
        return {
            sellQuantity: 0
        }
    },
    methods: {
      ...mapActions({
        placeSellOrder: 'sellStock'
      }),
      sellStock() {
        const order = {
            stockId: this.stock.id,
            stockPrice: this.stock.price,
            quantity: this.sellQuantity
        };
        this.placeSellOrder(order);
        this.quantity = 0;
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
