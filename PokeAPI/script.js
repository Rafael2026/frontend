const pokemonResp = await getItemData();
const craftingCompleteWait = 0;
const combiningMaterialsWait = 0;
const smeltingIronBarsWait = 0;
const shapingIronWait = 0;

logPokemons(pokemonResp.results);

async function getItemData() {

  const response = await fetch('https://pokeapi.co/api/v2/pokemon/', {

    method: 'GET', mode: 'cors',
    
    headers: {
      'Content-Type': 'application/json'
    }
  });

  return response.json();
}

function logPokemons(pokemons) {

  for (const pokemon of pokemons) {
    console.log(pokemon.name);
  }
}



async function fetchIPAddress(domain) {

  const resp = await fetch(`https://cloudflare-dns.com/dns-query?name=${domain}&type=A`, {
    
  headers: {
      'accept': 'application/dns-json'
    }
  });

  const respObject = await resp.json();

  for (const record of respObject.Answer) {
    return record.data;
  }

  return null;
}

const domain = 'api.boot.dev';
const ipAddress = await fetchIPAddress(domain);

if (!ipAddress) {
  console.log('something went wrong in fetchIPAddress')
} else {
  console.log(`found IP address for domain ${domain}: ${ipAddress}`)
}

function printURLParts(urlString) {
  const urlObj = new URL(urlString)
  console.log(`protocol: ${urlObj.protocol}`)
  console.log(`username: ${urlObj.username}`)
  console.log(`password: ${urlObj.password}`)
  console.log(`hostname: ${urlObj.hostname}`)
  console.log(`port: ${urlObj.port}`)
  console.log(`pathname: ${urlObj.pathname}`)
  console.log(`search: ${urlObj.search}`)
  console.log(`hash: ${urlObj.hash}`)
}

const fantasyQuestURL = 'http://dragonslayer:pwn3d@fantasyquest.com:8080/maps?sort=rank#id'
printURLParts(fantasyQuestURL);

jsconsole.log("I print first");
setTimeout(() => console.log("I print third because I'm waiting 100 milliseconds"), 100);
console.log("I print second");

// Don't touch below this line

setTimeout(() => console.log('Iron Longsword Complete!'), craftingCompleteWait)
setTimeout(() => console.log('Combining Materials...'), combiningMaterialsWait)
setTimeout(() => console.log('Smelting Iron Bars...'), smeltingIronBarsWait)
setTimeout(() => console.log('Shaping Iron...'), shapingIronWait)

console.log('Firing up the forge...')

await sleep(2500)
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}