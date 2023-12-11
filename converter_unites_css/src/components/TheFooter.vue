<template>
  <footer>
    <strong>version: 0.1.0</strong>
    <a href="#">Developed from AndersonVilela</a>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  background: #584747;
  height: 5vh;
  padding: 0.5rem 0 0 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  color: #a88d8d;
  a {
    text-decoration: none;
    color: #a88d8d;
  }
}

@media (max-width: 280px) {
  footer {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    strong {
      font-size: 0.7rem;
    }
    a {
      font-size: 0.7rem;
    }
  }
}
</style>
