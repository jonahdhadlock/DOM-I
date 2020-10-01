const siteContent = {
    "nav": {
        "nav-item-1": "Services",
        "nav-item-2": "Product",
        "nav-item-3": "Vision",
        "nav-item-4": "Features",
        "nav-item-5": "About",
        "nav-item-6": "Contact",
        "img-src": "img/logo.png"
    },
    "cta": {
        "h1": "DOM Is Awesome",
        "button": "Get Started",
        "img-src": "img/header-img.png"
    },
    "main-content": {
        "features-h4": "Features",
        "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "about-h4": "About",
        "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "middle-img-src": "img/mid-page-accent.jpg",
        "services-h4": "Services",
        "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "product-h4": "Product",
        "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "vision-h4": "Vision",
        "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    },
    "contact": {
        "contact-h4": "Contact",
        "address": "123 Way 456 Street Somewhere, USA",
        "phone": "1 (888) 888-8888",
        "email": "sales@greatidea.io",
    },
    "footer": {
        "copyright": "Copyright Great Idea! 2018"
    },
};

/** My Code Below */

/** Structure */
const title = document.querySelector('title');
const script = document.querySelector('script');
const html = document.querySelector('html');
const body = document.querySelector('body');
const head = document.querySelector('head');
const header = document.querySelector('header');
const h1 = document.querySelector('h1');
const nav = document.querySelectorAll('nav');
const div = document.querySelectorAll('div');
const button = document.querySelector('button');
const p = document.querySelectorAll('p');
const h4 = document.querySelectorAll('h4');
const link = document.querySelectorAll('link');
const a = document.querySelectorAll('a');
const section = document.querySelectorAll('section');
const footer = document.querySelector('footer');

/** Class */
const containerClass = document.querySelector('.container');
const logoClass = document.querySelector('.logo');
const ctaClass = document.querySelector('.cta');
const ctaTextClass = document.querySelector('.cta-text');
const mainContentClass = document.querySelector('.main-content');
const topContentClass = document.querySelector('.top-content');
const textContentClass = document.querySelector('.text-content');
const bottomContentClass = document.querySelector('.bottom-content');
const contactClass = document.querySelector('.contact');

/** Images/IDs */
const img = document.querySelectorAll('img');
const headerImg = document.querySelector('header-img');
const logoImg = document.querySelector('logo-img');
const ctaImg = document.querySelector('cta-img');
const middleImg = document.querySelector('middle-img');

/** Updates*/
const imgUpdate = document.querySelector("#logo-img");
imgUpdate.src = "img/logo.png";
const imgUpdate2 = document.querySelector('#cta-img');
imgUpdate2.src = "img/header-img.png";
const imgUpdate3 = document.querySelector('#middle-img');
imgUpdate3.src = "img/mid-page-accent.jpg";
a[0].textContent = siteContent["nav"]["nav-item-1"];
a[1].textContent = siteContent["nav"]["nav-item-2"];
a[2].textContent = siteContent["nav"]["nav-item-3"];
a[3].textContent = siteContent["nav"]["nav-item-4"];
a[4].textContent = siteContent["nav"]["nav-item-5"];
a[5].textContent = siteContent["nav"]["nav-item-6"];
button.textContent = siteContent["cta"]["button"];
h1.textContent = siteContent["cta"]["h1"];
h4[0].textContent = siteContent["main-content"]["features-h4"];
p[0].textContent = siteContent["main-content"]["features-content"];
h4[1].textContent = siteContent["main-content"]["about-h4"];
p[1].textContent = siteContent["main-content"]["about-content"];
h4[2].textContent = siteContent["main-content"]["services-h4"];
p[2].textContent = siteContent["main-content"]["services-content"];
h4[3].textContent = siteContent["main-content"]["product-h4"];
p[3].textContent = siteContent["main-content"]["product-content"];
h4[4].textContent = siteContent["main-content"]["vision-h4"];
p[4].textContent = siteContent["main-content"]["vision-content"];
h4[5].textContent = siteContent["contact"]["contact-h4"];
p[5].textContent = siteContent["contact"]["address"];
p[6].textContent = siteContent["contact"]["phone"];
p[7].textContent = siteContent["contact"]["email"];
footer.textContent = siteContent["footer"]["copyright"];