import Card from '../../../components/Card/Card'
import React from 'react'

export default function DonateCard() {
  return (
    <Card style={{ textAlign: 'center', minHeight: 200 }}>
      <span className="header">Donate</span>
      <hr />
      <div className="card-details">
        We appreciate any donation and will use the money to fund
        the project and make it better. Again, we thank you
        for your donations!
        <form
          action="https://www.paypal.com/cgi-bin/webscr"
          method="post"
          target="_top"
        >
          <input type="hidden" name="cmd" value="_s-xclick" />
          <input
            type="hidden"
            name="encrypted"
            value="-----BEGIN PKCS7-----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-----END PKCS7-----"
          />
          <input
            type="image"
            src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
            name="submit"
            alt="PayPal - The safer, easier way to pay online!"
          />
          <img
            alt=""
            src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
          />
        </form>
      </div>
      <style jsx>{`
        .header {
          font-size: 49px;
        }
        .card-details {
          margin-top: 10px;
        }
      `}</style>
    </Card>
  )
}
