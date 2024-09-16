const data = [
    {
        "title": "Seated Female Nude",
        "place_of_origin": "France",
        "artist_display": "André Lhote (French, 1885-1962)",
        "inscriptions": "Signed recto, lower right, in pen and black ink: 'A. Lhote'",
        "date_start": 1925,
        "date_end": 1925
    },
    {
        "title": "The Praying Jew",
        "place_of_origin": "France",
        "artist_display": "Marc Chagall (Born Vitebsk, 1887; died Saint-Paul, France, 1985)",
        "inscriptions": "Signed, lower right: 'MArc / ChAgAll'",
        "date_start": 1923,
        "date_end": 1923
    },
    {
        "title": "Claudine Resting",
        "place_of_origin": "United States",
        "artist_display": "Jules Pascin (American, born Bulgaria, 1885-1930)",
        "inscriptions": "Signed in lower corner: 'Pascin'",
        "date_start": 1913,
        "date_end": 1913
    },
    {
        "title": "La Java",
        "place_of_origin": "France",
        "artist_display": "Georges Emile Capon (French, 1890-1980)",
        "inscriptions": "Signed and dated lower left: 'Capon 25'",
        "date_start": 1925,
        "date_end": 1925
    },
    {
        "title": "Interior at Nice",
        "place_of_origin": "France",
        "artist_display": "Henri Matisse (French, 1869-1954)",
        "inscriptions": "No inscriptions found. Possible signature or dedication not visible.",
        "date_start": 1919,
        "date_end": 1920
    },
    {
        "title": "Head of War (Study for Meade Memorial)",
        "place_of_origin": "United States",
        "artist_display": "Charles Grafly (American, 1862-1929)",
        "inscriptions": "No inscriptions found. Likely unsigned.",
        "date_start": 1921,
        "date_end": 1921
    },
    {
        "title": "The Bath",
        "place_of_origin": "United States",
        "artist_display": "Mary Cassatt (American, 1844-1926)",
        "inscriptions": "No inscriptions found. Title based on subject matter.",
        "date_start": 1890,
        "date_end": 1891
    },
    {
        "title": "Chickens",
        "place_of_origin": "United States",
        "artist_display": "Edgar Miller (American, 1899-1964)",
        "inscriptions": "No inscriptions found. Title descriptive of content.",
        "date_start": 1933,
        "date_end": 1933
    },
    {
        "title": "Vessel Depicting K'awiil (God K) and Itzamna Exchanging Gifts",
        "place_of_origin": "Guatemala",
        "artist_display": "Ceramist unknown (Late Classic Maya)",
        "inscriptions": "No inscriptions found. Identified based on depicted imagery.",
        "date_start": 700,
        "date_end": 800
    },
    {
        "title": "Blue and Green Music",
        "place_of_origin": "United States",
        "artist_display": "Georgia O'Keeffe (American, 1887–1986)",
        "inscriptions": null,
        "date_start": 1919,
        "date_end": 1921
    },
    {
        "title": "On a Balcony",
        "place_of_origin": "France",
        "artist_display": "Mary Cassatt (American, 1844–1926)",
        "inscriptions": "Signed recto, bottom-left, on grass, in red pigment: \"Mary Cassatt.\".",
        "date_start": 1878,
        "date_end": 1879
    },

    {
        "title": "Whispering Pines",
        "place_of_origin": "Germany",
        "artist_display": "Hannah Müller (German, 1820–1905)",
        "inscriptions": "Signed bottom-right: \"Hannah Müller.\"",
        "date_start": 1850,
        "date_end": 1855
    },
    {
        "title": "Sunset Over Fields",
        "place_of_origin": "France",
        "artist_display": "Jean Dubois (French, 1880–1945)",
        "inscriptions": "Signed bottom-left: \"Jean Dubois.\"",
        "date_start": 1920,
        "date_end": 1925
    },
    {
        "title": "City Lights",
        "place_of_origin": "United States",
        "artist_display": "Alice Johnson (American, 1895–1960)",
        "inscriptions": "Signed bottom-right: \"Alice Johnson.\"",
        "date_start": 1935,
        "date_end": 1938
    },
    {
        "title": "Mountain Pass",
        "place_of_origin": "Switzerland",
        "artist_display": "Felix Steiner (Swiss, 1865–1932)",
        "inscriptions": "Signed bottom-center: \"Felix Steiner.\"",
        "date_start": 1900,
        "date_end": 1905
    },
    {
        "title": "Autumn Leaves",
        "place_of_origin": "Canada",
        "artist_display": "Emily Thompson (Canadian, 1870–1950)",
        "inscriptions": "Signed bottom-left: \"Emily Thompson.\"",
        "date_start": 1910,
        "date_end": 1912
    },
    {
        "title": "Reflections",
        "place_of_origin": "Spain",
        "artist_display": "Carlos Ortega (Spanish, 1885–1940)",
        "inscriptions": "Signed bottom-right: \"Carlos Ortega.\"",
        "date_start": 1925,
        "date_end": 1930
    },
    {
        "title": "Ocean Breeze",
        "place_of_origin": "Portugal",
        "artist_display": "Ana Costa (Portuguese, 1900–1980)",
        "inscriptions": "Signed bottom-right: \"Ana Costa.\"",
        "date_start": 1950,
        "date_end": 1955
    },
    {
        "title": "Golden Horizon",
        "place_of_origin": "Netherlands",
        "artist_display": "Willem van der Meer (Dutch, 1860–1945)",
        "inscriptions": "Signed bottom-center: \"Willem van der Meer.\"",
        "date_start": 1915,
        "date_end": 1920
    },
    {
        "title": "The Old Bridge",
        "place_of_origin": "Austria",
        "artist_display": "Johann Schmidt (Austrian, 1870–1940)",
        "inscriptions": "Signed bottom-left: \"Johann Schmidt.\"",
        "date_start": 1920,
        "date_end": 1923
    },
    {
        "title": "Dusk in the City",
        "place_of_origin": "Italy",
        "artist_display": "Marco Rossi (Italian, 1890–1965)",
        "inscriptions": "Signed bottom-right: \"Marco Rossi.\"",
        "date_start": 1950,
        "date_end": 1955
    },
    {
        "title": "Silent Forest",
        "place_of_origin": "Finland",
        "artist_display": "Esa Virtanen (Finnish, 1880–1965)",
        "inscriptions": "Signed bottom-left: \"Esa Virtanen.\"",
        "date_start": 1930,
        "date_end": 1935
    },
    {
        "title": "Early Morning",
        "place_of_origin": "Sweden",
        "artist_display": "Sven Johansson (Swedish, 1865–1940)",
        "inscriptions": "Signed bottom-center: \"Sven Johansson.\"",
        "date_start": 1920,
        "date_end": 1923
    },
    {
        "title": "Lush Valley",
        "place_of_origin": "Italy",
        "artist_display": "Giovanni Bianchi (Italian, 1875–1948)",
        "inscriptions": "Signed bottom-right: \"Giovanni Bianchi.\"",
        "date_start": 1920,
        "date_end": 1925
    },
    {
        "title": "Starlit Night",
        "place_of_origin": "France",
        "artist_display": "Claire Dubois (French, 1900–1980)",
        "inscriptions": "Signed bottom-left: \"Claire Dubois.\"",
        "date_start": 1945,
        "date_end": 1950
    },
    {
        "title": "Spring Blossom",
        "place_of_origin": "United States",
        "artist_display": "Robert Lee (American, 1880–1955)",
        "inscriptions": "Signed bottom-center: \"Robert Lee.\"",
        "date_start": 1935,
        "date_end": 1940
    },
    {
        "title": "Quiet Harbor",
        "place_of_origin": "Ireland",
        "artist_display": "Maeve O'Reilly (Irish, 1895–1962)",
        "inscriptions": "Signed bottom-right: \"Maeve O'Reilly.\"",
        "date_start": 1955,
        "date_end": 1960
    },
    {
        "title": "Winter Scene",
        "place_of_origin": "Denmark",
        "artist_display": "Hans Christensen (Danish, 1880–1940)",
        "inscriptions": "Signed bottom-left: \"Hans Christensen.\"",
        "date_start": 1930,
        "date_end": 1935
    },
    {
        "title": "Summer Meadow",
        "place_of_origin": "Norway",
        "artist_display": "Ingrid Nilsen (Norwegian, 1900–1985)",
        "inscriptions": "Signed bottom-right: \"Ingrid Nilsen.\"",
        "date_start": 1940,
        "date_end": 1945
    },
    {
        "title": "Desert Mirage",
        "place_of_origin": "Spain",
        "artist_display": "Luis Rivera (Spanish, 1885–1965)",
        "inscriptions": "Signed bottom-left: \"Luis Rivera.\"",
        "date_start": 1950,
        "date_end": 1955
    },
    {
        "title": "Twilight Glow",
        "place_of_origin": "Portugal",
        "artist_display": "Fernando Silva (Portuguese, 1890–1968)",
        "inscriptions": "Signed bottom-center: \"Fernando Silva.\"",
        "date_start": 1955,
        "date_end": 1960
    },
    {
        "title": "Ancient Ruins",
        "place_of_origin": "Greece",
        "artist_display": "Elena Papadopoulos (Greek, 1870–1955)",
        "inscriptions": "Signed bottom-right: \"Elena Papadopoulos.\"",
        "date_start": 1930,
        "date_end": 1935
    },
    {
        "title": "Golden Fields",
        "place_of_origin": "Turkey",
        "artist_display": "Ahmet Yilmaz (Turkish, 1880–1960)",
        "inscriptions": "Signed bottom-left: \"Ahmet Yilmaz.\"",
        "date_start": 1940,
        "date_end": 1945
    }

]
const dotenv = require('dotenv')
dotenv.config()

const mongoose = require('mongoose')
const artwork = require('./Models/artwork')
mongoose.connect(process.env.URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("database successfully connected")
        senddata()
    })
    .catch((error) => {
        console.log(`error in database connection : `, error)
    })


const senddata = () => {
    data.map(async (item) => {
        const art = new artwork(item)
        await art.save()
    })
}