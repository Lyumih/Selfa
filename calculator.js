var app = new Vue({
  el: "#app",
  data: {
    lvl: 1,
    lvlMax: 4,
    power: 2,
    powerMax: 10,
    cost: 3,
    costMax: 4,
    cooldown: 8,
    cooldownMax: 3,
    result: ""
  },
  methods: {
    calc: function() {
      console.log("calc");
      this.result =
        "lvl def: " +
        (this.lvlMax - this.lvl) +
        " power: " +
        this.powerMax / this.power +
        ". cost: " +
        this.costMax / this.cost +
        ". cooldown: " +
        this.cooldownMax / this.cooldown;
    }
  }
});
