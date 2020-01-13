    
export const API_REQUEST = "[API] request"

export const request = (method, body, success, error)=>({
  type: API_REQUEST,
  payload: body,
  meta:{
      method,
      success,
      error,
      URL
  }
})