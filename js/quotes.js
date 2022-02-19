const quotes = [{
        quote: "큰 목표를 이루고 싶으면 허락을 구하지 마라",
        author: "미상"
    },
    {
        quote: "상황을 가장 잘 활용하는 사람이 가장 좋은 상황을 맞는다",
        author: "존 우든"
    },
    {
        quote: "창조적인 삶을 살려면 내가 틀릴지도 모른다는 공포를 버려야 한다",
        author: "미상"
    },
    {
        quote: "일반적인 것을 잃을 위험을 감수하지 않으면 평범한 것에 만족해야 한다",
        author: "짐 론"
    },
    {
        quote: "추구할 수 있는 용기가 있다면 우리의 모든 꿈은 이뤄질 수 있다",
        author: "월트 디즈니"
    },
    {
        quote: "기다리는 사람에게 좋은 일이 생기지만, 찾아나서는 사람에게는 더 좋은 일이 생긴다.",
        author: "미상"
    },
    {
        quote: "열정을 잃지 않고 실패에서 실패로 걸어가는 것이 성공이다.",
        author: "윈스턴 처칠"
    },
    {
        quote: "애벌레가 세상이 끝났다고 생각하는 순간 나비로 변했다.",
        author: "속담"
    },
    {
        quote: "성공한 사람이 되려고 노력하기보다 가치있는 사람이 되려고 노력하라",
        author: "알버트 아인슈타인"
    },
    {
        quote: "자기가 세상을 바꿀 수 있다고 생각할 정도로 미친 사람들이 세상을 바꾼다",
        author: "미상"
    },
    {
        quote: "행복은 나비다. 당신이 쫓아다니면 늘 잡을 수 없는 곳에 있지만, 조용히 앉아 있으면 당신에게 내려앉을지도 모른다",
        author: "나다니엘 호손"
    },

]

const quote = document.querySelector("#quote span:first-child")
const author = document.querySelector("#quote span:last-child")

const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]

quote.innerText = randomQuote.quote;
author.innerText = randomQuote.author;