export class Router{

    routes = {} // Iniciando uma propriedade que é um objeto vazio

add(routeName, page)
{
    this.routes[routeName] = page // Adicionando um valor a minha propriedade (que é um objeto)
}


 route(event) //Nesse caso o event é o clique
{
    event = event || window.event // Verifica se eu passei algum evento, caso não pegue o evento do window
    event.preventDefault() // Não faça o padrão

    window.history.pushState({},"",event.target.href)
    let link = event.target;
    
    link.classList.toggle(".active")
    
    this.handle()

}

 handle()
{
    const {pathname} = window.location // Isso se chama desestruturação do objeto, onde ele vai pegar apenas a propriedade pathname e nesse caso colocar na constante
    const route = this.routes[pathname] || this.routes[404] // Caso o path name não exista, ele vai exibir a página 404


    fetch(route)
    .then(data => data.text()) // o fetch retorna uma promisse que vai ser armazenado na variavel data que é passada como argumento para essa nova funçao. Esse dado é posteriormente retornado em formato de texto
    .then(html => {
        document.querySelector('.content').innerHTML = html
    }) // o data.text vai ser retornado para a variavel html.
       
    
}

}