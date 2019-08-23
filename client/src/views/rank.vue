<template>
  <div class="bodi">
    <audio autoplay loop>
        <source src="../audio/applause.mp3" type="audio/mp3" />
      </audio>
      <div class="rank">
          <h1>Ranking</h1>
      </div>
    <div class="format">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Username</th>
            <th scope="col">Point</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.bodi {
    height:100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.rank {
    margin-bottom: 2%;
}
</style>