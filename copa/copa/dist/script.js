function solucao(ano) {
const copadomundo = [2014,2018,2022,2026,2030,2034,2038,2042,2046,2050,2054,2058,2062,2066,2070,2074,2078,2082,2086,2090,2094,2098,2102,2106]
const olimpiadas = [2016, 2020,2024,2028,2032,2036,2040,2044,2048,2052,2056,2060,2064,2068,2072,2076,2080,2084,2088,2092,2094,2098,2102,2016]


if ( ano > 2021 && Number.isInteger(ano) == true) {
  if (copadomundo.includes(ano) == true){
  console.log("COPA")
} else if (olimpiadas.includes(ano) == true) {
  console.log("JOGOS")
} else{console.log("MEH")}  
} else {console.log("Nao pode menos que 2021")}
}

solucao(2019);