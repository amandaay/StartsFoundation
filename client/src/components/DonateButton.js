import React from "react"
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js"
import PropTypes from "prop-types"

const ButtonWrapper = ({ value, donateMonthly, userInfo, disabled }) => {
  const currency = "USD"
  const style = {
    layout: "vertical",
    label: donateMonthly ? "subscribe" : "pay",
  }
  return (
    <PayPalButtons
      style={style}
      disabled={disabled}
      forceReRender={[value, currency, style]}
      fundingSource={"paypal"}
      createOrder={(data, actions) => {
        return actions.order
          .create({
            purchase_units: [
              {
                amount: {
                  currency_code: currency,
                  value: value,
                },
              },
            ],
            application_context: {
              shipping_preference: "NO_SHIPPING",
            },
            payer: {
              name: {
                given_name: userInfo.firstName,
                surname: userInfo.lastName,
              },
              email_address: userInfo.email,
              phone: {
                phone_type: "MOBILE",
                phone_number: {
                  national_number: userInfo.phoneNumber.replace(/\D/g, ""),
                },
              },
            },
          })
          .then(orderId => {
            // Your code here after create the order
            return orderId
          })
      }}
      onApprove={function (data, actions) {
        return actions.order.capture().then(function () {
          // Your code here after capture the order
        })
      }}
    />
  )
}

export default function DonateButton({
  value,
  donateMonthly,
  userInfo,
  disabled,
}) {
  return (
    <div style={{ maxWidth: "100%" }}>
      <PayPalScriptProvider
        options={{
          "client-id":
            "Af1Zt6b76-JOeAY-YNMxAW40_TQm1eqzs0iHRxrm8sqR6RZ6H-AtM4lG9c1yZD_EbDQFC1YIjJDXDS1G",
          components: "buttons",
          currency: "USD",
        }}
      >
        <ButtonWrapper
          currency={"USD"}
          value={value}
          donateMonthly={donateMonthly}
          userInfo={userInfo}
          disabled={disabled}
        />
      </PayPalScriptProvider>
    </div>
  )
}

DonateButton.propTypes = {
  value: PropTypes.string,
  donateMonthly: PropTypes.bool,
  userInfo: PropTypes.object,
  disabled: PropTypes.bool,
}

ButtonWrapper.propTypes = {
  value: PropTypes.string,
  donateMonthly: PropTypes.bool,
  userInfo: PropTypes.object,
  disabled: PropTypes.bool,
}
