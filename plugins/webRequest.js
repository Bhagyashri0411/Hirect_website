export default ({ app }, inject) => {
    inject('webRequest', webRequest);
};

export async function webRequest(endPoint){
    const api = 'https://hirect-datapool-app-m6m8i.ondigitalocean.app/api/candidates/'
        try{
            const res = await fetch(api+endPoint);
            if(res.status === 200){
                return await res.json();
            }
            else if(res.status >= 500 && res.status <= 600){
                return "Server error! Please try again later";
            }
            else{
                return "Something went wrong! Please try again.";
            }
        }
        catch(e){
            return e;
        }
    }