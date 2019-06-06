Vue.component("hero-card", {
  props: ["hero"],
  template: `
  <div>
    <hero-info :hero="hero"></hero-info>
    <hero-skill v-for="skill in hero.skills" :skill="skill"></hero-skill>
  </div>`
});

Vue.component("hero-info", {
  props: ["hero"],
  template: `
        <div>
          <p>Имя: {{ hero.name }}</p>  
          <p>Здоровье: {{ hero.hp }}</p>  
          <p>Урон: {{ hero.atack }}</p>  
        </div>
        `
});

Vue.component("hero-skill", {
  props: ["skill"],
  template: `<button :title="skill.description + '. Откат: ' + skill.step">{{ skill.name }} {{skill.power}} </button>`
});

Vue.component("buttle-info", {
  props: ["logs"],
  template: `
  <div style="max-height: 200px; overflow: auto;">
  <p>Боевое поле</p>
  <buttle-log v-for="log in logs" :log="log"></buttle-log>
  </div>`
});

Vue.component("buttle-log", {
  props: ["log"],
  template: `<p>{{ log }}</p>`
});

var skills = [
  {
    name: "Атака",
    description: "Простая атака",
    power: 3,
    step: 0
  },
  {
    name: "Защита",
    description: "Простая защита",
    power: 2,
    step: 2
  },
  {
    name: "Лечение",
    description: "Обычное лечение",
    power: 5,
    step: 4
  },
  {
    name: "Огенный шар",
    description: "Запускает огненный шар",
    power: 5,
    step: 8
  }
];
var app = new Vue({
  el: "#app",
  data: {
    step: 0,
    heroes: [
      {
        name: "Герой 1",
        hp: 10,
        atack: 3,
        skills: skills.slice(0, 3)
      },
      {
        name: "Герой 2",
        hp: 20,
        atack: 2,
        skills: skills
      }
    ],
    logs: ["Бой начался", "Приготовления к битве"]
  },
  created() {
    var vm = this;
    setInterval(function() {
      vm.nextStep();
    }, 2000);
  },

  methods: {
    nextStep: function() {
      this.step++;
      this.logs.push("Ход " + this.step);
    }
  }
});
