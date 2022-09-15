export const customFetch=(x)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(x);
        },2000)
    })

};