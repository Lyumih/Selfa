var app = new Vue({
  el: "#app",
  data: {
    step: 0,
    heroes: [{
        name: "Мой герой",
        target: 1,
        hp: 10,
        attack: 3,
        skills: skills.slice(0, 3)
      },
      {
        name: "Враг",
        target: 0,
        hp: 20,
        attack: 2,
        skills: skills
      }
    ],
    logs: ["Бой начался"]
  },
  created() {
    var vm = this;
    setInterval(function () {
      vm.nextStep();
    }, 2000);
  },
  methods: {
    nextStep: function () {
      this.step++;
    },
    getTarget(index) {
      return this.heroes[index]
    },
    changeTarget(hero) {
      console.log(hero)
      hero.target === 0 ? hero.target = 1 : hero.target = 0
    },
    // УМЕНИЯ 
    attack: function (item, source, target) {

      target.hp -= (source.attack + item.power)
      this.logs.push('Герой "' + source.name + '" нанёс герою "' + target.name + '" ' + (source.attack + item.power) + ' урона.');
    },
    defence: function (item, source, target) {
      this.logs.push('У героя "' + source.name + '" зашита не удалась!');
    },
    heal: function (item, source, target) {
      target.hp += item.power
      this.logs.push('Герой "' + source.name + '" вылечил герою "' + target.name + '" ' + item.power + ' здоровья.');
    },
    fireboll: function (item, source, target) {
      console.log(item)
      target.hp -= item.power
      this.logs.push('Герой "' + source.name + '" запусти в героя "' + target.name + '" огненный шар и отнял ' + item.power + ' здоровья.');
    }
  }
});