let array=["apples","bananas",'crawlers','cheese','chocolate','chocolatecake']

const check=fruit=>fruit=="crawlers"


console.log(array[2])
console.log(array.find(check))


let bigboy={
    days:[
        {
            datetime:"day 1",
            hours:[{
                datetime:"hour 0"
            },
            {
                datetime:"hour 1"
            },
            {
                datetime:"hour 2"
            },
            {
                datetime:"hour 3"
            },
            {
                datetime:"hour 4"
            },
            {
                datetime:"hour 5"
            },
            {
                datetime:"hour 6"
            },
            {
                datetime:"hour 7"
            },   
            {
                datetime:"hour 8"
            },
            {
                datetime:"hour 9"
            },
            {
                datetime:"hour 10"
            },
            {
                datetime:"hour 11"
            },
            {
                datetime:"hour 12"
            },
            {
                datetime:"hour 13"
            },
            {
                datetime:"hour 14"
            },
            {
                datetime:"hour 15"
            },
            {
                datetime:"hour 16"
            },
            {
                datetime:"hour 17"
            },
            {
                datetime:"hour 18"
            },
            {
                datetime:"hour 19"
            },
            {
                datetime:"hour 20"
            },
            {
                datetime:"hour 21"
            },
            {
                datetime:"hour 22"
            },
            {
                datetime:"hour 23"
            }
            ]
        },
        {
            datetime:"day 2",
            hours:[{
                datetime:"hour 0"
            },
            {
                datetime:"hour 1"
            },
            {
                datetime:"hour 2"
            },
            {
                datetime:"hour 3"
            },
            {
                datetime:"hour 4"
            },
            {
                datetime:"hour 5"
            },
            {
                datetime:"hour 6"
            },
            {
                datetime:"hour 7"
            },   
            {
                datetime:"hour 8"
            },
            {
                datetime:"hour 9"
            },
            {
                datetime:"hour 10"
            },
            {
                datetime:"hour 11"
            },
            {
                datetime:"hour 12"
            },
            {
                datetime:"hour 13"
            },
            {
                datetime:"hour 14"
            },
            {
                datetime:"hour 15"
            },
            {
                datetime:"hour 16"
            },
            {
                datetime:"hour 17"
            },
            {
                datetime:"hour 18"
            },
            {
                datetime:"hour 19"
            },
            {
                datetime:"hour 20"
            },
            {
                datetime:"hour 21"
            },
            {
                datetime:"hour 22"
            },
            {
                datetime:"hour 23"
            }
            ]
        },
        {
            datetime:"day 3",
            hours:[{
                datetime:"hour 0"
            },
            {
                datetime:"hour 1"
            },
            {
                datetime:"hour 2"
            },
            {
                datetime:"hour 3"
            },
            {
                datetime:"hour 4"
            },
            {
                datetime:"hour 5"
            },
            {
                datetime:"hour 6"
            },
            {
                datetime:"hour 7"
            },   
            {
                datetime:"hour 8"
            },
            {
                datetime:"hour 9"
            },
            {
                datetime:"hour 10"
            },
            {
                datetime:"hour 11"
            },
            {
                datetime:"hour 12"
            },
            {
                datetime:"hour 13"
            },
            {
                datetime:"hour 14"
            },
            {
                datetime:"hour 15"
            },
            {
                datetime:"hour 16"
            },
            {
                datetime:"hour 17"
            },
            {
                datetime:"hour 18"
            },
            {
                datetime:"hour 19"
            },
            {
                datetime:"hour 20"
            },
            {
                datetime:"hour 21"
            },
            {
                datetime:"hour 22"
            },
            {
                datetime:"hour 23"
            }
            ]
        }
    ]
}

let today = new Date()
today=String(today)

let tomorrow = new Date(today)
tomorrow.setDate(tomorrow.getDate() + 1)
tomorrow=String(tomorrow)

let yesterday = new Date(today)
yesterday.setDate(yesterday.getDate() - 1)
yestrday=String(yesterday)





let currHour=parseInt(today.substr(16,2))
let currDay=bigboy.days[1].datetime
console.log('Next 24 hours')
for(let i=0;i<24;i++){
    console.log(currDay)
    console.log(currHour)
    console.log(bigboy.days[1].hours[currHour].datetime)
    console.log('')
    currHour++
    if(currHour>23){
        currHour=0
        currDay=bigboy.days[2].datetime
    }
}

console.log('')
console.log('Last 24 hours')
currHour=parseInt(today.substr(16,2))
currDay=bigboy.days[1].datetime
for(let i=23;i>-1;i--){
    console.log(currDay)
    console.log(currHour)
    console.log(bigboy.days[1].hours[currHour].datetime)
    console.log('')
    currHour--
    if(currHour<0){
        currHour=23
        currDay=bigboy.days[0].datetime
    }
}