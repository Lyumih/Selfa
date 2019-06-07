Vue.component("hero-card", {
  props: ["hero", "target", "getTarget"],
  template: `
  <div>
    <hero-target :hero="target"></hero-target>
    <hero-info :hero="hero"></hero-info>
    <hero-skill v-for="(skill, index) in hero.skills" :key="index" :skill="skill" :source="hero" :target="target"></hero-skill>
  </div>`
});

Vue.component("hero-info", {
  props: ["hero"],
  template: `
        <div>
          <p>Имя: {{ hero.name }}</p>  
          <p>Здоровье: {{ hero.hp }}</p>  
          <p>Урон: {{ hero.attack }}</p>  
        </div>
        `
});

Vue.component("hero-skill", {
  props: ["skill", "source", "target"],
  template: `<button @click='skill.use(source, target)' :title="skill.description + '. Откат: ' + skill.step">{{ skill.name }} {{skill.power}} </button>`
});

Vue.component("hero-target", {
  props: ["hero"],
  template: `<div>Цель: {{ hero.name }}</div>`
})

Vue.component("buttle-info", {
  props: ["logs", "step"],
  template: `
  <div>
    <p>Ход: {{ step }}</p>
    <div style="max-height: 150px; overflow: auto;">
     <buttle-log v-for="(log, index) in logs" :log="log" :key='index'></buttle-log>
    </div>
  </div>`
});

Vue.component("buttle-log", {
  props: ["log"],
  template: `<p>{{ log }}</p>`
});

var skills = [{
    name: "Атака",
    description: "Простая атака",
    power: 3,
    step: 0,
    use: function (source, target) {
      app.attack(this, source, target)
      // console.log(123)
    }
  },
  {
    name: "Защита",
    description: "Простая защита",
    power: 2,
    step: 2,
    use: function (source, target) {
      app.defence(this, source, target)
    }
  },
  {
    name: "Лечение",
    description: "Обычное лечение",
    power: 5,
    step: 4,
    use: function (source, target) {
      app.heal(this, source, target)
    }
  },
  {
    name: "Огенный шар",
    description: "Запускает огненный шар",
    power: 5,
    step: 8,
    use: function (source, target) {
      app.fireboll(this, source, target)
    }
  }
];

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
    attack: function (item, source, target) {
      target.hp -= source.attack
      this.logs.push('Герой "' + source.name + '" нанёс герою "' + target.name + '" ' + source.attack + ' урона.');
    },
    defence: function (item, source, target) {
      this.logs.push('У героя "' + source.name + '" зашита не удалась!');
    },
    heal: function (item, source, target) {
      target.hp += source.attack
      this.logs.push('Герой "' + source.name + '" вылечил герою "' + target.name + '" ' + source.attack + ' здоровья.');
    },
    fireboll: function (item, source, target) {
      console.log(item)
      target.hp -= source.attack
      this.logs.push('Герой "' + source.name + '" запусти в героя "' + target.name + '" огненный шар и отнял ' + source.attack + ' здоровья.');
    }
  }
});