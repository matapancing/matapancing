<template>
  <div class="halo">
    <div class="atas">
      <p>
        Dari 9 pemain akan disusun satu tim inti bola volly yang terdiri dari 6 orang.
        Jika dua orang pemain diastikan menjadi tim inti
        maka banyaknya cara untuk menyusun tim inti adalah
      </p>
    </div>
    <div class="bawah">
      <div class="up">
        <div class="satu">
          <p>86 cara</p>
        </div>
        <div class="dua">
          <p>84 cara</p>
        </div>
      </div>
      <div class="down">
        <div class="tiga">
          <p>35 cara</p>
        </div>
        <div class="empat">
          <p>21 cara</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.atas {
  background: whitesmoke;
  width: 50%;
  height: 30%;
  margin-bottom: 5%;
  padding: 3%;
}
.bawah {
  width: 50%;
  height: 30%;
}
.halo {
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.up {
  height: 40%;
  width: 100%;
  margin-bottom: 5%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.down {
  height: 40%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.satu {
  height: 100%;
  width: 40%;
  background: whitesmoke;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2%;
}
.satu:hover {
  height: 100%;
  width: 40%;
  background: whitesmoke;
  -webkit-box-shadow: 0px 7px 13px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 7px 13px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 7px 13px 0px rgba(0, 0, 0, 0.75);
}
.dua:hover {
  height: 100%;
  width: 40%;
  background: whitesmoke;
  -webkit-box-shadow: 0px 7px 13px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 7px 13px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 7px 13px 0px rgba(0, 0, 0, 0.75);
}
.tiga:hover {
  height: 100%;
  width: 40%;
  background: whitesmoke;
  -webkit-box-shadow: 0px 7px 13px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 7px 13px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 7px 13px 0px rgba(0, 0, 0, 0.75);
}
.empat:hover {
  height: 100%;
  width: 40%;
  background: whitesmoke;
  -webkit-box-shadow: 0px 7px 13px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 7px 13px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 7px 13px 0px rgba(0, 0, 0, 0.75);
}
.dua {
  height: 100%;
  width: 40%;
  background: whitesmoke;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2%;
}
.tiga {
  height: 100%;
  width: 40%;
  background: whitesmoke;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2%;
}
.empat {
  height: 100%;
  width: 40%;
  background: whitesmoke;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2%;
}
</style>