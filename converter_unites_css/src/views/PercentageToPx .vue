<template>
  <div class="Containerpxtorem">
    <TheHeader />
    <main>
      <h3>Percentage to PX converter</h3>
      <section class="converter">
        <div class="box">
          <span>%</span>
          <div>
            <input type="text" v-model="percentage" />
            <span>%</span>
          </div>
        </div>
        <a href="/pxtopercentage">
          <img src="../assets/swap.svg" alt="" />
        </a>
        <div class="box box-result">
          <span>px</span>
          <div>
            <span>{{ percentage && converttopx() }}</span>
            <span>px</span>
          </div>
        </div>
      </section>
      <section class="description">
        <h3 class="title">Convert percentage to px</h3>
        <p>
          This is a minimalist online calculator that converts pixels to CSS REM
          units. Conversion is based on the default font size of 16 pixels.
        </p>
        <p>
          The conversion works of course in both directions, just change the
          opposite input field.
        </p>
      </section>
    </main>
    <TheFooter class="footer" />
  </div>
</template>

<script lang="ts">
import TheHeader from "../components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
import Component from "vue-class-component";
import Vue from "vue";

@Component({
  components: {
    TheHeader,
    TheFooter,
  },
})
export default class PercentageToPX extends Vue {
  percentage = 0;

  converttopx() {
    if (this.percentage != 0) {
      return Number(this.percentage) / 6.25;
    }
  }
}
</script>

<style lang="scss" scoped>
.Containerpxtorem {
  width: 100vw;
  height: 100vh;
}
main {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 90vh;
  width: 100vw;

  h3 {
    font-size: 3rem;
    font-weight: 400;
  }

  .converter {
    margin-top: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    .box {
      width: 15rem;
      height: 3.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      span:nth-child(1) {
        font-size: 1.3rem;
        font-weight: 400;
        letter-spacing: 0.05em;
      }

      div {
        width: 100%;
        height: 100%;

        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #dcdcdc;
        padding: 0.5rem;

        input {
          border: transparent;
          outline: none;
          width: 100%;
          text-align: center;

          font-size: 1.5rem;
          font-weight: 400;
        }

        span {
          font-size: 1.3rem;
          opacity: 0.5;
        }
      }
    }
    a {
      img {
        height: 2rem;
        opacity: 0.5;
        margin-top: 1.5rem;
      }
    }
  }
  .description {
    margin-top: 2rem;
    width: 35rem;
    p {
      margin: 1.2rem;
    }
    .title {
      font-size: 2rem;
    }
    .title,
    .subtitle {
      font-weight: 400;
    }
  }
}

@media (max-width: 540px) {
  main {
    margin-top: 10rem;
    .converter {
      display: flex;
      align-items: center;
      flex-direction: column;
    }
  }
  .footer {
    margin-top: 20rem;
  }
}

@media (max-width: 414px) {
  main {
    h3:nth-child(1) {
      font-size: 1.8rem;
    }
    .description {
      width: 20rem;
    }
  }
}

@media (max-width: 280px) {
  main {
    .title {
      font-size: 4rem;
    }
    .description {
      width: 18rem;
    }
  }
}
</style>
