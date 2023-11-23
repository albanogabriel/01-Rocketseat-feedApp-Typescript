# Key no React

## Porque key deve ser única ?

existem 3 momentos em que um componente é renderizado novamente no React.

1. Quando o estado altera
2. Quando a propriedade altera
3. Quando um componente pai renderiza novamente

### exemplo: renderização SEM keys:

Toda vez que uma lista é atualizada(ex: adicionado um item no array), vai renderizar todos os elementos de uma lista:

lista já existente -> const lista = [1, 2, 3, 4]
Adicionado no array -> lista = [...lista, 5, 6]

vai renderizar todos os itens da lista novamente -> [1, 2, 3, 4, 5, 6]

renderiza 1
renderiza 2
renderiza 3
renderiza 4
renderiza 5
renderiza 6

---

### exemplo: renderização COM keys:

renderizando uma lista novamente com keys:

React vai olhar e comparar as keys já existentes-> 1 já existe? sim, não preciso renderizar
React vai olhar e comparar as keys já existentes-> 2 já existe? sim, não preciso renderizar
React vai olhar e comparar as keys já existentes-> 3 já existe? sim, não preciso renderizar
React vai olhar e comparar as keys já existentes-> 4 já existe? sim, não preciso renderizar
React vai olhar e comparar as keys já existentes-> 5 já existe? não, opa, preciso renderizar
React vai olhar e comparar as keys já existentes-> 6 já existe? não, opa, preciso renderizar

então, o react vai renderizar apenas os itens 5, 6.

---

Se existem keys, ele não faz o processo de renderização tudo novamente ele simplesmente compara o que já tem e renderiza os novos itens que precisar

Ganhamos performance(ex: imagine ter que renderizar 500 pots toda vez)

---

## Porque não posso usar o índice ?

```js

### usando index[0], [1], [2]...

const post = [1, 2, 3, 4, 5]

//index: 0, 1, 2, 3, 4, 5

//caso eu quisesse trocar de posição:

const post = [2, 1, 5, 4, 3]

//index também mudaria: 0, 1, 2, 3, 4, 5

-------------------------

### usando id {id: 1}, {id: 2}, {id:3}, {id:4}, {id: 5}

const post = [1, 2, 3, 4, 5]
//Caso eu utilizesse um {id: 1}, {id: 2}, {id:3} ,{id:4}, {id: 5} pra cada item do array

const post = [2, 1, 5, 4, 3]
//O id também mudaria: id: 2, id:1, id: 5, id:4, id:3

```
