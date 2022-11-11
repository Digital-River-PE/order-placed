import React, { useEffect, useState } from 'react'
import { useCssHandles } from 'vtex.css-handles'

import { useOrder } from './components/OrderContext'

const CSS_HANDLES = ['orderStatus']

const OrderStatus = () => {
  const { orderId } = useOrder()
  const [orderStatus, setOrderStatus] = useState()
  const handles = useCssHandles(CSS_HANDLES)
  useEffect(() => {
    fetch(`/api/oms/pvt/orders/${orderId}`).then((orderResponse)=>{
      return orderResponse.json()
    }).then((order)=>{
      setOrderStatus(order.status)
    });
  }, [orderId])

  return (
    <small className={`${handles.orderStatus} c-muted-2 t-body lh-copy`}>
      Order Status:
      {
        (orderStatus==='payment-pending')?(<>Pending</>):(<>In Process</>)
      }
      ( Original-{orderStatus} )
    </small>
  )
}

export default OrderStatus
