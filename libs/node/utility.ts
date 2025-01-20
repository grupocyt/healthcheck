  /**
   * 
   * @param object 
   * @param key 
   * @returns 
   */
  export const OrderByAsc = (object:any, key:any ) => {
    return object.sort(function (a:any, b:any) {
            if (a[key] > b[key]) return 1
            if (a[key] < b[key]) return -1  
            return 0
      })
  }
  
  /**
   * 
   * @param object 
   * @param key 
   * @returns 
   */
  export const OrderByDesc = (object:any, key:any) => {
    return object.sort(function (a:any, b:any) {
            if (a[key] < b[key]) return 1
            if (a[key] > b[key]) return -1  
        return 0
      })
  } 