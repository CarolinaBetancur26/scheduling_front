    
export const RESPONSIVE = "[UI] responsive"

export const request = (width)=>(
    {
        type: RESPONSIVE,
        payload: width
    }
)