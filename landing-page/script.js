function toggleMenu() {
    const nav = document.getElementById('nav');
    const menuToggle = document.querySelector('.menu-toggle');
    nav.classList.toggle('active');
    menuToggle.classList.toggle('active');
}

function toggleServicos() {
    var lista = document.getElementById("lista-servicos");
    var seta = document.getElementById("seta");
    lista.classList.toggle("ativo");
    seta.classList.toggle("girar");
}

function toggleAccordion(element) {
    // Se o elemento clicado JÁ ESTIVER ATIVO, não fazemos nada.
    // Isso garante que ele permaneça aberto (regra: "sempre tenha um aberto")
    if (element.classList.contains('active')) {
        return;
    }

    const content = element.nextElementSibling;
    const icon = element.querySelector('.icon');
    
    // Seleciona o container pai (.accordion) para mexer apenas nos itens DESTE acordeão
    const parent = element.parentElement;

    // Fecha apenas os outros itens que estão dentro do mesmo pai
    parent.querySelectorAll('.accordion-item').forEach(item => {
        if (item !== element) {
            item.classList.remove('active');
            item.nextElementSibling.style.display = "none";
            const itemIcon = item.querySelector('.icon');
            if(itemIcon) itemIcon.innerText = "+";
        }
    });

    // Abre o item clicado
    content.style.display = "block";
    element.classList.add('active');
    icon.innerText = "−";
}

// Nova função para navegação via Dropdown
function goToAccordion(index) {
    // 1. Fecha o menu e dropdowns
    const nav = document.getElementById('nav');
    const menuToggle = document.querySelector('.menu-toggle');
    const dropdownServices = document.getElementById("lista-servicos");
    const seta = document.getElementById("seta");

    if(nav) nav.classList.remove('active');
    if(menuToggle) menuToggle.classList.remove('active');
    if(dropdownServices) dropdownServices.classList.remove("ativo");
    if(seta) seta.classList.remove("girar");

    // 2. Rola até a seção de soluções
    const section = document.getElementById('soluções');
    if (section) {
        const headerOffset = 140; // Ajuste conforme a altura do seu header fixo
        const elementPosition = section.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }

    // 3. Abre o item correspondente na seção de Soluções
    // O seletor abaixo busca APENAS dentro da section #soluções para não confundir com o FAQ
    const solutionItems = document.querySelectorAll('#soluções .accordion-item');
    
    if (solutionItems[index]) {
        if (!solutionItems[index].classList.contains('active')) {
            toggleAccordion(solutionItems[index]);
        }
    }
}

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        if (link.classList.contains('dropdown-toggle') || link.onclick) {
            return; 
        }

        document.getElementById('nav').classList.remove('active');
        const menuToggle = document.querySelector('.menu-toggle');
        if(menuToggle) menuToggle.classList.remove('active');
    });
});

window.onclick = function(event) {
    if (!event.target.matches('.dropdown-item a') && !event.target.matches('.dropdown-item a i')) {
        var dropdowns = document.getElementsByClassName("dropdown-vertical");
        var setas = document.getElementsByClassName("fa-chevron-down");
        
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('ativo')) {
                openDropdown.classList.remove('ativo');
            }
        }
        for (var i = 0; i < setas.length; i++) {
                if (setas[i].classList.contains('girar')) {
                setas[i].classList.remove('girar');
            }
        }
    }
}

const header = document.querySelector('header');
const headerTop = document.querySelector('.header-top');
let headerOffset = 0;

window.addEventListener('load', () => {
    if(headerTop) headerOffset = headerTop.offsetHeight;
});

window.addEventListener('scroll', () => {
    if (window.pageYOffset > headerOffset) {
        header.classList.add('sticky');
        document.body.style.paddingTop = header.offsetHeight + 'px';
    } else {
        header.classList.remove('sticky');
        document.body.style.paddingTop = '0';
    }
});