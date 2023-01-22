export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID

export const pageview = () => {
  window.fbq('track', 'PageView')
}

export const InitiateCheckout = () => {
  window.fbq('track', 'InitiateCheckout')
}

export const content_category = () => {
  window.fbq('track', 'content_category')
}

export const content_name = () => {
  window.fbq('track', 'content_name')
}

export const search_string = () => {
  window.fbq('track', 'search_string')
}

export const Purchase = () => {
  window.fbq('track', 'Purchase')
}
// https://developers.facebook.com/docs/facebook-pixel/advanced/
export const event = (name, options = {}) => {
  window.fbq('track', name, options)
}