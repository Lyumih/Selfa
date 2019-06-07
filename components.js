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