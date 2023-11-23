import { ImgHTMLAttributes } from 'react'

import styles from './Avatar.module.css'

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean
  //src: string - As propriedades que eu tenho dentro da AvatarProps que já existem dentro de uma tagimage tradicional(importado por extends ImgHTMLAttributes)
  //alt?: string - Assim como alt
}

export function Avatar({ hasBorder = true, ...props }: AvatarProps) {
  console.log(props)
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      // toda as propriedades que colocarmos no componente Avatar, vai ser automaticamente enviada para o nosso img
      {...props}
      // src={src}
      // alt={alt}
      // title={title}
    />
  )
}
