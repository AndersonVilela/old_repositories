<template>
  <div class="Container">
    <TheHeader />
    <main>
      <h2>Minimalist Online Calculators</h2>
      <nav class="nav">
        <ul>
          <li>
            <router-link to="/pxtorem">PX to REM converter</router-link>
          </li>
          <li>
            <router-link to="/remtopx">REM to PX converter</router-link>
          </li>
          <li>
            <router-link to="/pxtopercentage"
              >PX to percentage converter</router-link
            >
          </li>
          <li>
            <router-link to="/percentagetopx"
              >Percentage to PX converter</router-link
            >
          </li>
        </ul>
      </nav>
    </main>
    <TheFooter />
  </div>
</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
import TheHeader from "./TheHeader.vue";
import TheFooter from "./TheFooter.vue";

@Component({
  components: {
    TheFooter,
    TheHeader,
  },
})
export default class TheMenu extends Vue {}
</script>

<style lang="scss" scoped>
.Container {
  min-width: 100vw;
  min-height: 100vh;

  background: #fdfdfd;
  main {
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    h2 {
      font-style: normal;
      font-weight: 300;
      font-size: 40px;
      line-height: 59px;
      align-items: center;

      color: #000000;

      margin: 2rem 0 1.5rem 0;
    }
    .nav {
      width: 22rem;
      display: flex;
      justify-content: center;
      ul {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        text-align: start;
        li {
          width: 100%;
          a {
            font-style: normal;
            font-weight: 300;
            font-size: 1.6rem;
            line-height: 2.2rem;
            text-decoration: none;
            color: #000000;
          }
        }
      }
    }
  }
}

@media (max-width: 540px) {
  .Container {
    main {
      h2 {
        font-size: 2rem;
      }
      .nav {
        width: 18rem;
      }
    }
  }
}

@media (max-width: 280px) {
  .Container {
    main {
      height: 90vh;
      h2 {
        font-size: 1.4rem;
      }
      .nav {
        width: 11.5rem;
        ul {
          li {
            a {
              font-size: 1rem;
            }
          }
        }
      }
    }
  }
}
</style>
