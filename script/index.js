// const API=`https://www.thecocktaildb.com/api/json/v1/1/`

// const API_LIST=`${API}filter.php?c=Cocktail`


// const API_SEARCH =`${API} search.php?s=`

// const getAllCocktails= async() =>{
//     const res= await fetch(API_LIST)
//     const req = await res.json()
//     console.log(req.drinks);
//     renderCocktails(req.drinks)
// }
// getAllCocktails()
// let output = document.getElementById('output')

// const renderCocktails =(drinks)=>{
//     output.innerHTML=''
//     drinks.map(drink=>{
//         let div = document.createElement('div')
//         let img =document.createElement('img')
//         let name =document.createElement('h3')
//         name.textContent=drink.strDrink
//         img.src = drink.strDrinkThumb
//         div.append(img,name)
//         output.append(div)
//     })
// }

const API = `https://www.thecocktaildb.com/api/json/v1/1/`
const API_lIST = `${API}filter.php?c=Cocktail`

const API_SEARCH = `${API}search.php?s=` // + name
const API_GET_DETAIL = `${API}lookup.php?i=` // + idCoctail 



const getCoctailsByName= async (e)=>{
    let name = e.target.value
    if(name.length > 1){
        const res = await fetch(API_SEARCH + name)
        const req = await res.json()
        console.log(req.drinks);
        renderCoctails(req.drinks)
    }else{
        getAllCoctails()
    }
}
const getCoctailsByid= async (id)=>{
    const res = await fetch(API_GET_DETAIL + id)
        const req = await res.json()
        console.log(req.drinks[0])
        renderOneCoctail(req.drinks[0])
}


const getAllCoctails = async()=>{
    const res = await fetch(API_lIST)
    const req = await res.json()
    console.log(req.drinks);
    renderCoctails(req.drinks)
}
getAllCoctails()
let output = document.getElementById('output')

const renderCoctails = (drinks)=>{
    output.innerHTML=''
    drinks.map(drink=>{
        let div = document.createElement('div')
        div.addEventListener('click',()=>getCoctailsByid(drink.idDrink))
        let img  = document.createElement('img')
        let name = document.createElement('h3')
        name.textContent=drink.strDrink
        img.src = drink.strDrinkThumb
        div.append(img, name)
        output.append(div)
    })
}

const renderOneCoctail =(coctail)=>{
    output.innerHTML=''
    let btn = document.createElement('button')
    btn.textContent='Go back'
    btn.addEventListener('click', ()=>getAllCoctails())
    let img = document.createElement('img')
    let name= document.createElement('h1')
    let descr= document.createElement('h4')
    let glass = document.createElement('b')
    img.src=coctail.strDrinkThumb
    name.textContent='Name:'+ coctail.strDrink
    descr.textContent='instruction :' +coctail.strInstructions
    glass.textContent='Glass:' + coctail.strGlass
    let ul = document.createElement('ul')
    let li_1=document.createElement('li')
    let li_2=document.createElement('li')
    let li_3=document.createElement('li')
    let li_4=document.createElement('li')
    li_1.textContent=`${coctail.strIngredient1} / ${coctail.strMeasure1}`
    li_2.textContent=`${coctail.strIngredient2} / ${coctail.strMeasure2}`
    li_3.textContent=`${coctail.strIngredient3} / ${coctail.strMeasure3}`
    li_4.textContent=`${coctail.strIngredient4} / ${coctail.strMeasure4}`
    ul.append(li_1,li_2,li_3,li_4)

    
    output.append(btn,img, name, descr,glass,ul)

}


// 1 перерисовать output
//2 отобразить кнопку назад которая просто вызовит функцию getallcocktails
// 3 отобразить данные картинку название описание стакан ингредиенты и пропорции
// 4 сдалать максимально красиво
// 5 создать отдельную ветку и в нее запушить 



