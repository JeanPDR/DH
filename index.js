class Container {
    constructor(children) {
        this.children = children;
    }
    render() {
        return this.children.map((child => child.render()));
    }
 }
 class Image {
    constructor(url) {
        this.url = url;
    }
    render() {
        return `<img src=${this.url}/>`;
    }
 }
 class Text {
    constructor(html) {
        this.html = html;
    }
    render() {
        return `<div>${this.html}</div>`;
    }
 }
const COMPONENTS_CLASS = {
    Texto: Text,
    Container: Container,
    Imagem: Image
}
render(components);
function render(paginaStr) {
    const pagina = factoryComponentes(paginaStr);
    console.log(pagina.render());
}
function factoryComponentes(paginaObj) {
    if(paginaObj.items.length) {
        const instancias = paginaObj.items.map((item) => factoryComponentes(item));
       return new Container(instancias)
    }
    // TODO
    // instancia os componentes da página e retorna o container raiz
    return new COMPONENTS_CLASS[paginaObj.name](paginaObj.content);
}