# imutabilidade

As variáveis não sofrem mutação. nós nunca alteramos uma variável na memória
Nós criamos um novo valor(um novo espaço na memória com o novo array, etc.)

Nós não mudamos o valor de uma variável comentários.
Nós criamos um novo valor, para a variável comentários.

## porquês ?

-> A imutabilidade nos permite ser mais performático

-> Ciar um novo valor na memória é mais rápido para o react fazer a comparação se aquilo mudou ou não, do que eu alterar um valor que já está na memória... então o react irá monitor o valor no memória para ver se mudou ou se não mudou, qual erao valor antigo, ql é o novo...

-> No React, nunca alteramos uma informação, sempre criamos uma nova informação e salvando aquilo dentro de um estado, é assim que faz a atualização de valores dentro de um estado

```js
function deleteComment(parameterOfCommentProps) {
  const commentsWithoutDeletedOne = comments.filter((commentItem) => {
    return commentItem === !parameterOfCommentProps
    // traduzindo a imutabilidade -> retorna um novo array -> itera o array de comments -> return (commentItem é diferente de parameterOfCommentProps ? true -> vai para o commentsWithoutDeletedOne. False -> descartado)      o que for diferente do parametro que nós passamos através da props content no componente -> retorna em um novo array
  })
  setComments(commentsWithoutDeletedOne)

  //1º - eventListener -> onClick={handleDeleteComment}
  //2º - eventListener Fuction -> handleDeleteComment() {...}
  //3º - bloco da eventlistener Function -> onDeleteComment(content)
  //4º - Puxa a function pela Props -> Comment({ content, onDeleteComment })
  //5º - Passa a function pela propriedade -> <Comment key={comment} content={comment} onDeleteComment={deleteComment} />
  //6º - function deleteComment(commentToDelete) {
  //   const commentsWithoutDeletedOne = comments.filter((comment) => {
  //     return comment === !commentToDelete
  //   })
}
```
