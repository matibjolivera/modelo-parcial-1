<template>
  <div class="jumbotron">
    <h2>Múltiple Choice</h2>
    <hr>
    <div class="responsive">
      <table class="table table-dark">
        <tr>
          <th>Pregunta</th>
          <th>Respuesta</th>
        </tr>
        <tr>
          <td>1) ¿Qué es un componente en Vue.js?</td>
          <td>a) Son elementos personalizados reutilizables</td>
        </tr>
        <tr>
          <td>2) ¿Que función cumple el modificador number aplicado a v-model?</td>
          <td>a) Permite transformar la entrada de un elemento en un número</td>
        </tr>
        <tr>
          <td>3) "vue create" se utiliza para:</td>
          <td>b) Crear un proyecto base Vue basado en Vue CLI</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "Choice"
}
</script>

<style scoped lang="css">

.jumbotron {
  background-color: #AAD016FF;
  color: black;
}

hr {
  background-color: black;
}
</style>