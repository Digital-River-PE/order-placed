import React from 'react'
import { useCssHandles } from 'vtex.css-handles'

import { useOrder } from './components/OrderContext'

const CSS_HANDLES = ['orderStatus']

const OrderStatus = () => {
  const { status } = useOrder()
  const handles = useCssHandles(CSS_HANDLES)
  return (
    <small className={`${handles.orderStatus} c-muted-2 t-body lh-copy`}>
      Order Status:
      {
        (status==='payment-pending')?(<>Pending</>):(<>In Process</>)
      }
      ( Original-{status} )
    </small>
  )
}

export default OrderStatus
