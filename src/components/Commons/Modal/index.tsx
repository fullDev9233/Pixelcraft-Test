import { ReactNode, useState, useLayoutEffect } from 'react'
import { createPortal } from 'react-dom'

interface ModalProps {
  children: ReactNode
  wrapperId: string
}

const Modal = ({ children, wrapperId = 'react-portal' }: ModalProps) => {
  const [wrapper, setWrapper] = useState<Element | null>(null)

  useLayoutEffect(() => {
    let element = document.getElementById(wrapperId)
    let created = false

    if (!element) {
      created = true
      const _wrapper = document.createElement('div')
      _wrapper.setAttribute('id', wrapperId)
      document.body.appendChild(_wrapper)
      element = _wrapper
    }

    setWrapper(element)

    return () => {
      if (created && element?.parentNode) {
        element.parentNode.removeChild(element)
      }
    }
  }, [wrapperId])

  if (wrapper === null) return null

  return createPortal(children, wrapper)
}

export default Modal
