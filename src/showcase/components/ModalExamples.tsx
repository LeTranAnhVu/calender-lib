import React, { useContext } from 'react'
import type { ModalItem } from '@/layout/components/Modals/Modal'
import { ModalTypes } from '@/layout/components/Modals/Modal'
import { v4 as uuidv4 } from 'uuid'
import { ModalContext } from '@/layout/components/contexts/ModalContextProvider'
import { rangeFromOne } from '@/lib/array/range'
import Panel from '@/layout/components/Panel'

const CreateExampleForm = (n: number) => {
  return (
    <div style={{ width: '100%' }}>
      {rangeFromOne(n).map((i) => (
        <p key={i}>{i}</p>
      ))}
    </div>
  )
}

const LongForm = () => CreateExampleForm(50)
const ShortForm = () => CreateExampleForm(10)

const enum ExampleModalType {
  Confirmation,
  Notification,
  ShortForm,
  LongForm
}

const modalIds = [uuidv4(), uuidv4(), uuidv4(), uuidv4()]

function ModalExamples() {
  const { closeModal, addModal } = useContext(ModalContext)
  const modals: ModalItem[] = [
    {
      id: modalIds[0],
      type: ModalTypes.Operational,
      props: {
        isShowed: true,
        title: 'Long form title',
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
        component: LongForm
      }
    },
    {
      id: modalIds[1],
      type: ModalTypes.Operational,
      props: {
        isShowed: true,
        title: 'Short form title',
        onCancel: async () => {
          console.log('operational canceled')
          closeModal(modalIds[1])
          await Promise.resolve()
        },
        onExecute: async () => {
          console.log('operational executed')
          closeModal(modalIds[1])
          await Promise.resolve()
        },
        component: ShortForm
      }
    },
    {
      id: modalIds[2],
      type: ModalTypes.Notification,
      props: {
        isShowed: true,
        title: 'Notification title',
        body: 'this is the body of notification',
        onClose: async () => {
          console.log('notification modal closed')
          closeModal(modalIds[2])
          await Promise.resolve()
        }
      }
    },
    {
      id: modalIds[3],
      type: ModalTypes.Confirmation,
      props: {
        isShowed: true,
        title: 'Confirmation title',
        body: 'this is the content of confirm. Do you want to save it?',
        onConfirm: async () => {
          console.log('Confirmation modal confirmed')
          closeModal(modalIds[3])
          await Promise.resolve()
        },
        onCancel: async () => {
          console.log('Confirmation modal cancel')
          closeModal(modalIds[3])
          await Promise.resolve()
        }
      }
    }
  ]

  const showModals = (type: ExampleModalType) => {
    switch (type) {
      case ExampleModalType.LongForm:
        addModal(modals[0])
        break
      case ExampleModalType.ShortForm:
        addModal(modals[1])
        break

      case ExampleModalType.Notification:
        addModal(modals[2])
        break

      case ExampleModalType.Confirmation:
        addModal(modals[3])
        break
    }
  }

  return (
    <Panel>
      <button onClick={() => showModals(ExampleModalType.Confirmation)}>Show confirm modal</button>
      <button onClick={() => showModals(ExampleModalType.Notification)}>
        Show notification modal
      </button>
      <button onClick={() => showModals(ExampleModalType.ShortForm)}>Show short form modal</button>
      <button onClick={() => showModals(ExampleModalType.LongForm)}>Show long form modal</button>
    </Panel>
  )
}

export default ModalExamples
