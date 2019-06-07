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