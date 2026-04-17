const generosDOM = document.getElementById("generos")
const tarjetas = document.getElementById("tarjetas")
const busqueda = document.getElementById("busqueda")
const titulo_portada = document.getElementById("titulo_portada")
const descripcion = document.getElementById("descripcion")
const portada = document.getElementById("portada")

const imdbTop250 = [
    {
        rank: 1,
        title: "The Shawshank Redemption",
        url: "https://www.imdb.com/title/tt0111161/",
        image: "https://m.media-amazon.com/images/M/MV5BMDAyY2FhYjctNDc5OS00MDNlLThiMGUtY2UxYWVkNGY2ZjljXkEyXkFqcGc@._V1_.jpg",
        description: "A banker convicted of uxoricide forms a friendship over a quarter century with a hardened convict, while maintaining his innocence and trying to remain hopeful through simple compassion.",
        content_rating: "R",
        duration: "PT2H22M",
        genres: ["Drama"],
        rating: 9.3,
        rating_count: 3086121
    },
    {
        rank: 2,
        title: "The Godfather",
        url: "https://www.imdb.com/title/tt0068646/",
        image: "https://m.media-amazon.com/images/M/MV5BNGEwYjgwOGQtYjg5ZS00Njc1LTk2ZGEtM2QwZWQ2NjdhZTE5XkEyXkFqcGc@._V1_.jpg",
        description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
        content_rating: "R",
        duration: "PT2H55M",
        genres: ["Crime", "Drama"],
        rating: 9.2,
        rating_count: 2151993
    },
    {
        rank: 3,
        title: "The Dark Knight",
        url: "https://www.imdb.com/title/tt0468569/",
        image: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
        description: "When a menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman, James Gordon and Harvey Dent must work together to put an end to the madness.",
        content_rating: "PG-13",
        duration: "PT2H32M",
        genres: ["Action", "Crime", "Drama"],
        rating: 9.1,
        rating_count: 3061260
    },
    {
        rank: 4,
        title: "The Godfather Part II",
        url: "https://www.imdb.com/title/tt0071562/",
        image: "https://m.media-amazon.com/images/M/MV5BMDIxMzBlZDktZjMxNy00ZGI4LTgxNDEtYWRlNzRjMjJmOGQ1XkEyXkFqcGc@._V1_.jpg",
        description: "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.",
        content_rating: "R",
        duration: "PT3H22M",
        genres: ["Crime", "Drama"],
        rating: 9.0,
        rating_count: 1447074
    },
    {
        rank: 5,
        title: "12 Angry Men",
        url: "https://www.imdb.com/title/tt0050083/",
        image: "https://m.media-amazon.com/images/M/MV5BYjE4NzdmOTYtYjc5Yi00YzBiLWEzNDEtNTgxZGQ2MWVkN2NiXkEyXkFqcGc@._V1_.jpg",
        description: "The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence before jumping to a hasty verdict.",
        content_rating: "Approved",
        duration: "PT1H36M",
        genres: ["Crime", "Drama"],
        rating: 9.0,
        rating_count: 943640
    },
    {
        rank: 6,
        title: "The Lord of the Rings: The Return of the King",
        url: "https://www.imdb.com/title/tt0167260/",
        image: "https://m.media-amazon.com/images/M/MV5BMTZkMjBjNWMtZGI5OC00MGU0LTk4ZTItODg2NWM3NTVmNWQ4XkEyXkFqcGc@._V1_.jpg",
        description: "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
        content_rating: "PG-13",
        duration: "PT3H21M",
        genres: ["Adventure", "Drama", "Fantasy"],
        rating: 9.0,
        rating_count: 2100721
    },
    {
        rank: 7,
        title: "Schindler's List",
        url: "https://www.imdb.com/title/tt0108052/",
        image: "https://m.media-amazon.com/images/M/MV5BNjM1ZDQxYWUtMzQyZS00MTE1LWJmZGYtNGUyNTdlYjM3ZmVmXkEyXkFqcGc@._V1_.jpg",
        description: "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
        content_rating: "R",
        duration: "PT3H15M",
        genres: ["Biography", "Drama", "History"],
        rating: 9.0,
        rating_count: 1540861
    },
    {
        rank: 8,
        title: "Pulp Fiction",
        url: "https://www.imdb.com/title/tt0110912/",
        image: "https://m.media-amazon.com/images/M/MV5BYTViYTE3ZGQtNDBlMC00ZTAyLTkyODMtZGRiZDg0MjA2YThkXkEyXkFqcGc@._V1_.jpg",
        description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        content_rating: "R",
        duration: "PT2H34M",
        genres: ["Crime", "Drama"],
        rating: 8.8,
        rating_count: 2361636
    },
    {
        rank: 9,
        title: "The Lord of the Rings: The Fellowship of the Ring",
        url: "https://www.imdb.com/title/tt0120737/",
        image: "https://m.media-amazon.com/images/M/MV5BNzIxMDQ2YTctNDY4MC00ZTRhLTk4ODQtMTVlOWY4NTdiYmMwXkEyXkFqcGc@._V1_.jpg",
        description: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
        content_rating: "PG-13",
        duration: "PT2H58M",
        genres: ["Adventure", "Drama", "Fantasy"],
        rating: 8.9,
        rating_count: 2133256
    },
    {
        rank: 10,
        title: "Il buono, il brutto, il cattivo",
        url: "https://www.imdb.com/title/tt0060196/",
        image: "https://m.media-amazon.com/images/M/MV5BMWM5ZjQxM2YtNDlmYi00ZDNhLWI4MWUtN2VkYjBlMTY1ZTkwXkEyXkFqcGc@._V1_.jpg",
        description: "A bounty-hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.",
        content_rating: "R",
        duration: "PT2H58M",
        genres: ["Adventure", "Drama", "Western"],
        rating: 8.8,
        rating_count: 865327
    },
    {
        rank: 11,
        title: "Forrest Gump",
        url: "https://www.imdb.com/title/tt0109830/",
        image: "https://m.media-amazon.com/images/M/MV5BNDYwNzVjMTItZmU5YS00YjQ5LTljYjgtMjY2NDVmYWMyNWFmXkEyXkFqcGc@._V1_.jpg",
        description: "The history of the United States from the 1950s to the '70s unfolds from the perspective of an Alabama man with an IQ of 75, who yearns to be reunited with his childhood sweetheart.",
        content_rating: "PG-13",
        duration: "PT2H22M",
        genres: ["Drama", "Romance"],
        rating: 8.8,
        rating_count: 2410268
    },
    {
        rank: 12,
        title: "The Lord of the Rings: The Two Towers",
        url: "https://www.imdb.com/title/tt0167261/",
        image: "https://m.media-amazon.com/images/M/MV5BMGQxMDdiOWUtYjc1Ni00YzM1LWE2NjMtZTg3Y2JkMjEzMTJjXkEyXkFqcGc@._V1_.jpg",
        description: "While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman, and his hordes of Isengard.",
        content_rating: "PG-13",
        duration: "PT2H59M",
        genres: ["Adventure", "Drama", "Fantasy"],
        rating: 8.8,
        rating_count: 1894851
    },
    {
        rank: 13,
        title: "Fight Club",
        url: "https://www.imdb.com/title/tt0137523/",
        image: "https://m.media-amazon.com/images/M/MV5BOTgyOGQ1NDItNGU3Ny00MjU3LTg2YWEtNmEyYjBiMjI1Y2M5XkEyXkFqcGc@._V1_.jpg",
        description: "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
        content_rating: "R",
        duration: "PT2H19M",
        genres: ["Crime", "Drama", "Thriller"],
        rating: 8.8,
        rating_count: 2503400
    },
    {
        rank: 14,
        title: "Inception",
        url: "https://www.imdb.com/title/tt1375666/",
        image: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
        description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
        content_rating: "PG-13",
        duration: "PT2H28M",
        genres: ["Action", "Adventure", "Sci-Fi"],
        rating: 8.8,
        rating_count: 2719456
    },
    {
        rank: 15,
        title: "Star Wars: Episode V - The Empire Strikes Back",
        url: "https://www.imdb.com/title/tt0080684/",
        image: "https://m.media-amazon.com/images/M/MV5BMTkxNGFlNDktZmJkNC00MDdhLTg0MTEtZjZiYWI3MGE5NWIwXkEyXkFqcGc@._V1_.jpg",
        description: "After the Empire overpowers the Rebel Alliance, Luke Skywalker begins training with Jedi Master Yoda, while Darth Vader and bounty hunter Boba Fett pursue his friends across the galaxy.",
        content_rating: "PG",
        duration: "PT2H4M",
        genres: ["Action", "Adventure", "Fantasy"],
        rating: 8.7,
        rating_count: 1460900
    },
    {
        rank: 16,
        title: "The Matrix",
        url: "https://www.imdb.com/title/tt0133093/",
        image: "https://m.media-amazon.com/images/M/MV5BN2NmN2VhMTQtMDNiOS00NDlhLTliMjgtODE2ZTY0ODQyNDRhXkEyXkFqcGc@._V1_.jpg",
        description: "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
        content_rating: "R",
        duration: "PT2H16M",
        genres: ["Action", "Sci-Fi"],
        rating: 8.7,
        rating_count: 2179575
    },
    {
        rank: 17,
        title: "GoodFellas",
        url: "https://www.imdb.com/title/tt0099685/",
        image: "https://m.media-amazon.com/images/M/MV5BN2E5NzI2ZGMtY2VjNi00YTRjLWI1MDUtZGY5OWU1MWJjZjRjXkEyXkFqcGc@._V1_.jpg",
        description: "The story of Henry Hill and his life in the mafia, covering his relationship with his wife Karen and his mob partners Jimmy Conway and Tommy DeVito.",
        content_rating: "R",
        duration: "PT2H25M",
        genres: ["Biography", "Crime", "Drama"],
        rating: 8.7,
        rating_count: 1343752
    },
    {
        rank: 18,
        title: "Interstellar",
        url: "https://www.imdb.com/title/tt0816692/",
        image: "https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_.jpg",
        description: "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
        content_rating: "PG-13",
        duration: "PT2H49M",
        genres: ["Adventure", "Drama", "Sci-Fi"],
        rating: 8.7,
        rating_count: 2391188
    },
    {
        rank: 19,
        title: "One Flew Over the Cuckoo's Nest",
        url: "https://www.imdb.com/title/tt0073486/",
        image: "https://m.media-amazon.com/images/M/MV5BYjBkMjgzMzYtNzRiMS00NDc3LWE4YTUtZjYxYjZhNjNhYzhhXkEyXkFqcGc@._V1_.jpg",
        description: "A rebellious convict is sent to a psychiatric hospital for evaluation in 1963 Oregon, and encourages his docile companions to take more control of their lives and defy the tyrannical head nurse.",
        content_rating: "R",
        duration: "PT2H13M",
        genres: ["Drama"],
        rating: 8.7,
        rating_count: 1128369
    },
    {
        rank: 20,
        title: "Se7en",
        url: "https://www.imdb.com/title/tt0114369/",
        image: "https://m.media-amazon.com/images/M/MV5BY2IzNzMxZjctZjUxZi00YzAxLTk3ZjMtODFjODdhMDU5NDM1XkEyXkFqcGc@._V1_.jpg",
        description: "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.",
        content_rating: "R",
        duration: "PT2H7M",
        genres: ["Crime", "Drama", "Mystery"],
        rating: 8.6,
        rating_count: 1939656
    },
    {
        rank: 21,
        title: "It's a Wonderful Life",
        url: "https://www.imdb.com/title/tt0038650/",
        image: "https://m.media-amazon.com/images/M/MV5BMDM4OWFhYjEtNTE5Yy00NjcyLTg5N2UtZDQwNDZlYjlmNDU5XkEyXkFqcGc@._V1_.jpg",
        description: "An angel is sent from Heaven to help a desperately frustrated businessman by showing him what life would have been like if he had never existed.",
        content_rating: "PG",
        duration: "PT2H10M",
        genres: ["Drama", "Family", "Fantasy"],
        rating: 8.6,
        rating_count: 532998
    },
    {
        rank: 22,
        title: "The Silence of the Lambs",
        url: "https://www.imdb.com/title/tt0102926/",
        image: "https://m.media-amazon.com/images/M/MV5BNDdhOGJhYzctYzYwZC00YmI2LWI0MjctYjg4ODdlMDExYjBlXkEyXkFqcGc@._V1_.jpg",
        description: "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
        content_rating: "R",
        duration: "PT1H58M",
        genres: ["Crime", "Drama", "Horror"],
        rating: 8.6,
        rating_count: 1656713
    },
    {
        rank: 23,
        title: "Shichinin no samurai",
        url: "https://www.imdb.com/title/tt0047478/",
        image: "https://m.media-amazon.com/images/M/MV5BZjliMWExOTMtZDQ3ZS00NWU3LWIyN2EtMjllNzk3ZTNlYzg4XkEyXkFqcGc@._V1_.jpg",
        description: "Farmers from a village exploited by bandits hire a veteran samurai for protection, and he gathers six other samurai to join him.",
        content_rating: "Not Rated",
        duration: "PT3H27M",
        genres: ["Action", "Drama"],
        rating: 8.6,
        rating_count: 389508
    },
    {
        rank: 24,
        title: "Saving Private Ryan",
        url: "https://www.imdb.com/title/tt0120815/",
        image: "https://m.media-amazon.com/images/M/MV5BZGZhZGQ1ZWUtZTZjYS00MDJhLWFkYjctN2ZlYjE5NWYwZDM2XkEyXkFqcGc@._V1_.jpg",
        description: "Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose comrades have been killed in action.",
        content_rating: "R",
        duration: "PT2H49M",
        genres: ["Drama", "War"],
        rating: 8.6,
        rating_count: 1587915
    },
    {
        rank: 25,
        title: "The Green Mile",
        url: "https://www.imdb.com/title/tt0120689/",
        image: "https://m.media-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_.jpg",
        description: "A death row guard learns that a gentle giant in his charge possesses a mysterious gift.",
        content_rating: "R",
        duration: "PT3H9M",
        genres: ["Crime", "Drama", "Fantasy"],
        rating: 8.6,
        rating_count: 1505572
    },
    {
        rank: 26,
        title: "Cidade de Deus",
        url: "https://www.imdb.com/title/tt0317248/",
        image: "https://m.media-amazon.com/images/M/MV5BYjY4NGI5OTUtY2ZlZS00Zjk4LTk5N2MtN2JmYWVjNGNmMGRlXkEyXkFqcGc@._V1_.jpg",
        description: "In the slums of Rio, two kids' paths diverge as one struggles to become a photographer and the other a kingpin.",
        content_rating: "R",
        duration: "PT2H10M",
        genres: ["Crime", "Drama"],
        rating: 8.6,
        rating_count: 846597
    },
    {
        rank: 27,
        title: "La vita è bella",
        url: "https://www.imdb.com/title/tt0118799/",
        image: "https://m.media-amazon.com/images/M/MV5BZTBhOGYzZjQtYzE0Mi00MGIwLWE0MWYtNzMxNTM2OTFkM2NjXkEyXkFqcGc@._V1_.jpg",
        description: "When an open-minded Jewish waiter and his son become victims of the Holocaust, he uses a perfect mixture of will, humor and imagination to protect his son from the dangers around their camp.",
        content_rating: "PG-13",
        duration: "PT1H56M",
        genres: ["Comedy", "Drama", "Romance"],
        rating: 8.6,
        rating_count: 787459
    },
    {
        rank: 28,
        title: "Terminator 2: Judgment Day",
        url: "https://www.imdb.com/title/tt0103064/",
        image: "https://m.media-amazon.com/images/M/MV5BNGMyMGNkMDUtMjc2Ni00NWFlLTgyODEtZTY2MzBiZTg0OWZiXkEyXkFqcGc@._V1_.jpg",
        description: "A cyborg, identical to the one who failed to kill Sarah Connor, must now protect her ten year old son John from an even more advanced and powerful cyborg.",
        content_rating: "R",
        duration: "PT2H17M",
        genres: ["Action", "Adventure", "Sci-Fi"],
        rating: 8.6,
        rating_count: 1246890
    },
    {
        rank: 29,
        title: "Star Wars",
        url: "https://www.imdb.com/title/tt0076759/",
        image: "https://m.media-amazon.com/images/M/MV5BOGUwMDk0Y2MtNjBlNi00NmRiLTk2MWYtMGMyMDlhYmI4ZDBjXkEyXkFqcGc@._V1_.jpg",
        description: "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia.",
        content_rating: "PG",
        duration: "PT2H1M",
        genres: ["Action", "Adventure", "Fantasy"],
        rating: 8.6,
        rating_count: 1527535
    },
    {
        rank: 30,
        title: "Back to the Future",
        url: "https://www.imdb.com/title/tt0088763/",
        image: "https://m.media-amazon.com/images/M/MV5BZmM3ZjE0NzctNjBiOC00MDZmLTgzMTUtNGVlOWFlOTNiZDJiXkEyXkFqcGc@._V1_.jpg",
        description: "Marty McFly, a 17-year-old high school student, is accidentally sent 30 years into the past in a time-traveling DeLorean invented by his close friend, the maverick scientist Doc Brown.",
        content_rating: "PG",
        duration: "PT1H56M",
        genres: ["Adventure", "Comedy", "Sci-Fi"],
        rating: 8.5,
        rating_count: 1396652
    }
]
const generos = []

if (!localStorage.getItem("Favoritos")) {
    localStorage.setItem("Favoritos", JSON.stringify([]))
}

imdbTop250.flatMap(value => value.genres).forEach(genero => {
    if (!generos.includes(genero)) {
        generos.push(genero)
    }
})

generos.map((genero, index) => (
    generosDOM.innerHTML +=
    `<option value=${genero}>
        ${genero}
    </option>`)
)

const favMark = () => {
    const addFav = document.querySelectorAll(".addFav")
    addFav.forEach(boton => {
        console.log("si")
        if (JSON.parse(localStorage.getItem("Favoritos")).includes(Number(boton.id))) {
            boton.innerHTML = `<i class="fa-solid fa-heart"></i>`
        }

    })
}

const total_fav = document.getElementById("total_fav")

const Descargar = () => {
    const addDownload = document.querySelectorAll(".addDownload")
    addDownload.forEach(boton => {
        if (JSON.parse(localStorage.getItem("Downloads")).includes(Number(boton.id.slice(0,boton.id.length-1)))) {
            boton.innerHTML = `<i class="fa-solid fa-check"></i>`
        }

        boton.addEventListener("click", (e) => {
            imdbTop250.map(valor => {
                if (valor.rank == Number(boton.id.slice(0,boton.id.length-1))) {

                    if (!JSON.parse(localStorage.getItem("Downloads")).includes(Number(boton.id.slice(0,boton.id.length-1))) || localStorage.getItem("Downloads").length == 0) {
                        boton.innerHTML = `<i class="fa-solid fa-check"></i>`
                        const listaFav = JSON.parse(localStorage.getItem("Downloads"))
                        listaFav.push(Number(boton.id.slice(0,boton.id.length-1)))

                        localStorage.setItem("Downloads", JSON.stringify(listaFav))
                    }

                    else {

                        const newListaFav = JSON.parse(localStorage.getItem("Downloads")).filter(item => item !== Number(boton.id.slice(0,boton.id.length-1)))
                        console.log(newListaFav)
                        localStorage.setItem("Downloads", JSON.stringify(newListaFav))
                        // valor.Favorito = false
                        boton.innerHTML = `<i class="fa-solid fa-download"></i>`


                    }
                }
            })
        })

    })

}


const mostrarPelis = () => {
    tarjetas.innerHTML = ``
    if (JSON.parse(localStorage.getItem("Favoritos")).length > 1 || JSON.parse(localStorage.getItem("Favoritos")).length == 0) {
        total_fav.textContent = `${JSON.parse(localStorage.getItem("Favoritos")).length} favoritos`
    }
    else {
        total_fav.textContent = `${JSON.parse(localStorage.getItem("Favoritos")).length} favorito`

    }
    imdbTop250.map(valor => {

        if (JSON.parse(localStorage.getItem("Favoritos")).includes(valor.rank)) {
            tarjetas.innerHTML += `
            <div class="tarjeta">
    
            <div class="imagen">
            <img src=${valor.image} alt="">
            </div>
                <h3>${valor.title}</h3>
                <div class="info">
                    <div>
                        <i class="fa-solid fa-star"></i> ${valor.rating}
                        <button type="button" id=${valor.rank} class="addFav"><i class="fa-regular fa-heart"></i></button>
                        <button type="button" class="addFav"><i class="fa-regular fa-clock"></i></button>
    
                    </div>
    
                    <div class="genPlay">
                        <div>${valor.genres}</div>
                    <button type="button" class="addDownload" id=${valor.rank}D>
                            <i class="fa-solid fa-download"></i>
                        </button>
                    </div>
                </div>
    
            </div>`

        }


    })
    favMark()

    return

}

const Favoritos = () => {
    const addFav = document.querySelectorAll(".addFav")
    addFav.forEach(boton => {

        boton.addEventListener("click", (e) => {
            imdbTop250.map(valor => {
                if (JSON.parse(localStorage.getItem("Favoritos")).includes(Number(boton.id))) {

                    if (JSON.parse(localStorage.getItem("Favoritos")).includes(Number(boton.id)) || localStorage.getItem("Favoritos").length == 0) {

                        const newListaFav = JSON.parse(localStorage.getItem("Favoritos")).filter(item => item !== Number(boton.id))
                        console.log(newListaFav)
                        localStorage.setItem("Favoritos", JSON.stringify(newListaFav))
                        // valor.Favorito = false

                        boton.innerHTML = `<i class="fa-regular fa-heart"></i>`

                    }
                }
            })
            mostrarPelis()
            Favoritos()
            Descargar()
        })

    })

}



generosDOM.addEventListener("click", () => {
    tarjetas.innerHTML = ``
    if (generosDOM.value === "Todas") {
        // portada.style.display = "flex"
        mostrarPelis()
        return Favoritos()
    }
    // portada.style.display = "none"
    imdbTop250.map((valor) => {
        if (valor.genres.includes(generosDOM.value) && JSON.parse(localStorage.getItem("Favoritos")).includes(Number(valor.rank))) {

            tarjetas.innerHTML += `
            <div class="tarjeta">
                <img src=${valor.image} alt="">

                <h3>${valor.title}</h3>

                <div class="info">
                <div>
                    <i class="fa-solid fa-star"></i> ${valor.rating}
                    <button type="button" id=${valor.rank} class="addFav"><i class="fa-regular fa-heart"></i></button>
                    <button type="button" class="addFav"><i class="fa-regular fa-clock"></i></button>
                </div>
                <div class="genPlay">
                    <div>${valor.genres}</div>
                    <button type="button" class="addDownload" id=${valor.rank}D>
                        <i class="fa-solid fa-download"></i>
                    </button>
                </div>
            </div>`
        }

    })
    favMark()
    Favoritos()
    Descargar()
})


busqueda.addEventListener("input", () => {

    tarjetas.innerHTML = ``
    if (busqueda.value === "") {
        // portada.style.display = "flex"
        console.log("YES")
        mostrarPelis()
        Favoritos()
        return Descargar()

    }
    // portada.style.display = "none"
    imdbTop250.filter((valor) => {
        if (valor.title.toLowerCase().includes(busqueda.value.toLowerCase()) && JSON.parse(localStorage.getItem("Favoritos")).includes(Number(valor.rank))) {

            tarjetas.innerHTML += `
            <div class="tarjeta">
                <img src=${valor.image} alt="">

                <h3>${valor.title}</h3>
                        <div class="info">
                <div>
                    <i class="fa-solid fa-star"></i> ${valor.rating}
                    <button type="button" id=${valor.rank} class="addFav"><i class="fa-regular fa-heart"></i></button>
                    <button type="button" class="addFav"><i class="fa-regular fa-clock"></i></button>

                </div>
                <div class="genPlay">
                    <div>${valor.genres}</div>
                    <button type="button" class="addDownload" id=${valor.rank}D>
                        <i class="fa-solid fa-download"></i>
                    </button>
                </div>
            </div>`
        }

    })
    favMark()
    Favoritos()
    Descargar()
})


mostrarPelis()
Favoritos()
Descargar()
