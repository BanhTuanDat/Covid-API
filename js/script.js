// console.table(list);

$(document).ready(() => {
    
    function renderTable(list, id) {
        let table = $(`#${id}`)
        for (let i = 0; i <= 7; i++) {
            let td = document.createElement('td')
            td.className = 'content'
            table.append(td)
        }

        let content = document.getElementsByClassName('content')
        
        for (let i = 0; i <= list.length; i++) {
            let img = document.createElement('img')
            img.src = list[i].countryInfo.flag
            img.className = 'flag'
            let tr = document.createElement('tr')
            tr.innerHTML = list[i].country
            tr.appendChild(img)
            content[0].appendChild(tr)
        }
        
        for (let i = 0; i <= list.length; i++) {
            let tr = document.createElement('tr')
            tr.innerHTML = list[i].cases
            content[1].appendChild(tr)
        }

        for (let i = 0; i <= list.length; i++) {
            let tr = document.createElement('tr')
            tr.innerHTML = list[i].todayCases
            content[2].appendChild(tr)
        }

        for (let i = 0; i <= list.length; i++) {
            let tr = document.createElement('tr')
            tr.innerHTML = list[i].deaths
            content[3].appendChild(tr)
        }

        for (let i = 0; i <= list.length; i++) {
            let tr = document.createElement('tr')
            tr.innerHTML = list[i].todayDeaths
            content[4].appendChild(tr)
        }

        for (let i = 0; i <= list.length; i++) {
            let tr = document.createElement('tr')
            tr.innerHTML = list[i].recovered
            content[5].appendChild(tr)
        }

        for (let i = 0; i <= list.length; i++) {
            let tr = document.createElement('tr')
            tr.innerHTML = list[i].active
            content[6].appendChild(tr)
        }
        return table
    }

    async function fetchCovidAPI() {
        let res = await fetch('https://corona.lmao.ninja/v2/countries/')
        let result = await res.json()
        renderTable(result, 'global')
    }
    
    fetchCovidAPI()
})

