import C from './constants'

// logic for simillarity calculation
const calculateSimillarity = (matched, max) => {
    // returns the simillarity score in %
    const ans  = ( matched / max ) * 100
    return ans
}

const twoPersonSimillarity = (a,b,x) => {
    // both a and b are objects, with customer index and X index as the keys

    // a = input, b = data

   const matched = a.products[x].prod.filter(f => b.products[x].prod.includes(f))

   const max = (a.products[x].prod.length + b.products[x].prod.length) - matched.length

   const answer = calculateSimillarity(matched.length, max)

   return answer
}

export const SimillarityInTwo = twoPersonSimillarity

const nSimillarEntities = (a,x) => {
    // finds n no of most simillar customers in desending order

    // n = no. of simillar customers to be found, a = find simillar to this, x = xIndex value

    const bills = C.bills

    let result = []

    bills.forEach(bill => {
        if(bill.customer === a.customer){
            return
        }
        const r = twoPersonSimillarity(a, bill,x);
        result.push({customer: bill.customer, similarity: r.toFixed(2) + ' %' })
    })

    result.sort((a, b) => {
        return parseInt(b.similarity) - parseInt(a.similarity);
    });
    

    return result
}

export const manySimillar = nSimillarEntities 


const recommendProducts = (a,x) => {
    // Input is the list of bought products with additional info

    const bills = C.bills

    // this is he list of the purchased products

    const customer = a[0].cID;

    const aProducts = []

    a.forEach(item => {
        aProducts.push(parseInt(item.pID))
    })

    let arr = []

    // console.log(bills)

    bills.forEach(bill => {
        if(bill.customer === customer){
            return
        }
        bill.products[x].prod.forEach(i => {
            arr.push(i.p)
        })
    })

    const p = [].concat.apply([], arr)

    const data = p.filter(f => !aProducts.includes(f))

    const result = countDuplicate(data)

    const recommended = recommend(result)

    const ans = recommended.sort((a,b) => {
        return parseInt(b.repetation) - parseInt(a.repetation)
    })

    return ans
}

const countDuplicate = (arr) => {

    let counts = {}

    for (let i = 0; i < arr.length; i++) {
        if(counts[arr[i]]){
            counts[arr[i]] += 1
        }else{
            counts[arr[i]] = 1
        }
    }

    return counts
}

export const recommendor = recommendProducts

const recommend = (a) => {
    
    const threshhold = Math.floor(C.customers.length / 2)

    let result = []

    const b = Object.keys(a);

    b.forEach(prod => {
        const key = prod.toString()

       if(a[key] >= threshhold){
          result.push({
              product: prod,
              repetation: a[key]
          })
       }
    })

   return result

}

const checkBehaviour = (a,x) => {

    const customer = a.cID;

    const bills = C.bills;

    const bill = bills[customer];

    const currQ = parseInt(a.q);
    
    const cBillData =  bill.products[x].prod;

    let isMatched = false

    cBillData.forEach(b => {
        if(!isMatched && b.p === parseInt(a.pID) && b.q === parseInt(a.q)){
            // matched = b.q
            isMatched = true
        }
    })

    const reqBill = cBillData.filter(f => parseInt(f.p) === parseInt(a.pID))

    let result

    if(isMatched){
        result = 'as expected'
    }else if(reqBill[0] === undefined){
        result = 'new purchase'
    }else if(currQ > reqBill[0].q){
        result = `${currQ - reqBill[0].q} more purchased`
    }else {
        result  = `${reqBill[0].q - currQ} less purchased`
    }

    return result

}

export const getBehaviour = checkBehaviour
