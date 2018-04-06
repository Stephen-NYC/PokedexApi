let ul = document.querySelector("ul")
class FuyGieri {
	constructor() {
		this.all = []
	}
	add(pokemon) {
		this.all.push(pokemon)
	}
}

class Pokemon {
	constructor(name, hp, attack, defense, abilities) {
		this.name = name;
		this.hp = hp;
		this.attack = attack;
		this.defense = defense;
		this.abilities = abilities;
	}
}


axios.get("https://pokeapi.co/api/v2/pokemon/97/")
	.then((response) => {
		let data = response.data
		let name = document.querySelector("#name")
		let ability1 = document.querySelector(".ability1")
		let ability2 = document.querySelector(".ability2")
		let ability3 = document.querySelector(".ability3")

		let hypno = new Pokemon()
		name.innerHTML = data.name
		hp.innerHTML = "HP: " + data.stats[5].base_stat
		attack.innerHTML = "ATTACK: " + data.stats[4].base_stat
		defense.innerHTML = "DEFENSE: " + data.stats[3].base_stat
		ability1.innerHTML = data.abilities[0].ability.name
		ability2.innerHTML = data.abilities[1].ability.name
		ability3.innerHTML = data.abilities[2].ability.name

	})
	.catch((error) => {
		console.log(error)
	})


axios.get("https://pokeapi.co/api/v2/pokemon/199/")
	.then((response) => {
		let data = response.data
		let name = document.querySelector("#name2")
		let hp = document.querySelector("#hp2")
		let attack = document.querySelector("#attack2")
		let defense = document.querySelector("#defense2")
		let ability1 = document.querySelector(".ability4")
		let ability2 = document.querySelector(".ability5")
		let ability3 = document.querySelector(".ability6")

		let slowking = new Pokemon()
		name.innerHTML = data.name
		hp.innerHTML = "HP: " + data.stats[5].base_stat
		attack.innerHTML = "ATTACK: " + data.stats[4].base_stat
		defense.innerHTML = "DEFENSE: " + data.stats[3].base_stat
		ability1.innerHTML = data.abilities[0].ability.name
		ability2.innerHTML = data.abilities[1].ability.name
		ability3.innerHTML = data.abilities[2].ability.name

	})
	.catch((error) => {
		console.log(error)
	})
axios.get("https://pokeapi.co/api/v2/pokemon/108/")
	.then((response) => {
		let data = response.data
		let name = document.querySelector("#name3")
		let hp = document.querySelector("#hp3")
		let attack = document.querySelector("#attack3")
		let defense = document.querySelector("#defense3")
		let ability1 = document.querySelector(".ability7")
		let ability2 = document.querySelector(".ability8")
		let ability3 = document.querySelector(".ability9")

		let lickitung = new Pokemon()
		name.innerHTML = data.name
		hp.innerHTML = "HP: " + data.stats[5].base_stat
		attack.innerHTML = "ATTACK: " + data.stats[4].base_stat
		defense.innerHTML = "DEFENSE: " + data.stats[3].base_stat
		ability1.innerHTML = data.abilities[0].ability.name
		ability2.innerHTML = data.abilities[1].ability.name
		ability3.innerHTML = data.abilities[2].ability.name

	})
	.catch((error) => {
		console.log(error)
	})