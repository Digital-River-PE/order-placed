import React from 'react'
import { FormattedMessage } from 'react-intl'
import { useCssHandles } from 'vtex.css-handles'

import { useOrder } from './components/OrderContext'

const CSS_HANDLES = ['orderNumber']

const OrderNumber = () => {
  const { orderId, paymentData } = useOrder()
  const handles = useCssHandles(CSS_HANDLES)
   console.log();
  return (
    <h3 className={`${handles.orderNumber} mv0 t-heading-3 lh-copy`}>
      <FormattedMessage id="store/order.header.number" values={{ orderId }} />
      <div>{`${JSON.stringify(paymentData)}`}</div>
    </h3>
  )
}

export default OrderNumber
