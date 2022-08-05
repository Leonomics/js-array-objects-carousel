// console.log('slider')
const slides = [
	pick1 = {
		url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
		title: 'Svezia',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
	},

	pick2 ={
		url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
		title: 'Perù',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
	},

	pick3 ={
		url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
		title: 'Chile',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
	},
	pick4 ={
		url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
		title: 'Argentina',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
	},
	pick5 ={
		url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
		title: 'Colombia',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
	},
]

const wrapperElement = document.querySelector('.slides-wrapper');
wrapperElement.innerHTML ='';
let currentSlideIndex = 0;


for(let i=0; i<slides.length; i++)	{
	const src = slides[i];
	//console.log(src);
	const slide = document.createElement('li');
	wrapperElement.append(slide);
	slide.classList.add("slide");
	
	/*slide = `
	<li class="slide">
		<img src="${src}">
	</li>
	`*/

	let photo = document.createElement("img");
    photo.src = src.url;
    slide.append(photo);

	let content = document.createElement("div");
	content.classList.add("slide__content");
    slide.append(content);
	let title = document.createElement("h3");
	title.innerText = src.title;
	title.classList.add("slide__title");
	content.append(title);
	let description = document.createElement("p");
	description.innerText = src.description;
	description.classList.add("slide__description");
	content.append(description);


	//wrapperElement.innerHTML += slide;
	
}

const slideElements = document.querySelectorAll('.slide');
let currentSlide = slideElements[currentSlideIndex];

slideElements[currentSlideIndex].classList.add('active');

//setTimeout(function(){
    
    //slideElements[currentSlideIndex].classList.add('active');
    
    setInterval(function(){
    const lastIndex = slideElements.length - 1;

	if(currentSlideIndex < lastIndex)	{
        slideElements[0].classList.remove('active');
		currentSlideIndex++;
	}else{
		currentSlideIndex = 0;
	}

    if(currentSlideIndex != 0){
        slideElements[currentSlideIndex-1].classList.remove('active');
        slideElements[currentSlideIndex].classList.add('active');
    }else{
        slideElements[lastIndex].classList.remove('active');
        slideElements[currentSlideIndex].classList.add('active');
    }


}, 3000)//},3000);





//arrows
const nextElement = document.querySelector('.arrow-next');
const prevElement = document.querySelector('.arrow-prev');

nextElement.addEventListener('click', function(){
	console.log('go next');
	const lastIndex = slideElements.length - 1;

	const currentSlide = slideElements[currentSlideIndex];
	currentSlide.classList.remove('active');

	if(currentSlideIndex < lastIndex)	{

		currentSlideIndex++;
	}else{
		currentSlideIndex = 0;
	}
	
	const nextSlide = slideElements[currentSlideIndex];
	nextSlide.classList.add('active');
})

prevElement.addEventListener('click', function(){
	console.log('go prev');


	const lastIndex = slideElements.length - 1;
	const firstIndex = 0;
	const currentSlide = slideElements[currentSlideIndex];
	currentSlide.classList.remove('active');

	if(currentSlideIndex > firstIndex)	{
		currentSlideIndex--;
	}else{
	currentSlideIndex = lastIndex;
	}

	const previousSlide = slideElements[currentSlideIndex];
	previousSlide.classList.add('active');
})
