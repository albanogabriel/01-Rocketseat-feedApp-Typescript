# Closures

O que acontece por debaixo dos panos no react quando chamamos uma função para alterar o estado:

O react ao atualizar um estado cria contextos novos

Então em algumas funções, pode ser que apesar do estado ter sido alterado para o novo contexto, a função ainda trabalha com o valor no contexto anterior

ou seja, por isso que isso aqui não funciona

```js
function Comment() {
  const [likes, setLikes] = useState(0)

  function addLike() {
    setLikes(likes + 1)
    setLikes(likes + 1)
  }
}
```

Continuará aumentando apenas 1 like a cada chamada dessa função. Porque a variavel do estado likes que tem o valor inicial de 0, ao dar o primeiro setLikes(likes + 1). Ainda terá o contexto que o valor de likes é 0

1º Contexto

estado -> likes = 0

1' - setLikes(0 + 1) ->
2' - setLikes(0 + 1) -> nessa execução o LIKES CONTINUA AINDA COM valor 0, porque no primeiro contexto o likes é 0

2º Contexto

estado likes = 1

## Para resolver esse problema

podemos passar uma função dentro da função que altera o estado

quando colocamos uma função dentro da função que altera o estado

O react nos permite acessar o valor mais recente da variavel likes, como um argumento dessa função

Dessa forma ele vai me dar de 2 em 2

```js
function Comment() {
  const [likes, setLikes] = useState(0)

  function addLike() {
    setLikes((likesStateUpdated) => {
      return likesStateUpdated + 1
    })

    setLikes((likesStateUpdated) => {
      return likesStateUpdated + 1
    })
  }
}
```

Sempre que vocÊ for atualizar uma informação e essa info depende do valor que ela tinha anteriormente, ou seja, depende dela mesmo: É legal utilizar esse padrão de chamar uma função dentro da função que altera o estado
