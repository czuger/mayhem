// Notre objet de données
var traits = {
    'Aucun': { 'cout': 0 },
    'Berserker': { 'cout': 5 },
    'Discipliné' : { 'cout': 2 },
    'Entrainé' : { 'cout': 2 },
    'Peur' : { 'cout': 3 },
    'Terreur': { 'cout': 6 },
    'Sans peur': { 'cout': 5 },
    'Repousser': { 'cout': 1 },
    'Destruction': { 'cout': 3 },
    'Combattant sur plusieurs rangs': { 'cout': 2 },
    'Mur de boucliers': { 'cout': 3 },
    'Inébranlable': { 'cout': 2 }
}

var data = {
    unit_cost: 0,
    game_data: {
        'mouvement': {
            'd4': { 'cout': 1 },
            'd6' : { 'cout': 3 },
            'd8' : { 'cout': 5 },
            'd10': { 'cout': 7 },
            'd12': { 'cout': 9 }
        },
        'CQ': {
            'd20': { 'cout': 1 },
            'd12' : { 'cout': 3 },
            'd10' : { 'cout': 5 },
            'd8': { 'cout': 9 },
            'd6': { 'cout': 13 }
        },
        'BAR': {
            'd20': { 'cout': 1 },
            'd12' : { 'cout': 3 },
            'd10' : { 'cout': 5 },
            'd8': { 'cout': 9 },
            'd6': { 'cout': 13 }
        },
        'designation': {
            'Infanterie': { 'cout': 0 },
            'Cavalerie' : { 'cout': 4 },
            'Chariot' : { 'cout': 6 },
            'Bêtes': { 'cout': 2 },
            'Horde': { 'cout': 10 },
            'Nuée': { 'cout': 6 },
            'Béhémot': { 'cout': 6 },
            'Général': { 'cout': 0 },
        },
        'melee_weapons_designation': {
            'Aucune': { 'cout': 0 },
            'Epées': { 'cout': 1 },
            'Haches': { 'cout': 2 },
            'Contondantes' : { 'cout': 1 },
            'Grandes armes' : { 'cout': 2 },
            'Piques': { 'cout': 3 }
        },
        'missile_weapons_designation': {
            'Aucune': { 'cout': 0 },
            'Arc court': { 'cout': 6 },
            'Arc long' : { 'cout': 1 },
            'Arbalettes' : { 'cout': 7 },
            'Arbalettes lourdes': { 'cout': 8 },
            'Arbalettes à répétition' : { 'cout': 10 },
            'Sarbacanes': { 'cout': 5 },
            'Frondes' : { 'cout': 3 },
            'Tromblons' : { 'cout': 9 },
            'Pistolet': { 'cout': 5 },
            'Fusils' : { 'cout': 10 }
        },
        'cavalry_weapons_designation': {
            'Aucune': { 'cout': 0 },
            "Lance d'arçon": { 'cout': 2 }
        },
        'shield_designation': {
            'Non': { 'cout': 0 },
            'Bouclier' : { 'cout': 1 },
        },
        'armor_designation': {
            'Non': { 'cout': 0 },
            'Armure lourde' : { 'cout': 4 },
        },
        'hero_designation': {
            'Non': { 'cout': 0 },
            'Héro' : { 'cout': 6 },
            'Héroïque' : { 'cout': 6 }
        },
        'elite_designation': {
            'Non': { 'cout': 0 },
            'Elite' : { 'cout': 0 },
        },
        'fast_cavalry_designation': {
            'Non': { 'cout': 0 },
            'Cavalerie rapide' : { 'cout': 4 },
        },
        'flying_designation': {
            'Non': { 'cout': 0 },
            'Volant' : { 'cout': 3 },
        },
        'music_designation': {
            'Non': { 'cout': 0 },
            'Musicien' : { 'cout': 1 },
        },
        'trait_1_designation': traits,
        'trait_2_designation': traits,
        'trait_3_designation': traits,
        'trait_4_designation': traits,

    },
    data_defaults: ['Infanterie', 'Non', 'd10', 'Aucune', 'Aucun']
}

var vm = new Vue({
  // options
  el: '#app',
  data: data,

  mounted: function () {
    this.$nextTick(this.re_calc)
  },
  methods: {
    selected_value: function(lib) {
        if (data.data_defaults.indexOf(lib) >= 0)
            return 'selected';
        else{
            return '';
        }

        return Object.keys(data.game_data[lib]);
    },
    re_calc: function () {
      data.unit_cost = 0

      $("input:radio:checked").each(function(i, check) {
        sub_class = $(check).attr('sub_class')
        selected_item = $(check).attr('selected_item')

        cost = data.game_data[sub_class][selected_item]['cout']

        data.unit_cost += cost
      })
    }
  }
})