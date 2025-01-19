addEventListener('load', (event) => {
    fetchData()
})

async function fetchData() {
    const userIP = await fetch('https://api64.ipify.org?format=json')
    .then(response => response.json())
    .then(result => {
        return result
    })
    .catch(error => console.error("Адрес на найден", error))
    console.log(userIP);
    
    const userInfo = await fetch(`http://ip-api.com/json/${userIP.ip}?fields=status,message,country,countryCode,region,regionName,city,zip,lat,lon,timezone,isp,org,as,proxy,query`)
    .then(response => response.json())
    .then(result => {
        return result
    })
    .catch(error => console.error(error))

    const contentElement = document.getElementById("content");

    console.log(userInfo);
    
    if (userInfo.countryCode == "UA") {
        contentElement.textContent = `You are not using VPN: ${userInfo.countryCode}`
    }
    else if (userInfo.proxy) {
        contentElement.textContent = `You are using VPN: ${userInfo.countryCode}`
    }
}