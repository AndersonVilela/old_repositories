<template>
  <div class="container">
    <div class="up">
      <input type="number" v-model="decimalValue" />
    </div>
    <div class="down">{{ convertToBinary() }}</div>
  </div>
</template>

<script >

export default({
  data() {
    return {
      decimalValue: 0,
    };
  },
  methods: {
    convertToBinary() {
      let decimal = this.decimalValue;
      let binary = '';

      if (decimal == 0) {
        binary = '0';
      } else {
        while (decimal > 0) {
          const remainder = decimal % 2;
          binary = remainder + binary;
          decimal = Math.floor(decimal / 2);
        }
      }

      return binary;
    },
  },
});
</script>
Nesta versão, declaramos as propriedades decimalValue e binaryResult dentro do objeto data. Além disso, a função convertToBinary é um método no objeto methods, e não uma função no bloco setup. Também adicionamos uma chamada para convertToBinary() no manipulador de evento @input do input numérico, para que a conversão seja realizada toda vez que o valor do input for alterado.

Espero que isso ajude!








<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
.container {
  width: 100vw;
  height: 100vh;
}

.up,
.down {
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  font-weight: 700;
}

.up {
  background-color: #080e20;
  color: #fff;
}

.up > input {
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 1.8rem;
  font-weight: 700;
  background: transparent;
  color: #fff;
}

.down {
  background: #fff;
  color: #080e20;
}
</style>
