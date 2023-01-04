import React, { useContext, useEffect } from 'react'
import type { ModalItem } from '@/layout/components/Modals/Modal'
import { ModalTypes } from '@/layout/components/Modals/Modal'
import { v4 as uuidv4 } from 'uuid'
import { ModalContext } from '@/layout/components/contexts/ModalContextProvider'

const ShortCreateUserForm = () => {
  return (
    <form action="">
      <input type="text" placeholder="name" />
      <input type="text" placeholder="name" />
      <input type="text" placeholder="name" />
      <input type="text" placeholder="name" />
      <input type="text" placeholder="name" />
      <input type="text" placeholder="name" />
      <input type="text" placeholder="name" />
      <input type="text" placeholder="name" />
      <input type="text" placeholder="name" />
      <input type="text" placeholder="name" />
      <input type="text" placeholder="name" />
      <input type="text" placeholder="name" />
      <input type="text" placeholder="name" />
      <input type="text" placeholder="name" />
      <input type="text" placeholder="name" />
      <input type="text" placeholder="name" />
      <input type="text" placeholder="name" />
      <input type="text" placeholder="name" />
      <input type="text" placeholder="name" />
      <input type="text" placeholder="name" />
      <input type="text" placeholder="name" />
      <input type="text" placeholder="name" />
      <input type="text" placeholder="name" />
      <input type="text" placeholder="name" />
      <input type="text" placeholder="name" />
      <input type="text" placeholder="name" />
      <input type="text" placeholder="name" />
      <input type="text" placeholder="name" />
      <input type="text" placeholder="name" />
      <input type="text" placeholder="name" />
      <input type="text" placeholder="name" />
      <input type="text" placeholder="name" />
      <input type="text" placeholder="name" />
      <input type="text" placeholder="name" />
      <input type="text" placeholder="name" />
      <input type="text" placeholder="name" />
      <input type="text" placeholder="name" />
      <input type="text" placeholder="name" />
      <input type="text" placeholder="name" />
      <input type="text" placeholder="name" />
      <input type="text" placeholder="name" />
      <input type="text" placeholder="name" />
      <input type="text" placeholder="name" />
      <input type="text" placeholder="name" />
      <input type="text" placeholder="name" />
      <input type="text" placeholder="name" />
      <input type="text" placeholder="name" />
      <input type="text" placeholder="name" />
      <input type="text" placeholder="name" />
      <input type="text" placeholder="name" />
      <input type="text" placeholder="name" />
      <input type="text" placeholder="name" />
      <input type="text" placeholder="name" />
      <input type="text" placeholder="name" />
      <input type="submit" value="submit" />
    </form>
  )
}

const modalIds = [uuidv4(), uuidv4(), uuidv4()]

function ModalExamples() {
  const { closeModal, addModals } = useContext(ModalContext)
  const modals: ModalItem[] = [
    {
      id: modalIds[0],
      type: ModalTypes.Operational,
      props: {
        isShowed: true,
        title: 'Operational title',
        onCancel: async () => {
          console.log('operational canceled')
          closeModal(modalIds[0])
          await Promise.resolve()
        },
        onExecute: async () => {
          console.log('operational executed')
          closeModal(modalIds[0])
          await Promise.resolve()
        },
        component: ShortCreateUserForm
      }
    },
    {
      id: modalIds[1],
      type: ModalTypes.Notification,
      props: {
        isShowed: true,
        title: 'Notification title',
        body: 'this is the body of notification',
        onClose: async () => {
          console.log('notification modal closed')
          closeModal(modalIds[1])
          await Promise.resolve()
        }
      }
    },
    {
      id: modalIds[2],
      type: ModalTypes.Confirmation,
      props: {
        isShowed: true,
        title: 'Confirmation title',
        body: 'this is the content of confirm. Do you want to save it?',
        onConfirm: async () => {
          console.log('Confirmation modal confirmed')
          closeModal(modalIds[2])
          await Promise.resolve()
        },
        onCancel: async () => {
          console.log('Confirmation modal cancel')
          closeModal(modalIds[2])
          await Promise.resolve()
        }
      }
    }
  ]

  useEffect(() => {
    const modal: ModalItem = {
      id: '23434',
      type: ModalTypes.Operational,
      props: {
        isShowed: true,
        title: 'Operational title',
        onCancel: async () => {
          console.log('operational canceled')
          closeModal('23434')
          await Promise.resolve()
        },
        onExecute: async () => {
          console.log('operational executed')
          closeModal('23434')
          await Promise.resolve()
        },
        component: ShortCreateUserForm
      }
    }

    addModals([modal])
  }, [])

  const showModals = () => {
    addModals([...modals])
  }

  return (
    <div>
      <button onClick={showModals}>Show confirm modal</button>
    </div>
  )
}

export default ModalExamples
