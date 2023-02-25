const data ={
    item1 :{
        type :'Sedans',
        description: ' Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.' 
    },
    item2:{
        type :'SUVs',
        description: 'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.'
    },
    item3:{
        type :'Luxury',
        description: ' Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.'
    }
}

const backgroundColor =['#E28525','#016972','#00403F']
// console.log(data.item1.type,data.item1.description)
const icon =['images/icon-sedans.svg','images/icon-suvs.svg','images/icon-luxury.svg']



// learning create function and use .map()  manipulate array
function imgArray(item){
    const img = document.createElement('img');
    img.src = item
    return img
}
const img = icon.map(imgArray)
// console.log(img)


function article(article){
    let articleH1 = document.createElement('h1')
    articleH1.textContent = article.type
    return articleH1
}
const articleArray = Object.values(data).map(article)
// console.log(articleArray)



function description(description){
    let descriptionP = document.createElement('p')
    descriptionP.textContent = description.description
    return descriptionP
}
const descriptionPArray = Object.values(data).map(description)
// console.log(descriptionPArray)



function item(keyItem){
    const item = document.createElement('div')
    // item.classList.add(`item ${idex}`)
    item.classList.add(keyItem)
    return item
}
const keyItem = Object.keys(data).map(item)



function MoveElementToParent(ObjectHTMLElement){
    console.log(ObjectHTMLElement.innerHTML)
}




for(i=0,len=keyItem.length;i<len;i++){
    // console.log(keyItem[i])
 
    let container = document.createElement('div')
    container.classList.add('container')

    let CardContainer = document.createElement('div')
    CardContainer.classList.add('card-container')

    let cardIcon = document.createElement('div')
    cardIcon.classList.add('card-icon')

    let cardArticle = document.createElement('div')
    cardArticle.classList.add('card-article')

    let cardArticleDescription = document.createElement('div')
    cardArticleDescription.classList.add('card-article-description')

    let button = document.createElement('button')
    button.classList.add('card-button')


    let Element = [container,CardContainer,cardIcon,cardArticle,cardArticleDescription,button]
    Element.forEach(element => {
        // console.log(element)
      
        if(element === container){
            container.style.background = backgroundColor[i]
            // container.appendChild(cardIcon)
        }
        // learning using appendChild
        if(element === cardIcon){
            cardIcon.appendChild(img[i])
        }

        if(element === cardArticle){
            cardArticle.appendChild(articleArray[i])
            // console.log(articleArray[i]) 
        }

        if(element === cardArticleDescription){
            cardArticleDescription.appendChild(descriptionPArray[i])
            // console.log(articleArray[i]) 
        }
        // learn using tag with method innerHTML
        if(element === button){
            button.innerHTML ='<p>Learn more</p>'
            button.style.color = backgroundColor[i]

            
        }
        if(element !== container){
            if(element === CardContainer){
                container.appendChild(element)
             }
        }
        if(element !== CardContainer){
            CardContainer.appendChild(element)
        }

        
        keyItem[i].appendChild(container)
       
    });
    
}       

console.log(keyItem[0])
console.log(keyItem[1])
// MoveElementToParent(keyItem[0])




document.body.appendChild(keyItem[0]);
document.body.appendChild(keyItem[1]);
document.body.appendChild(keyItem[2]);


