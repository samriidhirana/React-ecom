import React from 'react'

const FormatPrice = (props) => {
  return (Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 2,
}).format(props.price / 100)
);
    
}

export default FormatPrice