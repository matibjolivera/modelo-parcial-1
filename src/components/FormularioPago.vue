<template lang="html">

  <div class="jumbotron">
    <h2>Formulario</h2>
    <hr>

    <vue-form :state="formState" @submit.prevent="enviar()">
      <validate tag="div">
        <label for="nombre">Nombre</label>
        <input class="form-control" type="text" id="nombre" name="nombre" v-model.trim="formData.nombre"
               autocomplete="off" :minlength="nombreLengthMin" required>
        <field-messages name="nombre" show="$dirty">
          <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
          <div slot="no-espacios" class="alert alert-danger mt-1">No se permiten espacios</div>
          <div slot="minlength" class="alert alert-danger mt-1">
            Este campo requiere {{ nombreLengthMin }} caracteres como mínimo
          </div>
        </field-messages>
      </validate>
      <validate tag="div">
        <label for="apellido">Apellido</label>
        <input class="form-control" type="text" id="apellido" name="apellido" v-model.trim="formData.apellido"
               autocomplete="off" required>
        <field-messages name="apellido" show="$dirty">
          <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
          <div slot="minlength" class="alert alert-danger mt-1">Este campo requiere 3 caracteres como mínimo
          </div>
        </field-messages>
      </validate>
      <validate tag="div">
        <label for="documento">Documento</label>
        <input class="form-control" type="text" id="documento" name="documento" v-model.trim="formData.documento"
               autocomplete="off" required>
        <field-messages name="documento" show="$dirty">
          <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
        </field-messages>
      </validate>
      <validate tag="div">
        <label for="montoAPagar">Monto a pagar</label>
        <input class="form-control" type="number" id="montoAPagar" name="montoAPagar"
               v-model.number="formData.montoAPagar"
               autocomplete="off" :min="minMonto" required>
        <field-messages name="montoAPagar" show="$dirty">
          <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
          <div slot="min" class="alert alert-danger mt-1">Monto mínimo: ${{ minMonto }}</div>
        </field-messages>
      </validate>
      <validate tag="div">
        <label for="pagoRealizado">Pago realizado</label>
        <input class="form-control" type="number" id="pagoRealizado" name="pagoRealizado"
               v-model.number="formData.pagoRealizado"
               autocomplete="off" :min="minMonto" required>
        <field-messages name="pagoRealizado" show="$dirty">
          <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
          <div slot="min" class="alert alert-danger mt-1">Pago mínimo: ${{ minMonto }}</div>
        </field-messages>
      </validate>

      <button class="btn btn-success my-3" :disabled="formState.$invalid" type="submit">Enviar</button>

    </vue-form>

    <div v-if="pagos.length" class="table-responsive">
      <table class="table table-dark">
        <tr>
          <th>Cliente</th>
          <th>DNI</th>
          <th>Monto a pagar</th>
          <th>Pago realizado</th>
          <th>Fecha creación</th>
          <th>Saldo deuda</th>
        </tr>
        <tr v-for="(p, i) in pagos" :key="i">
          <td>{{ p.nombre }} {{ p.apellido }}</td>
          <td>{{ p.documento }}</td>
          <td>{{ p.montoAPagar }}</td>
          <td>{{ p.pagoRealizado }}</td>
          <td>{{ p.fechaPago }}</td>
          <td v-if="p.saldoDeuda < 0" class="alert alert-danger">Deuda: ${{ Math.abs(p.saldoDeuda) }}</td>
          <td v-else-if="p.saldoDeuda > 0" class="alert alert-primary">A favor: ${{ p.saldoDeuda }}</td>
          <td v-else class="alert alert-success">Sin deuda</td>
        </tr>
      </table>
    </div>
    <h4 class="alert alert-danger" v-else>No se encontraron pagos</h4>
  </div>

</template>

<script lang="js">

import moment from 'moment'

export default {
  name: 'src-components-formulario-pago',
  components: {},
  props: [],
  data() {
    return {
      formData: this.getFormInicial(),
      formState: {},
      nombreLengthMin: 3,
      minMonto: 0,
      pagos: []
    }
  },
  computed: {},
  mounted() {

  },
  methods: {
    getFormInicial() {
      return {
        nombre: '',
        apellido: '',
        documento: '',
        montoAPagar: '',
        pagoRealizado: '',
        fechaPago: '',
        saldoDeuda: ''
      }
    },
    enviar() {
      let pago = this.formData
      pago.fechaPago = moment().format('DD/MM/YYYY hh:mm:ss')
      console.log(this.formData.pagoRealizado - this.formData.montoAPagar)
      pago.saldoDeuda = this.formData.pagoRealizado - this.formData.montoAPagar
      this.pagos.push(pago)
      this.formData = this.getFormInicial()
      this.formState._reset()
    }
  }
}


</script>

<style scoped lang="css">
.jumbotron {
  background-color: rgb(167, 101, 82);
  color: white;
}

hr {
  background-color: #eee;
}

</style>
